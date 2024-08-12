import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewQCComponent } from './review-qc.component';

describe('ReviewQCComponent', () => {
  let component: ReviewQCComponent;
  let fixture: ComponentFixture<ReviewQCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewQCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewQCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
