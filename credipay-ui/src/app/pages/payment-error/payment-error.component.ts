import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-payment-error',
  standalone: true,
  imports: [],
  templateUrl: './payment-error.component.html',
  styleUrl: './payment-error.component.css',
  providers: [TranslateService]
})
export class PaymentErrorComponent implements OnInit {
  transactionid: any = "";

  constructor(private route: ActivatedRoute, public translate: TranslateService) {}
  
  ngOnInit(): void {
    this.transactionid = this.route.snapshot.queryParams['transactionid'];
    Swal.fire({
      title: this.translate.instant('Error'),
      text: this.translate.instant('Error Payment Message') + this.transactionid,
      icon: "error"
    }).then(()=>{
      
    });

  }


}
