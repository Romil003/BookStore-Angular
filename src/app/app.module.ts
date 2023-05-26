import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { DisplayBooksComponent } from './component/display-books/display-books.component';
import { AuthguardService } from './Service/AuthguardService/authguard.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { SearchingPipe } from './Pipe/searchPipe/searching.pipe';
import { SortingPipe } from './Pipe/sortingPipe/sorting.pipe';
import { ViewBookComponent } from './component/view-book/view-book.component';
import { CartComponent } from './component/cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { OrderplaceComponent } from './component/orderplace/orderplace.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdminboardComponent } from './component/adminboard/adminboard.component';
import { AdminAuthguardService } from './Service/AdminGuardService/admin-authguard.service';
import { GetAllAdminBooksComponent } from './component/get-admin-books/get-all-admin-books/get-all-admin-books.component';
import { DisplayAdminBookComponent } from './component/displayAdminBook/display-admin-book/display-admin-book.component';
import {MatTableModule} from '@angular/material/table';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserService } from './Service/UserService/user.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GetAllBooksComponent,
    DisplayBooksComponent,
    SearchingPipe,
    SortingPipe,
    ViewBookComponent,
    CartComponent,
    OrderplaceComponent,
    WishlistComponent,
    AdminboardComponent,
    GetAllAdminBooksComponent,
    DisplayAdminBookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [
    AuthguardService,
    AdminAuthguardService,
    UserService,
    { 
      provide: MatDialogRef,
      useValue: []
       }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
