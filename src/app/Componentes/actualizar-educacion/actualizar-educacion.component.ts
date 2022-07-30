import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/Educacion';
import { EducacionService } from 'src/app/Servicios/educacion.service';

@Component({
  selector: 'app-actualizar-educacion',
  templateUrl: './actualizar-educacion.component.html',
  styleUrls: ['./actualizar-educacion.component.css']
})
export class ActualizarEducacionComponent implements OnInit {

  id: number;
  educacion: Educacion = new Educacion;

  constructor(private router: Router, private route: ActivatedRoute, 
    private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.educacionService.obtenerEducacionporId(this.id).subscribe(
      dato => {
        this.educacion = dato;
      }
    )
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.educacionService.editarEducacionporId(this.id, this.educacion).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

}
