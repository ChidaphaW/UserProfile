import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  ParamMap
} from '@angular/router';

import { UserMerchant } from 'src/app/model/user-merchant';
import { CallApiService } from 'src/app/service/call-api.service';

import { Merchant } from '../../../../model/merchant';

@Component({
  selector: 'app-merchant-user',
  templateUrl: './merchant-user.component.html',
  styleUrls: ['./merchant-user.component.css']
})
export class MerchantUserComponent implements OnInit {

  userId: number = 0;

  merchant : Merchant = new Merchant();

  //@ts-ignore
  userProfileList: Array<UserProfile>;

   //@ts-ignore
   userProfileList2: Array<UserProfile>;

  constructor(    
    private callApiService: CallApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(
      (params: ParamMap) => {
        
      let idMer = params.get('idMer');
      console.log(idMer);
     if (idMer !== null) {
        this.getMerchant(idMer);
      }
    }
    );

    this.getAllUserProfile();
  }

  getMerchant(idMer : string ): void{
    this.callApiService.getMerchant(idMer).subscribe( response => {
      if(response.status === 'OK'){
        this.merchant = response.data;
      }else{
        alert(response.message)
      }
      this.getMerchantUser();
    });
  }

  getAllUserProfile(): void{
    this.callApiService.getAllUserProfile().subscribe( response => {
      if(response.status === 'OK'){
        this.userProfileList = response.data;
      }else{
        alert(response.message)
      }
      
      
    });
  }

  createUserMerchant(): void{
    console.log(this.userId);
    console.log(this.merchant.idMer);

    var userMerchant : UserMerchant  = new UserMerchant();
    
    userMerchant.idUser = this.userId;
    userMerchant.idMer =this.merchant.idMer;

    this.callApiService.createUserMerchant(userMerchant).subscribe( response => {
      console.log(response);
  
    });
  }

  
  getMerchantUser(): void{

    var idMer : number = this.merchant.idMer;
  
      this.callApiService.getMerchantUser(idMer).subscribe( response => {
        if(response.status === 'OK'){
          this.userProfileList2 = response.data;
        }else{
          alert(response.message)
        }
      
      });
    }

}
