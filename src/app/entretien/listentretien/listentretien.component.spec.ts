import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListentretienComponent } from './listentretien.component';

describe('ListentretienComponent', () => {
  let component: ListentretienComponent;
  let fixture: ComponentFixture<ListentretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListentretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListentretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
