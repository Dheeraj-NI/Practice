import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCodeMasterBarcodeComponent } from './control-code-master-barcode.component';

describe('ControlCodeMasterBarcodeComponent', () => {
  let component: ControlCodeMasterBarcodeComponent;
  let fixture: ComponentFixture<ControlCodeMasterBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCodeMasterBarcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlCodeMasterBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
