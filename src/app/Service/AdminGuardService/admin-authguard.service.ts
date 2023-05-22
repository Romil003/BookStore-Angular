import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguardService {

  constructor() { }

  getAdminToken(){
    return !!localStorage.getItem("admin-token");
  } 
}
