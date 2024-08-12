import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCodeMasterComponent } from './control-code-master.component';

describe('ControlCodeMasterComponent', () => {
  let component: ControlCodeMasterComponent;
  let fixture: ComponentFixture<ControlCodeMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCodeMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlCodeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
