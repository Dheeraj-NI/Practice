import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsSignMasterComponent } from './doctors-sign-master.component';

describe('DoctorsSignMasterComponent', () => {
  let component: DoctorsSignMasterComponent;
  let fixture: ComponentFixture<DoctorsSignMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsSignMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorsSignMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
