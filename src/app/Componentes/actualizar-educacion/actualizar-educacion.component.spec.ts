import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEducacionComponent } from './actualizar-educacion.component';

describe('ActualizarEducacionComponent', () => {
  let component: ActualizarEducacionComponent;
  let fixture: ComponentFixture<ActualizarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
