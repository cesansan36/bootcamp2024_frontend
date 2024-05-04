import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapabilityFormComponent } from './add-capability-form.component';

describe('AddCapabilityFormComponent', () => {
  let component: AddCapabilityFormComponent;
  let fixture: ComponentFixture<AddCapabilityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCapabilityFormComponent]
    });
    fixture = TestBed.createComponent(AddCapabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
