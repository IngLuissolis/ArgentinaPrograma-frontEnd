import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[];
  estadoboton: boolean = true;

  constructor(private experienciaService: ExperienciaService, private router: Router, 
    private httpClient: HttpClient, private loginService: LoginServiceService) { }

  ngOnInit(): void {

    this.accesoBotonEditar();

    this.obtenerListaDeExperiencias();

/*    let httpHeaders: HttpHeaders = new HttpHeaders();

    const token = sessionStorage.getItem("token");
    console.log("get token ",token);

    httpHeaders = httpHeaders.append("Authorization", "Bearer " + token);

    this.httpClient.get<any>('http://localhost:8080/api/v1/experiencias',
    {
      headers: httpHeaders,
      observe: 'response'
    }).subscribe(dato =>{
      this.experiencias = dato;
    });
*/

  }

  //metodo que se fija si el login es correcto, propiedad disabled de estadoboton es true
  private accesoBotonEditar(){
    this.estadoboton = this.loginService.mensaje;
  }

  private obtenerListaDeExperiencias(){
    this.experienciaService.obtenerListaDeExperiencias().subscribe(
      dato => {
        this.experiencias = dato;
      }
    )
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
      text: 'Confirma si deseas eliminar al empleado',
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

}
