import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';

@Component({
  selector: 'app-nav-bar-superior',
  templateUrl: './nav-bar-superior.component.html',
  styleUrls: ['./nav-bar-superior.component.css']
})
export class NavBarSuperiorComponent implements OnInit {

  botonCerrarSesion: boolean = false;
  botonAbrirSesion: boolean = true;
  estadoboton: boolean;

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit(): void {

    this.accesoBotonEditar();

  }

  //metodo que se fija si el login es correcto, propiedad disabled de estadoboton es true
  private accesoBotonEditar(){
    this.estadoboton = this.loginService.mensaje;

    if (this.estadoboton == false) {
      this.botonCerrarSesion = true;
      this.botonAbrirSesion = false;
    }
  }

  irALogin(){
    this.router.navigate([`login`]);
  }

  cerrarSesion(){
    this.botonCerrarSesion = false;
    this.botonAbrirSesion = true;
    this.loginService.enviarMensaje(true);
    window.location.reload();
  }

}
