import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoRecordsComponent } from './two-records.component';

describe('TwoRecordsComponent', () => {
  let component: TwoRecordsComponent;
  let fixture: ComponentFixture<TwoRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
