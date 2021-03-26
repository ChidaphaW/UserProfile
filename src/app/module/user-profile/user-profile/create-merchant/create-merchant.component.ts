import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { Merchant } from 'src/app/model/merchant';
import { CallApiService } from 'src/app/service/call-api.service';

@Component({
  selector: 'app-create-merchant',
  templateUrl: './create-merchant.component.html',
  styleUrls: ['./create-merchant.component.css']
})
export class CreateMerchantComponent implements OnInit {

   //@ts-ignore
   merchant : Merchant = new Merchant();

  constructor(
    private callApiService: CallApiService,
    private router : Router 
  ) { }

  ngOnInit(): void {


  }    
  
  createMerchant(merchant: Merchant): void{
      console.log(merchant);
      this.callApiService.createMerchant(merchant).subscribe( response => {
        console.log(response);
       
        this.router.navigateByUrl('merchant');

      });
    }

}
