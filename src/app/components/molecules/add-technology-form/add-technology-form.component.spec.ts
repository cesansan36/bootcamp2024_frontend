import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnologyFormComponent } from './add-technology-form.component';

describe('AddTechnologyFormComponent', () => {
  let component: AddTechnologyFormComponent;
  let fixture: ComponentFixture<AddTechnologyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTechnologyFormComponent]
    });
    fixture = TestBed.createComponent(AddTechnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
