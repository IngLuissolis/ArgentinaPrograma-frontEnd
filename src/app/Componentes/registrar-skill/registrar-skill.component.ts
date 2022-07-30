import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/Skill';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-registrar-skill',
  templateUrl: './registrar-skill.component.html',
  styleUrls: ['./registrar-skill.component.css']
})
export class RegistrarSkillComponent implements OnInit {

  skill: Skill = new Skill();

  constructor(private skillService: SkillService, private router: Router) { }

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

}
