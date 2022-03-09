let requestBizagi = {
   "inputs": {
     "input": {
       "actualizar_solicitud": {
         "comando": {
           "aplicacionEmisora": {
             "fechaTransaccion": "2022-03-08T22:23:20",
             "idTransaccionEmisora": "ea3694bd-8d4d-49df-a126-63658f353faf",
             "nombreAplicacionEmisora": "Bizagi"
           },
           "idTrazabilidad": "a6d4272e-ea22-490d-993c-7109497354be",
           "nombre": "actualizarestadosolicitudcommand.solicitar",
           "payload": {
             "estado": "3",
             "idSolicitud": "123"
           }
         }
       },
       "config": {
         "api": {
           "detail": {
             "hostname": "clientes-api.pruebas.proteccion.com.co",
             "method": "POST",
             "path": "/empresas-qa/ges/add/tramitesolicitudclaveempv2/commands",
             "port": 443,
             "ssl": true
           },
           "header": {
             "params": [
               {
                 "enable": true,
                 "name": "x-api-key",
                 "value": "YZNtu2sJDf6A2nbwmL0A34AbZyKVm8NQ1CnWz9Tb"
               },
               {
                 "enable": true,
                 "name": "Content-Type",
                 "value": "application/json"
               },
               {
                 "enable": true,
                 "name": "Authorization",
                 "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL1Byb3RlY2Npb25EMlBydWViYXMub25taWNyb3NvZnQuY29tLzgzNmFmZTgwLWM3OWEtNGYyMS05NjMzLWMxZTBkMGMwNDAyMCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRmMTZhMTM5LTQ4ZTktNGY4ZS05N2ZhLTRmOWZiODYwZjg1ZS8iLCJpYXQiOjE2NDY3OTU2NTQsIm5iZiI6MTY0Njc5NTY1NCwiZXhwIjoxNjQ2Nzk5NTU0LCJhaW8iOiJFMlpnWUdpUW45aDBWbmwzcGMrODdHTXpIU3QxQUE9PSIsImFwcGlkIjoiODAwYzE3NjItMGQzYS00OTkwLWE1ZWMtOWQxNGZhYzA4MGMxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlLyIsIm9pZCI6IjMyNzkzZDdjLWEwNTgtNGQ5ZS1hOWFmLTU0OGJiNzI0OTc0MSIsInJoIjoiMC5BUjBBT2FFV1QtbElqay1YLWstZnVHRDRYcXhlbGlpZktLeEN0aDVvajBqejhCVWRBQUEuIiwicm9sZXMiOlsiY2xhdmVfZW1wcmVzYXJpYWwiXSwic3ViIjoiMzI3OTNkN2MtYTA1OC00ZDllLWE5YWYtNTQ4YmI3MjQ5NzQxIiwidGlkIjoiNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlIiwidXRpIjoiUDhQTV83M1cwa2FFOTRqM3k0TU5BQSIsInZlciI6IjEuMCJ9.YSyShrT3vzs-UPKOiRsb4Cz0BRgwWPuAhj0Xd4j4eGzDnW3HHs1M8sougWXrNooxGsRl8YTYlw0ePOb5H_KEvwZ5rh8oj6Np5KGDopV6tHcTimEibbxFsGbzCa1mSP26DJOm_AqP4VKFgqLXlVcZxLiCQNdOtcd3h-Ftu0t0YUVBuAsycktyz2oaPJHVNM9Fc0lTvmH6V3zYMZ0YJ3sDfYPPLYPerFuC3X5rh3rnM6luvDErG6Mmq5QxAUUE3miPxIFOiN3tEjOJJKkMpSww1yTlNyri0mNUztFeJ0G54umb8HC_0bQVH3fgfh5aQ5BiTLoxM82aMbFyKMHmwIrBhg"
               }
             ]
           },
           "name": "ActualizarEstadoSolicitud"
         }
       }
     }
   }
 };

module.exports.requestBizagi = requestBizagi;