import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryDepartmentMasterComponent } from './laboratory-department-master.component';

describe('LaboratoryDepartmentMasterComponent', () => {
  let component: LaboratoryDepartmentMasterComponent;
  let fixture: ComponentFixture<LaboratoryDepartmentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryDepartmentMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboratoryDepartmentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
