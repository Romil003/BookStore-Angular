import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { AuthenticationGuard } from './Authgaurd/authentication.guard';
import { ViewBookComponent } from './component/view-book/view-book.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component : LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],

  children : [
    
    {path:'',component:GetAllBooksComponent},
    {path:'viewbook',component:ViewBookComponent},

  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
