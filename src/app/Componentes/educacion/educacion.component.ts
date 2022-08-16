import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/Educacion';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';
import Swal from 'sweetalert2';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[];
  estadoboton: boolean = true;
  LogoSanitizado: any;

  constructor(private educacionService: EducacionService, private router: Router,
    private httpClient: HttpClient, private loginService: LoginServiceService, 
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.accesoBotonEditar();

    this.obtenerListaDeEducaciones();
  }

  //metodo que se fija si el login es correcto, propiedad disabled de estadoboton es true
  private accesoBotonEditar(){
    this.estadoboton = this.loginService.mensaje;
  }

  private obtenerListaDeEducaciones(){
    this.educacionService.obtenerListaDeEducaciones().subscribe(
      dato => {
        this.educaciones = dato;
      }
    )
  }

  irRegistrarEducacion(){
    this.router.navigate(["registrar-educacion"]);
  }

  editarEducacionPorId(id: number){
    this.router.navigate(["actualizar-educacion", id]);
  }

  eliminarEducacionPorId(id: number){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Confirma si deseas eliminar la educación',
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
        this.educacionService.eliminarEducacion(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaDeEducaciones();
          Swal.fire(
            "Educación eliminada",
            "La Educación ha sido eliminada con exito",
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.educaciones, event.previousIndex, event.currentIndex);
  }

}
