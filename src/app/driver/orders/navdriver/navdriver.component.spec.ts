import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdriverComponent } from './navdriver.component';

describe('NavdriverComponent', () => {
  let component: NavdriverComponent;
  let fixture: ComponentFixture<NavdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
