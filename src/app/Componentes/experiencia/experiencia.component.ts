import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';
import Swal from 'sweetalert2';
//import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[];
  estadoboton: boolean = true;
  LogoSanitizado: any;

  constructor(private experienciaService: ExperienciaService, private router: Router, 
    private httpClient: HttpClient, private loginService: LoginServiceService, 
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.accesoBotonEditar();

    this.obtenerListaDeExperiencias();

  }

  //metodo que se fija si el login es correcto, propiedad disabled de estadoboton es true
  private accesoBotonEditar(){
    this.estadoboton = this.loginService.mensaje;
  }

  private obtenerListaDeExperiencias(){
    this.experienciaService.obtenerListaDeExperiencias().subscribe(
      dato => {
        this.experiencias = dato;
        
        console.log("Lista de Experiencias",this.experiencias);

      }
    );
  }

  irRegistrarExperiencia(){
    this.router.navigate(["registrar-experiencia"]);
  }

  editarExperienciaPorId(id: number){
    this.router.navigate(["actualizar-experiencia", id]);
  }

  eliminarExperienciaPorId(id: number){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Confirma si deseas eliminar la experiencia',
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
        this.experienciaService.eliminarExperiencia(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaDeExperiencias();
          Swal.fire(
            "Experiencia eliminada",
            "La Experiencia ha sido eliminado con exito",
            "success"
          )
        })
      }
    })
  }

  //metodo convertir imagen recibida desde backend
  createImageFromBlob(imagen: Blob): SafeHtml {
    
    let objectURL = 'data:image/jpeg;base64,' + imagen;

    this.LogoSanitizado = (
      this.sanitizer.sanitize(SecurityContext.HTML, 
        this.sanitizer.bypassSecurityTrustHtml(objectURL)));
        
    return this.LogoSanitizado;
  }

  /*
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.experiencias, event.previousIndex, event.currentIndex);
  }
  */
}
