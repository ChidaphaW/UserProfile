import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  CreateMerchantComponent
} from './module/user-profile/user-profile/create-merchant/create-merchant.component';
import {
  CreateUserProfileComponent
} from './module/user-profile/user-profile/create-user-profile/create-user-profile.component';
import {
  MerchantUserComponent
} from './module/user-profile/user-profile/merchant-user/merchant-user.component';
import {
  MerchantComponent
} from './module/user-profile/user-profile/merchant/merchant.component';
import {
  UserMerchantComponent
} from './module/user-profile/user-profile/user-merchant/user-merchant.component';
import {
  UserProfileComponent
} from './module/user-profile/user-profile/user-profile.component';

const routes: Routes = [
{
  path: 'user-profile', component: UserProfileComponent
},

{
  path: 'create-user-profile', component: CreateUserProfileComponent
},

{
  path: 'merchant', component: MerchantComponent
},

{
  path: 'create-merchant', component: CreateMerchantComponent
},

{
  path: 'user-merchant/:id', component: UserMerchantComponent
},

{
  path: 'merchant-user/:idMer', component: MerchantUserComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
