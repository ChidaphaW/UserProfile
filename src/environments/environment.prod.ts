export const environment = {
  production: true,
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
