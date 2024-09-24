import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DossierDetailsComponent } from './pages/dossier-details/dossier-details.component';
import { DossiersComponent } from './pages/dossier-details/components/dossiers/dossiers.component';
import { LoginComponent } from './pages/login/login.component';
import { DossierPaymentplanComponent } from './pages/dossier-details/components/dossier-paymentplan/dossier-paymentplan.component';
import { DossiersQuestionComponent } from './pages/dossier-details/components/dossiers-question/dossiers-question.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home page' }
    },
    {
        path: 'my-profile',
        component: MyProfileComponent,
        data: { title: 'profile' }
    },
    {
        path: 'dossier-details',
        component: DossierDetailsComponent,
        data: { title: 'dossier-details' }
    },
    {
        path: 'dossier-details/facturen/:dossier_id',
        component: DossiersComponent,
        data: { title: 'dossiers' }
    },
    {
        path: 'dossier-details/paymentplan/:dossier_id/:amount',
        component: DossierPaymentplanComponent,
        data: { title: 'dossiers-paymentplan' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login page' }
    },
    {
        path: 'dossiers-question/:options',
        component: DossiersQuestionComponent,
        data: { title: 'dossiers-question' }
    },

];
