import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/Proyecto';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';
import { ProyectoService } from 'src/app/Servicios/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[];
  estadoboton: boolean = true;

  constructor(private proyectoService: ProyectoService, private router: Router, 
    private httpClient: HttpClient, private loginService: LoginServiceService) { }

  ngOnInit(): void {

    this.accesoBotonEditar();

    this.obtenerListaDeProyectos();

  }

  private accesoBotonEditar(){
    this.estadoboton = this.loginService.mensaje;
  }

  private obtenerListaDeProyectos(){
    this.proyectoService.obtenerListaDeProyectos().subscribe(
      dato => {
        this.proyectos = dato;
      }
    )
  }

  irRegistrarProyecto(){
    this.router.navigate(["registrar-proyecto"]);
  }

  editarProyectoPorId(id: number){
    this.router.navigate(["actualizar-proyecto", id]);
  }

  eliminarProyectoPorId(id: number){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Confirma si deseas eliminar proyecto',
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
        this.proyectoService.eliminarProyecto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaDeProyectos();
          Swal.fire(
            "Proyecto eliminado",
            "El proyecto ha sido eliminado con exito",
            "success"
          )
        })
      }
    })
  }

}
