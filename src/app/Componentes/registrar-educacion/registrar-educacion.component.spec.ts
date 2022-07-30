import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEducacionComponent } from './registrar-educacion.component';

describe('RegistrarEducacionComponent', () => {
  let component: RegistrarEducacionComponent;
  let fixture: ComponentFixture<RegistrarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
