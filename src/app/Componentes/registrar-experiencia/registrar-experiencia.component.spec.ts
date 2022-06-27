import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarExperienciaComponent } from './registrar-experiencia.component';

describe('RegistrarExperienciaComponent', () => {
  let component: RegistrarExperienciaComponent;
  let fixture: ComponentFixture<RegistrarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
