import { HttpClient, HttpHeaders , HttpEvent, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Modelos/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //Esta URL obtiene los datos del empleado 
  private baseUrl = 'http://localhost:8080/api/v1/empleados/experiencias';
  //private baseUrl = 'https://proyecto-integrador-heroku-app.herokuapp.com/api/v1/empleados/experiencias';

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
    const formData = new FormData(); //

    var fechaIngresoStr = experiencia.fechaIngreso.toString();
    var fechaEgresoStr = experiencia.fechaEgreso.toString();

    formData.append("empresa", experiencia.empresa);
    formData.append("cargo", experiencia.cargo);
    formData.append("fechaIngreso", fechaIngresoStr);
    formData.append("fechaEgreso", fechaEgresoStr);
    formData.append("descripcion0", experiencia.descripcion0);
    formData.append("descripcion1", experiencia.descripcion1);
    formData.append("descripcion2", experiencia.descripcion2);
    formData.append("logo", experiencia.logo);

    return this.httpClient.post(`${this.baseUrl}`, formData); //pasamos experiencia
  }

  //metodo para editar experiencia
  editarExperienciaporId(id: number, experiencia: Experiencia):Observable<Object>{
    const formData = new FormData(); //

    var fechaIngresoStr = experiencia.fechaIngreso.toString();
    var fechaEgresoStr = experiencia.fechaEgreso.toString();

    formData.append("empresa", experiencia.empresa);
    formData.append("cargo", experiencia.cargo);
    formData.append("fechaIngreso", fechaIngresoStr);
    formData.append("fechaEgreso", fechaEgresoStr);
    formData.append("descripcion0", experiencia.descripcion0);
    formData.append("descripcion1", experiencia.descripcion1);
    formData.append("descripcion2", experiencia.descripcion2);
    formData.append("logo", experiencia.logo);

    return this.httpClient.put(`${this.baseUrl}/${id}`, formData);
  }

}