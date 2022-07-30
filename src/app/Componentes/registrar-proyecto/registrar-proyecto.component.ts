import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/Proyecto';
import { ProyectoService } from 'src/app/Servicios/proyecto.service';

@Component({
  selector: 'app-registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styleUrls: ['./registrar-proyecto.component.css']
})
export class RegistrarProyectoComponent implements OnInit {

  proyecto: Proyecto = new Proyecto();

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarProyecto(){
    this.proyectoService.registrarProyecto(this.proyecto).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.guardarProyecto();
  }

}
