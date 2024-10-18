import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PagemoduleModule } from '../../pagemodule/pagemodule.module';
import { QusDisagreeDisputeComponent } from "./components/qus-disagree-dispute/qus-disagree-dispute.component";
import { QusAlreadyPaidComponent } from "./components/qus-already-paid/qus-already-paid.component";
import { QusDebtorDeceasedComponent } from "./components/qus-debtor-deceased/qus-debtor-deceased.component";
import { QusCopyInvoiceComponent } from "./components/qus-copy-invoice/qus-copy-invoice.component";

@Component({
  selector: 'app-dossier-questions',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, PagemoduleModule, ReactiveFormsModule, AlertModule, TranslateModule, QusDisagreeDisputeComponent, QusAlreadyPaidComponent, QusDebtorDeceasedComponent, QusCopyInvoiceComponent],
  templateUrl: './dossier-questions.component.html',
  styleUrl: './dossier-questions.component.css'
})
export class DossierQuestionsComponent {
  selected_option: any = "";
  constructor(public translate: TranslateService, private activatedroute: ActivatedRoute,) {
    this.selected_option = this.activatedroute.snapshot.params['options'];
  }
}
