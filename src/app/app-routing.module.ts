import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { AuthenticationGuard } from './Authgaurd/authentication.guard';
import { ViewBookComponent } from './component/view-book/view-book.component';
import { CartComponent } from './component/cart/cart.component';
import { OrderplaceComponent } from './component/orderplace/orderplace.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AdminboardComponent } from './component/adminboard/adminboard.component';
import { AdminguardGuard } from './Admingaurd/adminguard.guard';
import { GetAllAdminBooksComponent } from './component/get-admin-books/get-all-admin-books/get-all-admin-books.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component : LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],

  children : [
    
    {path:'',component:GetAllBooksComponent},
    {path:'viewbook',component:ViewBookComponent},
    {path : 'myCart',component:CartComponent},
    {path : 'myCart/orderPlace',component:OrderplaceComponent},
    {path:'wishlist',component:WishlistComponent}

  ]

},
  {path:'admindashboard',component:AdminboardComponent,canActivate:[AdminguardGuard] ,

  children : [

    {path:'',component:GetAllAdminBooksComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
