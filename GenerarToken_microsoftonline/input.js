let requestBizagi = {
   "inputs":{
      "input":{
         "config":{
            "api":{
               "detail":{
                  "hostname":"login.microsoftonline.com",
                  "method":"GET",
                  "path":"/4f16a139-48e9-4f8e-97fa-4f9fb860f85e/oauth2/token",
                  "port":443,
                  "ssl":true
               },
               "header":{
                  "params":[
                     {
                        "enable":true,
                        "name":"Authorization"
                     },
                     {
                        "enable":true,
                        "name":"Content-Type"
                     }
                  ]
               },
               "name":"token_microsoftonline"
            }
         },
         "token_microsoftonline":{
            "client_id":"800c1762-0d3a-4990-a5ec-9d14fac080c1",
            "client_secret":"TqO7Q~lIBNtAgoTem4onL_VFOEwbU8riQrg2k",
            "grant_type":"client_credentials",
            "resource":"https://ProteccionD2Pruebas.onmicrosoft.com/836afe80-c79a-4f21-9633-c1e0d0c04020"
         }
      }
   }
};

module.exports.requestBizagi = requestBizagi;