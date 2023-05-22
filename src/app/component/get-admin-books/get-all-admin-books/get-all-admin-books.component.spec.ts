import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAdminBooksComponent } from './get-all-admin-books.component';

describe('GetAllAdminBooksComponent', () => {
  let component: GetAllAdminBooksComponent;
  let fixture: ComponentFixture<GetAllAdminBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllAdminBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllAdminBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
