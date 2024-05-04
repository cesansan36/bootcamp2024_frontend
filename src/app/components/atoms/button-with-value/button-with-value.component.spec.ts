import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithValueComponent } from './button-with-value.component';

describe('ButtonWithValueComponent', () => {
  let component: ButtonWithValueComponent;
  let fixture: ComponentFixture<ButtonWithValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonWithValueComponent]
    });
    fixture = TestBed.createComponent(ButtonWithValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
