import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentParaCompLinkComponent } from './equipment-para-comp-link.component';

describe('EquipmentParaCompLinkComponent', () => {
  let component: EquipmentParaCompLinkComponent;
  let fixture: ComponentFixture<EquipmentParaCompLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentParaCompLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentParaCompLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
