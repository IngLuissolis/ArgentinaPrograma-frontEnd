import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../Modelos/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //Esta URL obtiene los datos de proyectos
  //private baseUrl = 'http://localhost:8080/api/v1/empleados/skills';
  private baseUrl = 'https://proyecto-integrador-heroku-app.herokuapp.com/api/v1/empleados/skills';

  constructor(private httpClient: HttpClient) { }

  //Metodo para obtener lista de skills
  obtenerListaDeSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.baseUrl}`);
  }

  //metodo para obtener datos de skills por id
  obtenerSkillporId(id: number):Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.baseUrl}/${id}`);
  }

  //metodo para eliminar Skill
  eliminarSkill(id:number):Observable<Object>{
    return this.httpClient.delete<Skill>(`${this.baseUrl}/${id}`);
  }

  //metodo para registrar Skill
  registrarSkill(skill: Skill):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, skill);
  }

  //metodo para editar Skill
  editarSkillporId(id: number, skill: Skill):Observable<Object>{
    return this.httpClient.put<Skill>(`${this.baseUrl}/${id}`, skill);
  }
}
