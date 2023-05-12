import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { AuthenticationGuard } from './Authgaurd/authentication.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component : LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],

  children : [
    {path:'',pathMatch:'full',redirectTo:'books'},
    {path:'books',component:GetAllBooksComponent},

  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
