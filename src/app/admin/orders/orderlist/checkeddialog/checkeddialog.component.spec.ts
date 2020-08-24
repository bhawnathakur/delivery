import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckeddialogComponent } from './checkeddialog.component';

describe('CheckeddialogComponent', () => {
  let component: CheckeddialogComponent;
  let fixture: ComponentFixture<CheckeddialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckeddialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckeddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
