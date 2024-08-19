import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDoctorRequestComponent } from './assign-doctor-request.component';

describe('AssignDoctorRequestComponent', () => {
  let component: AssignDoctorRequestComponent;
  let fixture: ComponentFixture<AssignDoctorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignDoctorRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignDoctorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
