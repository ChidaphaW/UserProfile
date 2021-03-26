// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url :{
    userProfile :{
      all : 'http://localhost:8080/demo/api/userProfile/all',
      findBy : 'http://localhost:8080/demo/api/userProfile/findBy',
      update  : 'http://localhost:8080/demo/api/userProfile/update',
      delete  : 'http://localhost:8080/demo/api/userProfile/delete',
      create  : 'http://localhost:8080/demo/api/userProfile/create'

    }
     ,merchant :{
      all : 'http://localhost:8080/demo/api/merchant/all',
      findBy : 'http://localhost:8080/demo/api/merchant/findBy',
      update  : 'http://localhost:8080/demo/api/merchant/update',
      delete  : 'http://localhost:8080/demo/api/merchant/delete',
      create  : 'http://localhost:8080/demo/api/merchant/create'
    }

    ,userMerchant :{
      create  : 'http://localhost:8080/demo/api/userMerchant/create',
      findBy : 'http://localhost:8080/demo/api/userMerchant/findBy',
      check : 'http://localhost:8080/demo/api/userMerchant/check'
    }

    ,merchantUser :{
      create  : 'http://localhost:8080/demo/api/merchantUser/create',
      findBy : 'http://localhost:8080/demo/api/merchantUser/findBy'
    }
    
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
