import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityoperatorComponent } from './utilityoperator.component';

describe('UtilityoperatorComponent', () => {
  let component: UtilityoperatorComponent;
  let fixture: ComponentFixture<UtilityoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityoperatorComponent]
    });
    fixture = TestBed.createComponent(UtilityoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
