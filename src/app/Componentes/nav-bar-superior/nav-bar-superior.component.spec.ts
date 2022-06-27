import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSuperiorComponent } from './nav-bar-superior.component';

describe('NavBarSuperiorComponent', () => {
  let component: NavBarSuperiorComponent;
  let fixture: ComponentFixture<NavBarSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
