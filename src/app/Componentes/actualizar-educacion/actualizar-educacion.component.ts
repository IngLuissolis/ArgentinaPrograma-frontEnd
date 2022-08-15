import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/Educacion';
import { EducacionService } from 'src/app/Servicios/educacion.service';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-actualizar-educacion',
  templateUrl: './actualizar-educacion.component.html',
  styleUrls: ['./actualizar-educacion.component.css']
})
export class ActualizarEducacionComponent implements OnInit {

  id: number;
  educacion: Educacion = new Educacion;
  url: any;
  LogoSanitizado: any;

  constructor(private router: Router, private route: ActivatedRoute, 
    private educacionService: EducacionService,
    private sanitizer: DomSanitizer) { }

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

  //metodo convertir imagen recibida desde backend y mostrar
  createImageFromBlob(imagen: Blob): SafeHtml {
    
    let objectURL = 'data:image/jpeg;base64,' + imagen;

    this.LogoSanitizado = (
      this.sanitizer.sanitize(SecurityContext.HTML, 
        this.sanitizer.bypassSecurityTrustHtml(objectURL)));
        
    return this.LogoSanitizado;
  }

}
