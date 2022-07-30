import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/Proyecto';
import { ProyectoService } from 'src/app/Servicios/proyecto.service';

@Component({
  selector: 'app-actualizar-proyecto',
  templateUrl: './actualizar-proyecto.component.html',
  styleUrls: ['./actualizar-proyecto.component.css']
})
export class ActualizarProyectoComponent implements OnInit {

  id: number;
  proyecto: Proyecto = new Proyecto;

  constructor(private router: Router, private route: ActivatedRoute, 
    private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proyectoService.obtenerProyectoporId(this.id).subscribe(
      dato => {
        this.proyecto = dato;
      }
    )
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.proyectoService.editarProyectoporId(this.id, this.proyecto).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

}
