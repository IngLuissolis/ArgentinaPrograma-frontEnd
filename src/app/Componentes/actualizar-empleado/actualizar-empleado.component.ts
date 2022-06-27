import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelos/Empleado';
import { EmpleadoService } from 'src/app/Servicios/empleado.service';
import { JwtClientService } from '../../Seguridad/Service/jwt-client.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id: number;
  empleado: Empleado = new Empleado();
  token: string;
  response: any;

  constructor(private router: Router, private empleadoService: EmpleadoService, 
    private jwtClientService: JwtClientService) { }

  ngOnInit(): void {

    //funciona, no tiene headers
    //this.obtenerDatosEmpleado();

    //this.token = sessionStorage.getItem("token")!;

    //funciona, no tiene headers
    //this.welcome(this.token);

    //no funciona con headers
    this.obtenerDatosEmpleadoToken(this.token);

  }

  onSubmit(){
/*    
    this.empleadoService.actualizarEmpleado(this.empleado).subscribe(dato => {
      this.irAPortfolio();
    }, error => console.log(error));

    console.log("empleado: ", this.empleado);
*/

    this.token = sessionStorage.getItem("token")!;

    this.jwtClientService.actualizarDatosEmpleadoToken(this.token, this.empleado).subscribe(
      dato => {
        console.log("dato empleado enviado: ", this.empleado);
        dato = this.empleado;
        this.irAPortfolio();
      },error => console.log("Error en la actualizacion de datos: ",error));

  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  obtenerDatosEmpleadoToken(token: string){
    let resp = this.jwtClientService.obtenerDatosEmpleadoToken(token);
    resp.subscribe( data => {this.response = data;
      this.empleado = data;
      console.log("response: ", this.response);
      });

  }

  public welcome(token: string){
    let resp = this.jwtClientService.welcome(token);
    resp.subscribe( data => this.response = data);
    console.log("response: ", this.response);
  }

  public obtenerDatosEmpleado(){
    this.empleadoService.obtenerDatosEmpleado().subscribe(
      dato => {
        this.empleado = dato;    
      });
    }

}
