import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMasterComponent } from './note-master.component';

describe('NoteMasterComponent', () => {
  let component: NoteMasterComponent;
  let fixture: ComponentFixture<NoteMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
