import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { UserProfile } from 'src/app/model/user-profile';
import { CallApiService } from 'src/app/service/call-api.service';

@Component({
  selector: 'app-create-user-profile',
  templateUrl: './create-user-profile.component.html',
  styleUrls: ['./create-user-profile.component.css']
})
export class CreateUserProfileComponent implements OnInit {
 

 //@ts-ignore
 userProfile : UserProfile = new UserProfile();

   
 constructor(
  private callApiService: CallApiService,
  private router : Router 
  
) {

 }
  ngOnInit(): void {
    
  }

  createUserProfile(userProfile: UserProfile): void{
    console.log(userProfile);
    this.callApiService.createUserProfile(userProfile).subscribe( response => {
      console.log(response);
     
      this.router.navigateByUrl('user-profile');

    });
  }

  goToUseProfile(){
    this.router.navigateByUrl('user-profile');
  }

}
