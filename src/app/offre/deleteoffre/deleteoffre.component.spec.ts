import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteoffreComponent } from './deleteoffre.component';

describe('DeleteoffreComponent', () => {
  let component: DeleteoffreComponent;
  let fixture: ComponentFixture<DeleteoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
