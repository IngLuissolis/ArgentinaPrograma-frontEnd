import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-registrar-experiencia',
  templateUrl: './registrar-experiencia.component.html',
  styleUrls: ['./registrar-experiencia.component.css']
})
export class RegistrarExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia();

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarExperiencia(){
    this.experienciaService.registrarExperiencia(this.experiencia).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.guardarExperiencia();
  }

}
