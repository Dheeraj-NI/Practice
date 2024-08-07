import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarwithforloopComponent } from './navbarwithforloop.component';

describe('NavbarwithforloopComponent', () => {
  let component: NavbarwithforloopComponent;
  let fixture: ComponentFixture<NavbarwithforloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarwithforloopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarwithforloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
