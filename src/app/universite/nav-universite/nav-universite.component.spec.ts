import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUniversiteComponent } from './nav-universite.component';

describe('NavUniversiteComponent', () => {
  let component: NavUniversiteComponent;
  let fixture: ComponentFixture<NavUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavUniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
