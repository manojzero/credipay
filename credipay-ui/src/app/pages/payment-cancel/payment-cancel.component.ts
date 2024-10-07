import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-payment-cancel',
  standalone: true,
  imports: [],
  templateUrl: './payment-cancel.component.html',
  styleUrl: './payment-cancel.component.css',
  providers: [TranslateService]
})
export class PaymentCancelComponent implements OnInit {
  transactionid: any = "";

  constructor(private route: ActivatedRoute, public translate: TranslateService, public router:Router) {}
  
  ngOnInit(): void {
    this.transactionid = this.route.snapshot.queryParams['transactionid'];
    Swal.fire({
      title: this.translate.instant('Cancel'),
      text: this.translate.instant('Cancel Payment Message') + this.transactionid,
      icon: "warning"
    }).then(()=>{
      this.router.navigateByUrl('');
    });

  }


}
