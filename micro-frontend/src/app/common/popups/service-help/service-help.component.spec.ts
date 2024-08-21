import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHelpComponent } from './service-help.component';

describe('ServiceHelpComponent', () => {
  let component: ServiceHelpComponent;
  let fixture: ComponentFixture<ServiceHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
