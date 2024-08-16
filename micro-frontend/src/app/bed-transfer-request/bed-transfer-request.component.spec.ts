import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedTransferRequestComponent } from './bed-transfer-request.component';

describe('BedTransferRequestComponent', () => {
  let component: BedTransferRequestComponent;
  let fixture: ComponentFixture<BedTransferRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedTransferRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
