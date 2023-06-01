import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationoperatorComponent } from './transformationoperator.component';

describe('TransformationoperatorComponent', () => {
  let component: TransformationoperatorComponent;
  let fixture: ComponentFixture<TransformationoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationoperatorComponent]
    });
    fixture = TestBed.createComponent(TransformationoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
