import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/Educacion';
import { EducacionService } from 'src/app/Servicios/educacion.service';

@Component({
  selector: 'app-registrar-educacion',
  templateUrl: './registrar-educacion.component.html',
  styleUrls: ['./registrar-educacion.component.css']
})
export class RegistrarEducacionComponent implements OnInit {

  educacion: Educacion = new Educacion();
  url: any;

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarEducacion(){
    this.educacionService.registrarEducacion(this.educacion).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.guardarEducacion();
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
      this.educacion.educacionLogo = event.target.files[0];

      console.log("Funcion readUrl");
      console.log(event.target.files[0]);

    }
  }


}
