import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../Modelos/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //Esta URL obtiene los datos educacion
  private baseUrl = 'http://localhost:8080/api/v1/empleados/educaciones';
  //private baseUrl = 'https://proyecto-integrador-heroku-app.herokuapp.com/api/v1/empleados/educaciones';

  constructor(private httpClient: HttpClient) { }

  //Metodo para obtener lista de educaciones
  obtenerListaDeEducaciones(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(`${this.baseUrl}`);
  }

  //metodo para obtener datos de educaciones por id
  obtenerEducacionporId(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(`${this.baseUrl}/${id}`);
  }

  //metodo para eliminar educacion
  eliminarEducacion(id:number):Observable<Object>{
    return this.httpClient.delete<Educacion>(`${this.baseUrl}/${id}`);
  }

  //metodo para registrar educacion
  registrarEducacion(educacion: Educacion):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, educacion);
  }

  //metodo para editar educacion
  editarEducacionporId(id: number, educacion: Educacion):Observable<Object>{
    return this.httpClient.put<Educacion>(`${this.baseUrl}/${id}`, educacion);
  }
}
