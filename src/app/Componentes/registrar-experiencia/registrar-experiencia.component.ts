import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { HttpResponse, HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar-experiencia',
  templateUrl: './registrar-experiencia.component.html',
  styleUrls: ['./registrar-experiencia.component.css']
})
export class RegistrarExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia();
  url: any;

  constructor(private experienciaService: ExperienciaService, 
    private router: Router, private httpClient: HttpClient) {

   }

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

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
      this.experiencia.logo = event.target.files[0];

      console.log("Funcion readUrl");
      console.log(event.target.files[0]);

    }
  }

}