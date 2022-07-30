import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-actualizar-experiencia',
  templateUrl: './actualizar-experiencia.component.html',
  styleUrls: ['./actualizar-experiencia.component.css']
})
export class ActualizarExperienciaComponent implements OnInit {

  id: number;
  experiencia: Experiencia = new Experiencia;

  constructor(private router: Router, private route: ActivatedRoute, 
    private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.experienciaService.obtenerExperienciaporId(this.id).subscribe(
      dato => {
        this.experiencia = dato;
      }
    )
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.experienciaService.editarExperienciaporId(this.id, this.experiencia).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

}
