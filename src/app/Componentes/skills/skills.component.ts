import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/Skill';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';
import { SkillService } from 'src/app/Servicios/skill.service';
import Swal from 'sweetalert2';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  estadoboton: boolean = true;
  botonSkillEditar: boolean = false;
  botonSkillEliminar: boolean = false;
  LogoSanitizado: any;

  constructor(private skillService: SkillService, private router: Router, 
    private httpClient: HttpClient, private loginService: LoginServiceService, 
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.accesoBotonEditar();

    this.obtenerListaDeSkills();
  }

  private accesoBotonEditar(){
    this.estadoboton = this.loginService.mensaje;

    if (this.estadoboton == false) {
      this.botonSkillEditar = true;
      this.botonSkillEliminar = true;
    }
  }

  private obtenerListaDeSkills(){
    this.skillService.obtenerListaDeSkills().subscribe(
      dato => {
        this.skills = dato;
      }
    )
  }

  irRegistrarSkill(){
    this.router.navigate(["registrar-skill"]);
  }

  editarSkillPorId(id: number){
    this.router.navigate(["actualizar-skill", id]);
  }

  eliminarSkillPorId(id: number){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Confirma si deseas eliminar Skill',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, elimínalo",
      cancelButtonText: "No, cancelar",
      //confirmButtonClass: "btn btn-danger",
      //cancelButtonClass: "btn btn-danger",
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.skillService.eliminarSkill(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaDeSkills();
          Swal.fire(
            "Skill eliminada",
            "Skill ha sido eliminada con exito",
            "success"
          )
        })
      }
    })
  }

  //metodo convertir imagen recibida desde backend
  createImageFromBlob(imagen: Blob): string {
    
    let objectURL = 'data:image/jpeg;base64,' + imagen;

    this.LogoSanitizado = (
      this.sanitizer.sanitize(SecurityContext.HTML, 
        this.sanitizer.bypassSecurityTrustHtml(objectURL)))
        
    return this.LogoSanitizado.toString();
    
  }
}
