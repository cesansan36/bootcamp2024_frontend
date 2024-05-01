import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNumberPairComponent } from './label-number-pair.component';

describe('LabelNumberPairComponent', () => {
  let component: LabelNumberPairComponent;
  let fixture: ComponentFixture<LabelNumberPairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelNumberPairComponent]
    });
    fixture = TestBed.createComponent(LabelNumberPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
