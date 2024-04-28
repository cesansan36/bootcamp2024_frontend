import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsHolderComponent } from './results-holder.component';

describe('ResultsHolderComponent', () => {
  let component: ResultsHolderComponent;
  let fixture: ComponentFixture<ResultsHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsHolderComponent]
    });
    fixture = TestBed.createComponent(ResultsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
