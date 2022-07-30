import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSkillComponent } from './registrar-skill.component';

describe('RegistrarSkillComponent', () => {
  let component: RegistrarSkillComponent;
  let fixture: ComponentFixture<RegistrarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
