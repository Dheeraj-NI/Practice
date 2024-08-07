import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismMasterComponent } from './organism-master.component';

describe('OrganismMasterComponent', () => {
  let component: OrganismMasterComponent;
  let fixture: ComponentFixture<OrganismMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganismMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
