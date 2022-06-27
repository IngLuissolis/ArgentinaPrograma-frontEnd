import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './Componentes/actualizar-empleado/actualizar-empleado.component';
import { ActualizarExperienciaComponent } from './Componentes/actualizar-experiencia/actualizar-experiencia.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { RegistrarExperienciaComponent } from './Componentes/registrar-experiencia/registrar-experiencia.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { LoginComponent } from './Seguridad/login/login/login.component';

const routes: Routes = [
  {path: "", component: PortfolioComponent},
  {path: "login", component: LoginComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "actualizar-empleado", component: ActualizarEmpleadoComponent},
  {path: "actualizar-experiencia/:id", component: ActualizarExperienciaComponent},
  {path: "registrar-experiencia", component: RegistrarExperienciaComponent},
  {path: "educacion", component: EducacionComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "skills", component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
