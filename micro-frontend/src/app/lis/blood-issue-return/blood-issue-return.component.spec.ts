import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodIssueReturnComponent } from './blood-issue-return.component';

describe('BloodIssueReturnComponent', () => {
  let component: BloodIssueReturnComponent;
  let fixture: ComponentFixture<BloodIssueReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodIssueReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodIssueReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
