import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreUniversityComponent } from './offre-university.component';

describe('OffreUniversityComponent', () => {
  let component: OffreUniversityComponent;
  let fixture: ComponentFixture<OffreUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
