import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthguardService } from '../Service/AdminGuardService/admin-authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private AdminAuthguardservice : AdminAuthguardService,private router : Router){}
  canActivate() : boolean{
    if(!this.AdminAuthguardservice.getAdminToken()){
      this.router.navigateByUrl("/login");
    }
    return this.AdminAuthguardservice.getAdminToken();
  }
  
}
