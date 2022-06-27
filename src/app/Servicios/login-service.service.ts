import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  mensaje: boolean = true;
  private enviarMensajeSubject = new Subject<boolean>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor() { }

  enviarMensaje(mensaje: boolean) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
