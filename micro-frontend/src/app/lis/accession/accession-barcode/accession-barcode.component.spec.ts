import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessionBarcodeComponent } from './accession-barcode.component';

describe('AccessionBarcodeComponent', () => {
  let component: AccessionBarcodeComponent;
  let fixture: ComponentFixture<AccessionBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessionBarcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessionBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
