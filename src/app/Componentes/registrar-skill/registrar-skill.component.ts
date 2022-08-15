import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/Skill';
import { SkillService } from 'src/app/Servicios/skill.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-registrar-skill',
  templateUrl: './registrar-skill.component.html',
  styleUrls: ['./registrar-skill.component.css']
})
export class RegistrarSkillComponent implements OnInit {

  skill: Skill = new Skill();
  url: any;
  LogoSanitizado: any;

  constructor(private skillService: SkillService, private router: Router, 
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  guardarSkill(){
    this.skillService.registrarSkill(this.skill).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.guardarSkill();
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
      this.skill.skillLogo = event.target.files[0];

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
