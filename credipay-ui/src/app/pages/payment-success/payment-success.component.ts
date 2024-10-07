import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css',
  providers: [TranslateService]
})
export class PaymentSuccessComponent implements OnInit {
  transactionid: any = "";

  constructor(private route: ActivatedRoute, public translate: TranslateService, public router:Router) {}
  
  ngOnInit(): void {
    this.transactionid = this.route.snapshot.queryParams['transactionid'];
    Swal.fire({
      title: this.translate.instant('Success'),
      text: this.translate.instant('Success Payment Message') + this.transactionid,
      icon: "success"
    }).then(()=>{
      this.router.navigateByUrl('');
    });

  }


}
