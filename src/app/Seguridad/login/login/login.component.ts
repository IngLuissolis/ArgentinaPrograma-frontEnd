import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';
import { loginInterface } from '../../models/loginInterface';
import { responseInterface } from '../../models/responseInterface';
import { AuthenticationService } from '../../Service/authentication.service';
import { JwtClientService } from '../../Service/jwt-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  mensaje: boolean;

  constructor(private FormBuilder: FormBuilder, private authenticationService: AuthenticationService, private router:Router, 
    private httpClient: HttpClient, private service: JwtClientService, private loginService: LoginServiceService) {

    //Inicializamos formulario
    this.form = this.FormBuilder.group(
      {
        usernameOrEmail: [``, [Validators.required]],
        password: [``, [Validators.required]],
      }
    );


   }

  ngOnInit(): void {

  }

  //recibir email
  get usernameOrEmail(){
    return this.form.get(`usernameOrEmail`);
  }

  //recibir password
  get password(){
    return this.form.get(`password`);
  }


  //Envio de datos para recibir token
  onEnviar(event: Event){

    //console.log("Form", this.form);
    //metodo preventDefault cancela el curso normal del evento onSubmit
    event.preventDefault;

    this.authenticationService.IniciarSesion(this.form.value).subscribe(
      dato => {
        //console.log("Datos Recibidos desde server: ", dato); //JSON.stringify(dato)
        console.log("sessionStore.getItem: ",sessionStorage.getItem('currentUser'));
  

        this.router.navigate([`portfolio`]);
      }
      );

    const SesionStorage = JSON.parse(sessionStorage.getItem('currentUser')!);
    //console.log("SesionStorage: ", SesionStorage.tokenDeAcceso);

    //habilita botones de edicion en portfolio
    this.mensaje = false;
    //console.log("login valorbotonacercade: " + this.mensaje);
    this.loginService.enviarMensaje(this.mensaje);

  }

  onCancelar(){
    this.router.navigate([`portfolio`]);
  }

/*
  onEnviar(event: Event) {
    const usuarioLogin: loginInterface = {
      usernameOrEmail: this.form.value.usernameOrEmail,
      password: this.form.value.password,
    }

    let resp = this.service.generateToken(usuarioLogin);

    resp.subscribe( data => {
      const b = JSON.parse(data);
      console.log("Token : " + b.tokenDeAcceso); //la magia esta aca, b.tokenDeAcceso contiene Token, respuesta del servidor en un JSON
      sessionStorage.setItem("token", b.tokenDeAcceso);

      this.router.navigate([`portfolio`]);

      //habilita botones de edicion en portfolio
      this.mensaje = false;
      console.log("login valorbotonacercade: " + this.mensaje);
      this.loginService.enviarMensaje(this.mensaje);
      
    });
  }
*/
}
