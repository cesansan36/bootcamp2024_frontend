import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTagHolderComponent } from './dropdown-tag-holder.component';

describe('DropdownTagHolderComponent', () => {
  let component: DropdownTagHolderComponent;
  let fixture: ComponentFixture<DropdownTagHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownTagHolderComponent]
    });
    fixture = TestBed.createComponent(DropdownTagHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
