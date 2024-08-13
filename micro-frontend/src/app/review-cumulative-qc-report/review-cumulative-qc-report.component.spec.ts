import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCumulativeQcReportComponent } from './review-cumulative-qc-report.component';

describe('ReviewCumulativeQcReportComponent', () => {
  let component: ReviewCumulativeQcReportComponent;
  let fixture: ComponentFixture<ReviewCumulativeQcReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewCumulativeQcReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewCumulativeQcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
