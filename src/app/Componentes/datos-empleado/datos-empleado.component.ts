import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelos/Empleado';
import { EmpleadoService } from 'src/app/Servicios/empleado.service';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';

@Component({
  selector: 'app-datos-empleado',
  templateUrl: './datos-empleado.component.html',
  styleUrls: ['./datos-empleado.component.css']
})
export class DatosEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado;
  estadoboton: boolean = true;

  constructor(private empleadoService: EmpleadoService, private router: Router,
    private loginService: LoginServiceService) { }

  ngOnInit(): void {

    this.obtenerDatosEmpleado();

    this.accesoBotonEditar();

    console.log("token: ", sessionStorage.getItem("token"));

  }

  private obtenerDatosEmpleado(){
    this.empleadoService.obtenerDatosEmpleado().subscribe(
      dato => {
        this.empleado = dato;
      }
    )
  }

  actualizarDatos() {
    this.router.navigate(['actualizar-empleado']);
  }

  //metodo que se fija si el login es correcto, propiedad disabled de estadoboton es true
  private accesoBotonEditar(){
    this.estadoboton = this.loginService.mensaje;
  }
}
