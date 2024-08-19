import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTransferRequestComponent } from './class-transfer-request.component';

describe('ClassTransferRequestComponent', () => {
  let component: ClassTransferRequestComponent;
  let fixture: ComponentFixture<ClassTransferRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTransferRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
