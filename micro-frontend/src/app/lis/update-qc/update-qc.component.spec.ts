import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQcComponent } from './update-qc.component';

describe('UpdateQcComponent', () => {
  let component: UpdateQcComponent;
  let fixture: ComponentFixture<UpdateQcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateQcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateQcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
