import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNumberComponent } from './small-number.component';

describe('SmallNumberComponent', () => {
  let component: SmallNumberComponent;
  let fixture: ComponentFixture<SmallNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallNumberComponent]
    });
    fixture = TestBed.createComponent(SmallNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
