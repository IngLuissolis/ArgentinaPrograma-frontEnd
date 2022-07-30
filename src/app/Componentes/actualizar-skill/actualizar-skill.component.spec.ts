import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSkillComponent } from './actualizar-skill.component';

describe('ActualizarSkillComponent', () => {
  let component: ActualizarSkillComponent;
  let fixture: ComponentFixture<ActualizarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
