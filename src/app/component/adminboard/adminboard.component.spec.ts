import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminboardComponent } from './adminboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';

describe('AdminboardComponent', () => {
  let component: AdminboardComponent;
  let fixture: ComponentFixture<AdminboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [MatToolbarModule,MatMenuModule,RouterOutlet],
      declarations: [ AdminboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
