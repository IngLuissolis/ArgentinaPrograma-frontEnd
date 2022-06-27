import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../Modelos/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene los datos del empleado 
  //private baseUrl = 'http://localhost:8080/api/v1/empleados';
  private baseUrl = 'https://proyecto-integrador-heroku-app.herokuapp.com/api/v1/empleados';

  constructor(private httpClient: HttpClient) { }

  //metodo para obtener datos de empleado
  obtenerDatosEmpleado():Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${1}`);
  }


  //actualizar empleado
  actualizarEmpleado(empleado: Empleado): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${1}`, empleado);
  }
}
