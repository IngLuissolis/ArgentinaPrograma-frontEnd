import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Modelos/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //Esta URL obtiene los datos de proyectos
  private baseUrl = 'http://localhost:8080/api/v1/empleados/proyectos';

  constructor(private httpClient: HttpClient) { }

  //Metodo para obtener lista de proyectos
  obtenerListaDeProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(`${this.baseUrl}`);
  }

  //metodo para obtener datos de proyectos por id
  obtenerProyectoporId(id: number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.baseUrl}/${id}`);
  }

  //metodo para eliminar proyecto
  eliminarProyecto(id:number):Observable<Object>{
    return this.httpClient.delete<Proyecto>(`${this.baseUrl}/${id}`);
  }

  //metodo para registrar proyecto
  registrarProyecto(proyecto: Proyecto):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, proyecto);
  }

  //metodo para editar proyecto
  editarProyectoporId(id: number, proyecto: Proyecto):Observable<Object>{
    return this.httpClient.put<Proyecto>(`${this.baseUrl}/${id}`, proyecto);
  }
}
