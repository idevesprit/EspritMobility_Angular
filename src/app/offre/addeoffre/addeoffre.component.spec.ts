import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeoffreComponent } from './addeoffre.component';

describe('AddeoffreComponent', () => {
  let component: AddeoffreComponent;
  let fixture: ComponentFixture<AddeoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
