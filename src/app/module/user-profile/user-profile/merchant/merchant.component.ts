import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { Merchant } from 'src/app/model/merchant';
import { CallApiService } from 'src/app/service/call-api.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

   //@ts-ignore
   merchantList: Array<Merchant>;

   //@ts-ignore
   merchant: Merchant;

  constructor(
    private callApiService: CallApiService,
    private router : Router 
    ) {
    
   }

  ngOnInit(): void {
    this.getAllMerchant();
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

  getMerchant(idMer : string ): void{
   this.callApiService.getMerchant(idMer).subscribe( response => {
    if(response.status === 'OK'){
      this.merchant = response.data;
    }else{
      alert(response.message)
    }
    
     
    });
  }

  updateMerchant( merchant: Merchant): void{
    console.log( Merchant);
    this.callApiService.updateMerchant(merchant).subscribe( response => {
      console.log(response);
    this.getAllMerchant();
    });
  }
  
  deleteMerchant(merchant: Merchant): void{
    console.log(merchant);
    this.callApiService.deleteMerchant(merchant).subscribe( response => {
      console.log(response);
    this.getAllMerchant();
    });
  }

  goToCreateMerchant(){
    this.router.navigateByUrl('create-merchant');
  }

  goToMerchantUser(merchantid : Number ){
    this.router.navigateByUrl('merchant-user/'+ merchantid);
  }
  
  
}
