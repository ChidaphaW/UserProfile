import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ApiResponseModel } from '../model/apiResponseModel';
import { Merchant } from '../model/merchant';
import { UserMerchant } from '../model/user-merchant';
import { UserProfile } from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  private httpOption = {
    headers: new HttpHeaders ({
      'content-type': 'application/json;charset=UTF-8'
    })
  };

  constructor(
    private http: HttpClient
  ) {
   }

   getAllUserProfile(): Observable<ApiResponseModel<Array<UserProfile>>>{
   const url =environment.url.userProfile.all;

   //@ts-ignore
   return this.http.get<ApiResponseModel<Array<UserProfile>>>(url, this.httpOption).pipe(
     tap( _ => console.log('summitForm success'))
   );
   }

   getAllMerchant(): Observable<ApiResponseModel<Array<Merchant>>>{
    const url =environment.url.merchant.all;
 
    
    //@ts-ignore
    return this.http.get<ApiResponseModel<Array<Merchant>>>(url, this.httpOption).pipe(
      tap( _ => console.log('summitForm success'))
    );
    }

    //อัพเดต
   updateUserProfile(userProfile : UserProfile) : Observable<ApiResponseModel<any>>{
     const url = environment.url.userProfile.update;
     return this.http.post<ApiResponseModel<UserProfile>>(url, userProfile, this.httpOption).pipe(
       tap(_ => console.log('submitFrom success'))
     );
   }

   updateMerchant(merchant : Merchant) : Observable<ApiResponseModel<any>>{
    const url = environment.url.merchant.update;
    return this.http.post<ApiResponseModel<Merchant>>(url, merchant, this.httpOption).pipe(
      tap(_ => console.log('submitFrom success'))
    );
  }
   
  //ลบ
   deleteUserProfile(userProfile : UserProfile) : Observable<ApiResponseModel<any>>{
    const url = environment.url.userProfile.delete;
    return this.http.post<ApiResponseModel<UserProfile>>(url, userProfile, this.httpOption).pipe(
      tap(_ => console.log('submitFrom success'))
    );
  }

   deleteMerchant(merchant : Merchant) : Observable<ApiResponseModel<any>>{
    const url = environment.url.merchant.delete;
    return this.http.post<ApiResponseModel<Merchant>>(url, merchant, this.httpOption).pipe(
      tap(_ => console.log('submitFrom success'))
    );
  }

  //สร้าง
  createUserProfile(userProfile : UserProfile) : Observable<ApiResponseModel<any>>{
    console.log(userProfile)
    const url = environment.url.userProfile.create;
    return this.http.post<ApiResponseModel<UserProfile>>(url, userProfile, this.httpOption).pipe(
      tap(_ => console.log('submitFrom success'))
    );
  }

  createMerchant(merchant : Merchant) : Observable<ApiResponseModel<any>>{
    console.log(merchant)
    const url = environment.url.merchant.create;
    return this.http.post<ApiResponseModel<Merchant>>(url, merchant, this.httpOption).pipe(
      tap(_ => console.log('submitFrom success'))
    );
  }

  createUserMerchant(userMerchant : UserMerchant) : Observable<ApiResponseModel<any>>{
    console.log(userMerchant)
    const url = environment.url.userMerchant.create;
    return this.http.post<ApiResponseModel<UserMerchant>>(url, userMerchant, this.httpOption).pipe(
      tap(_ => console.log('submitFrom success'))
    );
  }



   getUserProfile(id : string): Observable<ApiResponseModel<UserProfile>>{
    const url =environment.url.userProfile.findBy+ '?id=' +id;
    
    //@ts-ignore
    return this.http.get<ApiResponseModel<UserProfile>>(url, this.httpOption).pipe(
      tap( _ => console.log('summitForm success'))
    );
    }

    getMerchant(idMer : string): Observable<ApiResponseModel<Merchant>>{
      const url =environment.url.merchant.findBy+ '?idMer=' +idMer;
      
      //@ts-ignore
      return this.http.get<ApiResponseModel<Merchant>>(url, this.httpOption).pipe(
        tap( _ => console.log('summitForm success'))
      );
      }

      getUserMerchant(idUser : number): Observable<ApiResponseModel<Array<Merchant>>>{
        const url =environment.url.userMerchant.findBy+ '?id=' +idUser;
        
        //@ts-ignore
        return this.http.get<ApiResponseModel<Array<Merchant>>>(url, this.httpOption).pipe(
          tap( _ => console.log('summitForm success'))
        );
        }

        
        getMerchantUser(idMer : number): Observable<ApiResponseModel<Array<UserProfile>>>{
          const url =environment.url.merchantUser.findBy+ '?id=' +idMer;
          
          //@ts-ignore
          return this.http.get<ApiResponseModel<Array<UserProfile>>>(url, this.httpOption).pipe(
            tap( _ => console.log('summitForm success'))
          );
          }

          checkUserProfile(idUser : number,idMerchant : number) : Observable<ApiResponseModel<UserProfile>>{
            const url = environment.url.userMerchant.check;
            return this.http.post<ApiResponseModel<UserProfile>>(url, this.httpOption).pipe(
              tap(_ => console.log('submitFrom success'))
            );
          }

}
