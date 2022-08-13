import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/Modelos/Empleado';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient, private router: Router) { }

  token: any;
  //Esta URL obtiene los datos del empleado 
  private baseUrl = 'http://localhost:8080/api/v1/empleados';
  //private baseUrl = 'https://proyecto-integrador-heroku-app.herokuapp.com/api/v1/empleados';

  /*
  public generateToken(request: any){
    return this.http.post<any>("https://proyecto-integrador-heroku-app.herokuapp.com/api/auth/iniciarSesion", request, {responseType: 'text' as 'json'}); 
  }

  public welcome(token: string){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    console.log("Headers: " + headers + ", TokenStr " + tokenStr);
    return this.http.get("https://proyecto-integrador-heroku-app.herokuapp.com/api/auth/", {headers, responseType: 'text' as 'json'});
  }
*/
  public obtenerDatosEmpleadoToken(token: string) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get<Empleado>(`${this.baseUrl}/${1}`);
  }

  public actualizarDatosEmpleadoToken(token: string, empleado: Empleado): Observable<Object>{
    let tokenStr = 'Bearer ' + token;
    const cabecera = new HttpHeaders().set("authorization", tokenStr);
    return this.http.put<any>(`${this.baseUrl}/${1}`, empleado, {headers: cabecera});
  }

   public generateToken(request: any){
    return this.http.post<any>("http://localhost:8080/api/auth/iniciarSesion", request, {responseType: 'text' as 'json'}); 
  }

  public welcome(token: string){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    console.log("Headers: " + headers + ", TokenStr " + tokenStr);
    return this.http.get("http://localhost:8080/api/auth/", {headers, responseType: 'text' as 'json'});
  }

}
