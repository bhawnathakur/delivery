import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredDialogComponent } from './delivered-dialog.component';

describe('DeliveredDialogComponent', () => {
  let component: DeliveredDialogComponent;
  let fixture: ComponentFixture<DeliveredDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
