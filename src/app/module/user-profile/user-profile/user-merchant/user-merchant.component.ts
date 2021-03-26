import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router
} from '@angular/router';

import { UserProfile } from 'src/app/model/user-profile';
import { CallApiService } from 'src/app/service/call-api.service';

import { UserMerchant } from '../../../../model/user-merchant';

@Component({
  selector: 'app-user-merchant',
  templateUrl: './user-merchant.component.html',
  styleUrls: ['./user-merchant.component.css']
})
export class UserMerchantComponent implements OnInit {

 
  merchantId: number = 0;
 
  userProfile : UserProfile = new UserProfile();

     //@ts-ignore
     merchantList: Array<Merchant>;
     
     //@ts-ignore
     merchantList2: Array<Merchant>;

      //@ts-ignore
 UserMerchant : UserMerchant = new UserMerchant();

  constructor(
    private router : Router,
    private callApiService: CallApiService,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        
      let id = params.get('id');
      console.log(id);
      if (id !== null) {
        //  block of code to be executed if the condition is true
        this.getUserProfile(id);
        
      }
    }
    );

    this.getAllMerchant();
  }

  getUserProfile(id : string ): void{
    this.callApiService.getUserProfile(id).subscribe( response => {
      if(response.status === 'OK'){
        this.userProfile = response.data;
      }else{
        alert(response.message)
      }
      
      this.getUserMerchant();
    });
  }
  
  getAllMerchant(): void{
    this.callApiService.getAllMerchant().subscribe( response => {
      if(response.status === 'OK'){
        this.merchantList = response.data;
      }else{
        alert(response.message)
      }
      
      
    });
  }

  createUserMerchant(): void{
    console.log(this.merchantId);
    console.log(this.userProfile.id);

    var userMerchant : UserMerchant  = new UserMerchant();
    
    userMerchant.idMer = this.merchantId;
    userMerchant.idUser =this.userProfile.id;

    this.callApiService.createUserMerchant(userMerchant).subscribe( response => {
      console.log(response);
    });
  }

  getUserMerchant(): void{

  var idUser : number = this.userProfile.id;


    this.callApiService.getUserMerchant(idUser).subscribe( response => {
      if(response.status === 'OK'){
        this.merchantList2 = response.data;
      }else{
        alert(response.message)
      }
      
      
    });
  }

}
