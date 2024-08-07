import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTestLinkComponent } from './equipment-test-link.component';

describe('EquipmentTestLinkComponent', () => {
  let component: EquipmentTestLinkComponent;
  let fixture: ComponentFixture<EquipmentTestLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentTestLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentTestLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
