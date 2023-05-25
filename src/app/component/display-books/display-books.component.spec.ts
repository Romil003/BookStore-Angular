import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBooksComponent } from './display-books.component';
import { SortingPipe } from 'src/app/Pipe/sortingPipe/sorting.pipe';
import { SearchingPipe } from 'src/app/Pipe/searchPipe/searching.pipe';

describe('DisplayBooksComponent', () => {
  let component: DisplayBooksComponent;
  let fixture: ComponentFixture<DisplayBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      declarations: [ DisplayBooksComponent ,SortingPipe,SearchingPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
