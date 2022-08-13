import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/Experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-actualizar-experiencia',
  templateUrl: './actualizar-experiencia.component.html',
  styleUrls: ['./actualizar-experiencia.component.css']
})
export class ActualizarExperienciaComponent implements OnInit {

  id: number;
  experiencia: Experiencia = new Experiencia;
  url: any;
  LogoSanitizado: any;

  constructor(private router: Router, private route: ActivatedRoute, 
    private experienciaService: ExperienciaService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.experienciaService.obtenerExperienciaporId(this.id).subscribe(
      dato => {
        this.experiencia = dato;
      }
    )

    //this.url = this.createImageFromBlob(this.experiencia.logo);

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

  //metodo convertir imagen recibida desde backend y mostrar
  createImageFromBlob(imagen: Blob): SafeHtml {
    
    let objectURL = 'data:image/jpeg;base64,' + imagen;

    this.LogoSanitizado = (
      this.sanitizer.sanitize(SecurityContext.HTML, 
        this.sanitizer.bypassSecurityTrustHtml(objectURL)));
        
    return this.LogoSanitizado;
    
  }

}
