import { WhiteLabelComponent } from './docs/white-label/white-label.component';
import { ResellingComponent } from './docs/reselling/reselling.component';
import { BankComponent } from './docs/bank/bank.component';
import { RefundComponent } from './docs/refund/refund.component';
import { PrivacyComponent } from './docs/privacy/privacy.component';
import { OfertaComponent } from './docs/oferta/oferta.component';
import { DomainsComponent } from './domains/domains.component';
import { LicensesComponent } from './licenses/licenses.component';
import { VpsComponent } from './vps/vps.component';
import { ResellerComponent } from './reseller/reseller.component';
import { StandardComponent } from './standard/standard.component';
import { FreeHostingComponent } from './free-hosting/free-hosting.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'domains', component: DomainsComponent },
  { path: 'hosting/free', component: FreeHostingComponent },
  { path: 'hosting/standard', component: StandardComponent },
  { path: 'hosting/reseller', component: ResellerComponent },
  { path: 'hosting/vps', component: VpsComponent },
  { path: 'additional/licenses', component: LicensesComponent },
  { path: 'docs/oferta', component: OfertaComponent },
  { path: 'docs/privacy', component: PrivacyComponent },
  { path: 'docs/refund', component: RefundComponent },
  { path: 'docs/bank', component: BankComponent },
  { path: 'docs/reselling', component: ResellingComponent },
  { path: 'docs/white-label', component: WhiteLabelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
