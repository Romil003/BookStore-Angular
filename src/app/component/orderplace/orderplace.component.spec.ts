import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderplaceComponent } from './orderplace.component';
import { MatDividerModule } from '@angular/material/divider';

describe('OrderplaceComponent', () => {
  let component: OrderplaceComponent;
  let fixture: ComponentFixture<OrderplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [MatDividerModule],
      declarations: [ OrderplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
