import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBooksComponent } from './get-all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayBooksComponent } from '../display-books/display-books.component';
import { SortingPipe } from 'src/app/Pipe/sortingPipe/sorting.pipe';
import { SearchingPipe } from 'src/app/Pipe/searchPipe/searching.pipe';

describe('GetAllBooksComponent', () => {
  let component: GetAllBooksComponent;
  let fixture: ComponentFixture<GetAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ GetAllBooksComponent , DisplayBooksComponent ,SortingPipe,SearchingPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
