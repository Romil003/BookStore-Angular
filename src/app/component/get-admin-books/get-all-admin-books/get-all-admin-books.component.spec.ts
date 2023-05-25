import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAdminBooksComponent } from './get-all-admin-books.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DisplayAdminBookComponent } from '../../displayAdminBook/display-admin-book/display-admin-book.component';
import { SearchingPipe } from 'src/app/Pipe/searchPipe/searching.pipe';

describe('GetAllAdminBooksComponent', () => {
  let component: GetAllAdminBooksComponent;
  let fixture: ComponentFixture<GetAllAdminBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,MatDialogModule],
      declarations: [ GetAllAdminBooksComponent ,DisplayAdminBookComponent ,SearchingPipe]
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
