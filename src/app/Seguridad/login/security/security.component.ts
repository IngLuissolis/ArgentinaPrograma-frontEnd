import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../../Service/jwt-client.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  response: any;

  constructor(private service: JwtClientService, private login: LoginComponent) { }

  authRequest: any = {
    "usernameOrEmail": this.login.usernameOrEmail,
    "password": this.login.password,
  };

  ngOnInit(): void {
    //this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){

    let resp = this.service.generateToken(authRequest);
    //resp.subscribe( data => this.accessApi(data));
    resp.subscribe( data => {
      const b = JSON.parse(data);
      console.log("Token : " + b.tokenDeAcceso); //la magia esta aca, b.tokenDeAcceso contiene Token, respuesta del servidor en un JSON
      this.accessApi(b.tokenDeAcceso);
    });
  }

  public accessApi(token: string){
    let resp = this.service.welcome(token);
    resp.subscribe( data => this.response = data);
  }

}
