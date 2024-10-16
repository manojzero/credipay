import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
  loginuserdetails: any = {};
  constructor(
    
  ) {}

  public getloginstatus() {
    if (typeof window !== 'undefined' && window?.localStorage)
     return localStorage.getItem("isloggedin") == "true"?  true: false;
    return false;
  }

  public getloginuserinfo() {
    return this.loginuserdetails;
  }

  public setloginuserinfo(data: any) {
    this.loginuserdetails = data;
  }
}
