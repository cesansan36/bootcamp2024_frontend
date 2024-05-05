import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBootcampFormComponent } from './add-bootcamp-form.component';

describe('AddBootcampFormComponent', () => {
  let component: AddBootcampFormComponent;
  let fixture: ComponentFixture<AddBootcampFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBootcampFormComponent]
    });
    fixture = TestBed.createComponent(AddBootcampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
