import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEducacionComponent } from './Componentes/actualizar-educacion/actualizar-educacion.component';
import { ActualizarEmpleadoComponent } from './Componentes/actualizar-empleado/actualizar-empleado.component';
import { ActualizarExperienciaComponent } from './Componentes/actualizar-experiencia/actualizar-experiencia.component';
import { ActualizarProyectoComponent } from './Componentes/actualizar-proyecto/actualizar-proyecto.component';
import { ActualizarSkillComponent } from './Componentes/actualizar-skill/actualizar-skill.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { RegistrarEducacionComponent } from './Componentes/registrar-educacion/registrar-educacion.component';
import { RegistrarExperienciaComponent } from './Componentes/registrar-experiencia/registrar-experiencia.component';
import { RegistrarProyectoComponent } from './Componentes/registrar-proyecto/registrar-proyecto.component';
import { RegistrarSkillComponent } from './Componentes/registrar-skill/registrar-skill.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { LoginComponent } from './Seguridad/login/login/login.component';

const routes: Routes = [
  {path: "", component: PortfolioComponent},
  {path: "login", component: LoginComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "actualizar-empleado", component: ActualizarEmpleadoComponent},
  {path: "actualizar-experiencia/:id", component: ActualizarExperienciaComponent},
  {path: "actualizar-educacion/:id", component: ActualizarEducacionComponent},
  {path: "actualizar-proyecto/:id", component: ActualizarProyectoComponent},
  {path: "actualizar-skill/:id", component: ActualizarSkillComponent},
  {path: "registrar-experiencia", component: RegistrarExperienciaComponent},
  {path: "registrar-educacion", component: RegistrarEducacionComponent},
  {path: "registrar-proyecto", component: RegistrarProyectoComponent},
  {path: "registrar-skill", component: RegistrarSkillComponent},
  {path: "educacion", component: EducacionComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "skills", component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
