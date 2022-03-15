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
                 "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL1Byb3RlY2Npb25EMlBydWViYXMub25taWNyb3NvZnQuY29tLzgzNmFmZTgwLWM3OWEtNGYyMS05NjMzLWMxZTBkMGMwNDAyMCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRmMTZhMTM5LTQ4ZTktNGY4ZS05N2ZhLTRmOWZiODYwZjg1ZS8iLCJpYXQiOjE2NDY4NDYzMDUsIm5iZiI6MTY0Njg0NjMwNSwiZXhwIjoxNjQ2ODUwMjA1LCJhaW8iOiJFMlpnWU5BenlmdlRrWFYxeGRtckc5cG16bXFjQ1FBPSIsImFwcGlkIjoiODAwYzE3NjItMGQzYS00OTkwLWE1ZWMtOWQxNGZhYzA4MGMxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlLyIsIm9pZCI6IjMyNzkzZDdjLWEwNTgtNGQ5ZS1hOWFmLTU0OGJiNzI0OTc0MSIsInJoIjoiMC5BUjBBT2FFV1QtbElqay1YLWstZnVHRDRYcXhlbGlpZktLeEN0aDVvajBqejhCVWRBQUEuIiwicm9sZXMiOlsiY2xhdmVfZW1wcmVzYXJpYWwiXSwic3ViIjoiMzI3OTNkN2MtYTA1OC00ZDllLWE5YWYtNTQ4YmI3MjQ5NzQxIiwidGlkIjoiNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlIiwidXRpIjoiNlA4OHl1bjF0a3U2UVE1ODh5RVRBQSIsInZlciI6IjEuMCJ9.Jo8TmUn-FBus1TzisW_eHU3omHPcs_XxN1N4o0fL_dVQodBFtST-Agr3Ot3h91dNJOuenUqkJwEVFpyooPBAzlwM2bNRHtioDpVZ2qppUelOSLXpKYI4ex5z_p9sXxevbZfH_dD2QQfrI9rBVWxM54iohScwIIFufqkQBYVvMqBHcHyoiUKOAELiCVqqIOXpBHwehEK0JXIGp0ZcXtI3walaGMlls2vH9l2uO3RlB1hz5RU1MAuRcQCPNe7Mt0V5EqufTg8YcV1Xp8vBFtjYuvK_yEBcUsXh6Orrn4fjdDReVqMWE8frJ0LWqZzHBJB-V7lb1bpzQ5bWw-KWm74R6A"
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