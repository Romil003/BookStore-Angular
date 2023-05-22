import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminBookComponent } from './display-admin-book.component';

describe('DisplayAdminBookComponent', () => {
  let component: DisplayAdminBookComponent;
  let fixture: ComponentFixture<DisplayAdminBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAdminBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAdminBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
