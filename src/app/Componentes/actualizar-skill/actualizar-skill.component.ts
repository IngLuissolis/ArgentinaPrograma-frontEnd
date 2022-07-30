import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/Skill';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-actualizar-skill',
  templateUrl: './actualizar-skill.component.html',
  styleUrls: ['./actualizar-skill.component.css']
})
export class ActualizarSkillComponent implements OnInit {

  id: number;
  skill: Skill = new Skill;

  constructor(private router: Router, private route: ActivatedRoute, 
    private skillService: SkillService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.skillService.obtenerSkillporId(this.id).subscribe(
      dato => {
        this.skill = dato;
      }
    )
  }

  irAPortfolio(){
    this.router.navigate([`portfolio`]);
  }

  onSubmit(){
    this.skillService.editarSkillporId(this.id, this.skill).subscribe(
      dato => {
        this.irAPortfolio();
      }
    );
  }

}
