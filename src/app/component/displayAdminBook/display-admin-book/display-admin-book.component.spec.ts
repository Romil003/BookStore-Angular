import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminBookComponent } from './display-admin-book.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchingPipe } from 'src/app/Pipe/searchPipe/searching.pipe';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';

describe('DisplayAdminBookComponent', () => {
  let component: DisplayAdminBookComponent;
  let fixture: ComponentFixture<DisplayAdminBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,MatDialogModule,MatTableModule],
      declarations: [ DisplayAdminBookComponent,SearchingPipe]
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
