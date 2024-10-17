import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DossierDetailsComponent } from './pages/dossier-details/dossier-details.component';
import { DossiersComponent } from './pages/dossier-details/components/dossiers/dossiers.component';
import { LoginComponent } from './pages/login/login.component';

import { DossiersQuestionComponent } from './pages/dossier-details/components/dossiers-question/dossiers-question.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymentErrorComponent } from './pages/payment-error/payment-error.component';
import { PaymentCancelComponent } from './pages/payment-cancel/payment-cancel.component';
import { AuthGuard } from './service/auth.guard';
import { DossierPaymentPlanComponent } from './pages/dossier-payment-plan/dossier-payment-plan.component';
import { DossierPaymentplanComponent1 } from './pages/dossier-details/components/dossier-paymentplan/dossier-paymentplan.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home page' }
    },
    {
        path: 'my-profile',  canActivate: [AuthGuard],
        component: MyProfileComponent,
        data: { title: 'profile' }
    },
    {
        path: 'dossier-details',  canActivate: [AuthGuard],
        component: DossierDetailsComponent,
        data: { title: 'dossier-details' }
    },
    {
        path: 'dossier-details/facturen',  canActivate: [AuthGuard],
        component: DossiersComponent,
        data: { title: 'dossiers' }
    },
    // {
    //     path: 'dossier-details/paymentplan/:dossier_id/:amount',  canActivate: [AuthGuard],
    //     component: DossierPaymentplanComponent1,
    //     data: { title: 'dossiers-paymentplan' }
    // },
    {
        path: 'dossiers-question/:options',  canActivate: [AuthGuard],
        component: DossiersQuestionComponent,
        data: { title: 'dossiers-question' }
    },
    {
        path: 'payment-plan',  canActivate: [AuthGuard],
        component: DossierPaymentPlanComponent,
        data: { title: 'payment plans' }
    },
    {
        path: 'payment-success',  canActivate: [AuthGuard],
        component: PaymentSuccessComponent,
        data: { title: 'payment success' }
    },{
        path: 'payment-error',  canActivate: [AuthGuard],
        component: PaymentErrorComponent,
        data: { title: 'payment error' }
    },{
        path: 'payment-cancel',  canActivate: [AuthGuard],
        component: PaymentCancelComponent,
        data: { title: 'payment cancel' }
    }

];
