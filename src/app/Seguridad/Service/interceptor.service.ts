import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticationService: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser = this.autenticationService.UsuarioAutenticado;

    //let token = sessionStorage.getItem("token");
    //console.log("token en sessionStorage: ", token);
    console.log("currentUser.tokenDeAcceso: ", currentUser.tokenDeAcceso);
    
    if(currentUser && currentUser.tokenDeAcceso){
      console.log("Ingreso a if interceptor")
      req = req.clone(
        {
          setHeaders: {
            authorization: `Bearer ${currentUser.tokenDeAcceso}`
          }
        }
      )
    }
    
    console.log("Interceptor esta corriendo ", JSON.stringify(currentUser));
    console.log("req: ", req);
    return next.handle(req);
  }
}
