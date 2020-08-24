import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersUnDeliveredComponent } from './orders-un-delivered.component';

describe('OrdersUnDeliveredComponent', () => {
  let component: OrdersUnDeliveredComponent;
  let fixture: ComponentFixture<OrdersUnDeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersUnDeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersUnDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
