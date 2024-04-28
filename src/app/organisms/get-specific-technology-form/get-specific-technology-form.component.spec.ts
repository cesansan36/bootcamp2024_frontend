import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSpecificTechnologyFormComponent } from './get-specific-technology-form.component';

describe('GetSpecificTechnologyFormComponent', () => {
  let component: GetSpecificTechnologyFormComponent;
  let fixture: ComponentFixture<GetSpecificTechnologyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSpecificTechnologyFormComponent]
    });
    fixture = TestBed.createComponent(GetSpecificTechnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
