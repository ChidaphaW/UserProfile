import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import {
  UserProfileComponent
} from './module/user-profile/user-profile/user-profile.component';
import { CreateUserProfileComponent } from './module/user-profile/user-profile/create-user-profile/create-user-profile.component';
import { MerchantComponent } from './module/user-profile/user-profile/merchant/merchant.component';
import { CreateMerchantComponent } from './module/user-profile/user-profile/create-merchant/create-merchant.component';
import { UserMerchantComponent } from './module/user-profile/user-profile/user-merchant/user-merchant.component';
import { MerchantUserComponent } from './module/user-profile/user-profile/merchant-user/merchant-user.component';
import { CreateUserMerchantComponent } from './module/user-profile/user-profile/create-user-merchant/create-user-merchant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    CreateUserProfileComponent,
    MerchantComponent,
    CreateMerchantComponent,
    UserMerchantComponent,
    MerchantUserComponent,
    CreateUserMerchantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
