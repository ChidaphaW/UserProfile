import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { UserProfile } from '../../../model/user-profile';
import { CallApiService } from '../../../service/call-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 
 //@ts-ignore
 userProfileList: Array<UserProfile>;

 //@ts-ignore
 userProfile: UserProfile;
  

 constructor(
   private callApiService: CallApiService,
   private router : Router 
     
   
) {

  }

  ngOnInit(): void{
   this.getAllUserProfile();
 
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

getUserProfile(id : string): void{
  this.callApiService.getUserProfile(id).subscribe( response => {
    if(response.status === 'OK'){
      this.userProfile = response.data;
    }else{
      alert(response.message)
    }
  });
}

updateUserProfile(userProfile: UserProfile): void{
  console.log(userProfile);
  this.callApiService.updateUserProfile(userProfile).subscribe( response => {
    console.log(response);
  this.getAllUserProfile();
  });
}

deleteUserProfile(userProfile: UserProfile): void{
  console.log(userProfile);
  this.callApiService.deleteUserProfile(userProfile).subscribe( response => {
    console.log(response);
  this.getAllUserProfile();
  });
}

goToCreatePage(){
  this.router.navigateByUrl('create-user-profile');
}

goToUserMerchant(userProfileid : Number ){
  this.router.navigateByUrl('user-merchant/'+ userProfileid);
}

}