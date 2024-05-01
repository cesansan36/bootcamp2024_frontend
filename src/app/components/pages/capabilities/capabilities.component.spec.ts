import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilitiesComponent } from './capabilities.component';

describe('CapabilitiesComponent', () => {
  let component: CapabilitiesComponent;
  let fixture: ComponentFixture<CapabilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapabilitiesComponent]
    });
    fixture = TestBed.createComponent(CapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
