import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSelectorComponent } from './page-selector.component';

describe('PageSelectorComponent', () => {
  let component: PageSelectorComponent;
  let fixture: ComponentFixture<PageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSelectorComponent]
    });
    fixture = TestBed.createComponent(PageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
