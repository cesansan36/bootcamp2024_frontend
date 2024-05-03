import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePickerComponent } from './template-picker.component';

describe('TemplatePickerComponent', () => {
  let component: TemplatePickerComponent;
  let fixture: ComponentFixture<TemplatePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatePickerComponent]
    });
    fixture = TestBed.createComponent(TemplatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
