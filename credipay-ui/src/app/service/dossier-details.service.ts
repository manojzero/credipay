import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DossierDetailsService {

  public headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  getDossierDetailURL = environment.apiURL + "dossier/dossier-details";
  private getDossierFacturenDetailsURL = environment.apiURL + "dossier/dossier-facturen-details";
  private updatelogbookURL: string = environment.apiURL + "dossier/update-logbook"
  private getDossierDetailsUrl = "";
  private getPartcularDossierDetailsUrl = "";
  private getDossierpaymentplanUrl = environment.apiURL + "dossier/get-dossier-payment-plan-calculation";
  private getDossierpaymentplancheckUrl = environment.apiURL + "dossier/eligible-dossier-payment-plan-check";
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private router: Router) {
  }

  getDossierDetails(): Observable<any> {
    return this.http.get<any>(this.getDossierDetailURL , { 'headers': this.headers, withCredentials: true });
  }
  getDossierFacturenDetails(): Observable<any> {
    return this.http.get<any>(this.getDossierFacturenDetailsURL , { 'headers': this.headers, withCredentials: true });
  }
  getDossierPaymentplan(totalamount: any, monthly_amount: any): Observable<any> {
    return this.http.get<any>(this.getDossierpaymentplanUrl + "/" + totalamount + "/" + monthly_amount, { 'headers': this.headers, withCredentials: true });
  }
  getDossierPaymentplancheck(totalamount: any): Observable<any> {
    return this.http.get<any>(this.getDossierpaymentplancheckUrl + "/" + totalamount, { 'headers': this.headers, withCredentials: true });
  }
  updatelogbook(dossier_id: any, body: any): Observable<any> {
    return this.http.post<any>(this.updatelogbookURL + "/" + dossier_id, body, { 'headers': this.headers, withCredentials: true });
  }
}
