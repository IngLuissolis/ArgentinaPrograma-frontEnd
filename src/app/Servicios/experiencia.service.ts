import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Modelos/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //Esta URL obtiene los datos del empleado 
  private baseUrl = 'http://localhost:8080/api/v1/empleados/experiencias';

  constructor(private httpClient: HttpClient) { }

  //Metodo para obtener lista de experiencias
  obtenerListaDeExperiencias(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(`${this.baseUrl}`);
  }

  //metodo para obtener datos de experiencia por id
  obtenerExperienciaporId(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(`${this.baseUrl}/${id}`);
  }

  //metodo para eliminar experiencia
  eliminarExperiencia(id:number):Observable<Object>{
    return this.httpClient.delete<Experiencia>(`${this.baseUrl}/${id}`);
  }

  //metodo para registrar experiencia
  registrarExperiencia(experiencia: Experiencia):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, experiencia);
  }

  //metodo para editar experiencia
  editarExperienciaporId(id: number, experiencia: Experiencia):Observable<Object>{
    return this.httpClient.put<Experiencia>(`${this.baseUrl}/${id}`, experiencia);
  }

}
