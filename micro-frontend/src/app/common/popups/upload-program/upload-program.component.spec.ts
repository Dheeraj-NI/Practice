import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProgramComponent } from './upload-program.component';

describe('UploadProgramComponent', () => {
  let component: UploadProgramComponent;
  let fixture: ComponentFixture<UploadProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
