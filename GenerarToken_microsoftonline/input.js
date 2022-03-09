let requestBizagi = {
    "inputs": {
        "input": {
            
                "config":{
                   "api":
                      {
                         "name":"token_microsoftonline",
                         "header":{
                            "params":[
                               {
                                  "name":"Authorization",
                                  "value":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL1Byb3RlY2Npb25EMlBydWViYXMub25taWNyb3NvZnQuY29tLzgzNmFmZTgwLWM3OWEtNGYyMS05NjMzLWMxZTBkMGMwNDAyMCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRmMTZhMTM5LTQ4ZTktNGY4ZS05N2ZhLTRmOWZiODYwZjg1ZS8iLCJpYXQiOjE2NDQ1MTk4NjgsIm5iZiI6MTY0NDUxOTg2OCwiZXhwIjoxNjQ0NTIzNzY4LCJhaW8iOiJFMlpnWURodVgzSkU4STNlaFp5SGwyTGtwa2pQQUFBPSIsImFwcGlkIjoiODAwYzE3NjItMGQzYS00OTkwLWE1ZWMtOWQxNGZhYzA4MGMxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlLyIsIm9pZCI6IjMyNzkzZDdjLWEwNTgtNGQ5ZS1hOWFmLTU0OGJiNzI0OTc0MSIsInJoIjoiMC5BUjBBT2FFV1QtbElqay1YLWstZnVHRDRYcXhlbGlpZktLeEN0aDVvajBqejhCVWRBQUEuIiwicm9sZXMiOlsiY2xhdmVfZW1wcmVzYXJpYWwiXSwic3ViIjoiMzI3OTNkN2MtYTA1OC00ZDllLWE5YWYtNTQ4YmI3MjQ5NzQxIiwidGlkIjoiNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlIiwidXRpIjoiLUpnOXZNVnlKa214VFdiU21VVU9BQSIsInZlciI6IjEuMCJ9.Pj1ehh9yHulDvOyS4noSnwtOoirYonT1P0wCNXO8cLPCs-HtfBwG6n_oCWEvt3La_qp_YD01cLZtNk3JsHOKhPAlenNpDx6wrGfOhSC9ZE0rYRszOv94yeD5WwaNBqoMRQkbA9favY5wPzcBH_q8tA6NNnmUWTCXBx3g6NS9ZCqYjEN_zmZBx8MU_SxCuIMvxhRIb8PRAv9_2QyPKeq2YMs52qE2y6Iz2gvBxMG44eyFSfNNAmnmhytpmjs-xncvr-BlzjJ8hwmwrg_X_4Y814y8BVvehgIvvL1tteBmXPp9rlTlaHqvXOpxdJWB0b_lzTwcMRgolP2PryvBHC1eBg",
                                  "enable":true
                               },
                               {
                                  "name":"Content-Type",
                                  "value":"application/x-www-form-urlencoded",
                                  "enable":true
                               }
                            ]
                         },
                         "detail":{
                            "method":"GET",
                            "hostname":"login.microsoftonline.com",
                            "port":443,
                            "path":"/4f16a139-48e9-4f8e-97fa-4f9fb860f85e/oauth2/token",
                            "ssl":true
                         }
                      }
                   
                },
                "token_microsoftonline":{
                   "grant_type":"client_credentials",
                   "resource":"https://ProteccionD2Pruebas.onmicrosoft.com/836afe80-c79a-4f21-9633-c1e0d0c04020",
                   "client_id":"800c1762-0d3a-4990-a5ec-9d14fac080c1",
                   "client_secret":"TqO7Q~lIBNtAgoTem4onL_VFOEwbU8riQrg2k",
                   "scope":"clave_empresarial"
                }
             
        }
    }
};

module.exports.requestBizagi = requestBizagi;