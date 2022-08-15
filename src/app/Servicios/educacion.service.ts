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
    
    let EducacionFormData = new FormData();

    EducacionFormData = this.cargaFormData(educacion);

    return this.httpClient.post(`${this.baseUrl}`, EducacionFormData );
    //return this.httpClient.post(`${this.baseUrl}`, educacion);
  }

  //metodo para editar educacion
  editarEducacionporId(id: number, educacion: Educacion):Observable<Object>{
    let EducacionFormData = new FormData(); //

    EducacionFormData = this.cargaFormData(educacion);

    return this.httpClient.put(`${this.baseUrl}/${id}`, EducacionFormData);
  }

  cargaFormData(educacion: Educacion): FormData {

    const formData = new FormData();

    var fechaIngresoStr = educacion.fechaIngresoCurso.toString();
    var fechaEgresoStr = educacion.fechaIngresoCurso.toString();

    formData.append("institucion", educacion.institucion);
    formData.append("nombreCurso", educacion.nombreCurso);
    formData.append("fechaIngresoCursoStr", fechaIngresoStr);
    formData.append("fechaEgresoCursoStr", fechaEgresoStr);
    formData.append("educacionDescripcion0", educacion.educacionDescripcion0);
    formData.append("educacionDescripcion1", educacion.educacionDescripcion1);
    formData.append("educacionDescripcion2", educacion.educacionDescripcion2);
    formData.append("educacionLogo", educacion.educacionLogo);

    return formData;
  }
}
