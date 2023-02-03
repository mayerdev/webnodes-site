import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FreeHostingComponent } from './free-hosting/free-hosting.component';
import { StandardComponent } from './standard/standard.component';
import { ResellerComponent } from './reseller/reseller.component';
import { VpsComponent } from './vps/vps.component';
import { LicensesComponent } from './licenses/licenses.component';
import { DomainsComponent } from './domains/domains.component';
import { OfertaComponent } from './docs/oferta/oferta.component';
import { PrivacyComponent } from './docs/privacy/privacy.component';
import { RefundComponent } from './docs/refund/refund.component';
import { BankComponent } from './docs/bank/bank.component';
import { ResellingComponent } from './docs/reselling/reselling.component';
import { WhiteLabelComponent } from './docs/white-label/white-label.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FreeHostingComponent,
    StandardComponent,
    ResellerComponent,
    VpsComponent,
    LicensesComponent,
    DomainsComponent,
    OfertaComponent,
    PrivacyComponent,
    RefundComponent,
    BankComponent,
    ResellingComponent,
    WhiteLabelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
