import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { ActualizarEmpleadoComponent } from './Componentes/actualizar-empleado/actualizar-empleado.component';
import { DatosEmpleadoComponent } from './Componentes/datos-empleado/datos-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { ActualizarExperienciaComponent } from './Componentes/actualizar-experiencia/actualizar-experiencia.component';
import { RegistrarExperienciaComponent } from './Componentes/registrar-experiencia/registrar-experiencia.component';
import { NavBarSuperiorComponent } from './Componentes/nav-bar-superior/nav-bar-superior.component';
import { LoginComponent } from './Seguridad/login/login/login.component';
import { SecurityComponent } from './Seguridad/login/security/security.component';
import { InterceptorService } from './Seguridad/Service/interceptor.service';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegistrarEducacionComponent } from './Componentes/registrar-educacion/registrar-educacion.component';
import { ActualizarEducacionComponent } from './Componentes/actualizar-educacion/actualizar-educacion.component';
import { RegistrarProyectoComponent } from './Componentes/registrar-proyecto/registrar-proyecto.component';
import { ActualizarProyectoComponent } from './Componentes/actualizar-proyecto/actualizar-proyecto.component';
import { RegistrarSkillComponent } from './Componentes/registrar-skill/registrar-skill.component';
import { ActualizarSkillComponent } from './Componentes/actualizar-skill/actualizar-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ActualizarEmpleadoComponent,
    DatosEmpleadoComponent,
    ExperienciaComponent,
    ActualizarExperienciaComponent,
    RegistrarExperienciaComponent,
    LoginComponent,
    NavBarSuperiorComponent,
    SecurityComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    RegistrarEducacionComponent,
    ActualizarEducacionComponent,
    RegistrarProyectoComponent,
    ActualizarProyectoComponent,
    RegistrarSkillComponent,
    ActualizarSkillComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
