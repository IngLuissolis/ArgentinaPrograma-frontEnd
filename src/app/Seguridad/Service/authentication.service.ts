import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //rl = "http://localhost:8080/api/auth/iniciarSesion";
  url = "https://proyecto-integrador-heroku-app.herokuapp.com/api/auth/iniciarSesion";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {

    console.log("El servicio de autentificacion esta corriendo");

    //incializar currentUserSubject
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
   }

   IniciarSesion(credenciales: any):Observable<any>{

    //console.log("credenciales:", credenciales);

    return this.http.post(this.url, credenciales).pipe(map(data => {
      //guarda en sessionStorage cadena de caracteres
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));

   }

   get UsuarioAutenticado(){

    console.log("CurrentUserSubject ", this.currentUserSubject.value);
    return this.currentUserSubject.value;
   }


}
