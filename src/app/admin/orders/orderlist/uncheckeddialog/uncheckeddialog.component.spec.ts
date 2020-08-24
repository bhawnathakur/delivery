import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckeddialogComponent } from './uncheckeddialog.component';

describe('UncheckeddialogComponent', () => {
  let component: UncheckeddialogComponent;
  let fixture: ComponentFixture<UncheckeddialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncheckeddialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncheckeddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
