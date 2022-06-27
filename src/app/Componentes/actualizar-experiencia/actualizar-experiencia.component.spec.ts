import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarExperienciaComponent } from './actualizar-experiencia.component';

describe('ActualizarExperienciaComponent', () => {
  let component: ActualizarExperienciaComponent;
  let fixture: ComponentFixture<ActualizarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
