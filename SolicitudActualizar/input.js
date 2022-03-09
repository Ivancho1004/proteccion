let requestBizagi = {
   "inputs": {
     "input": {
       "actualizar_solicitud": {
         "comando": {
           "aplicacionEmisora": {
             "fechaTransaccion": "2022-03-08T22:03:57",
             "idTransaccionEmisora": "ea3694bd-8d4d-49df-a126-63658f353faf",
             "nombreAplicacionEmisora": "Bizagi"
           },
           "idTrazabilidad": "24b53354-6aa0-4d5e-9c52-65ebe4ac8c8e",
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
                 "name": "x-api-key",
                 "value": "YZNtu2sJDf6A2nbwmL0A34AbZyKVm8NQ1CnWz9Tb"
               },
               {
                 "name": "Content-Type",
                 "value": "application/json"
               },
               {
                 "name": "Authorization",
                 "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL1Byb3RlY2Npb25EMlBydWViYXMub25taWNyb3NvZnQuY29tLzgzNmFmZTgwLWM3OWEtNGYyMS05NjMzLWMxZTBkMGMwNDAyMCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRmMTZhMTM5LTQ4ZTktNGY4ZS05N2ZhLTRmOWZiODYwZjg1ZS8iLCJpYXQiOjE2NDY3OTM5NzAsIm5iZiI6MTY0Njc5Mzk3MCwiZXhwIjoxNjQ2Nzk3ODcwLCJhaW8iOiJFMlpnWU9BdzFyeW1kdUw4cTAwLzVqejQvejIxRmdBPSIsImFwcGlkIjoiODAwYzE3NjItMGQzYS00OTkwLWE1ZWMtOWQxNGZhYzA4MGMxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlLyIsIm9pZCI6IjMyNzkzZDdjLWEwNTgtNGQ5ZS1hOWFmLTU0OGJiNzI0OTc0MSIsInJoIjoiMC5BUjBBT2FFV1QtbElqay1YLWstZnVHRDRYcXhlbGlpZktLeEN0aDVvajBqejhCVWRBQUEuIiwicm9sZXMiOlsiY2xhdmVfZW1wcmVzYXJpYWwiXSwic3ViIjoiMzI3OTNkN2MtYTA1OC00ZDllLWE5YWYtNTQ4YmI3MjQ5NzQxIiwidGlkIjoiNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlIiwidXRpIjoiTWRFeGQ3dkVJVTIyWW5VYl9iRU5BQSIsInZlciI6IjEuMCJ9.bWCog1pf7M-AM6wBoQPjI3dUGA8xjg1U7dxATwI-Zx2XDkBNJpPFnBwjuuSzQk6bg3u8PyWSTXivmLuEH11WlxMZPmK2U-OGLsl0-EjrCShPH8hmDRcsktc7g55ld1Gxqo9O0ww-BF0inkQeFtOFmayMTSRiaIpJrKOxH6BEh_IukV7JxjhSSaIivq8bJ2iDzhwHrjrKCh4n0jIwdHC5eZrPlzCc485EAMJQkm7kIQaOaXxoZewM0xEW_6Z-6Z4whS3I9jVLj7F_FPpYgYtHoS1DAVZLasVQd_qCDWjok3oL4xvEGaHI1Sw_qshSP9HSKET6jKz-E3LMjOH4A_U_qQ"
               },
               {
                 "name": "x-api-key",
                 "value": "YZNtu2sJDf6A2nbwmL0A34AbZyKVm8NQ1CnWz9Tb"
               },
               {
                 "name": "Content-Type",
                 "value": "application/json"
               },
               {
                 "name": "Authorization",
                 "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL1Byb3RlY2Npb25EMlBydWViYXMub25taWNyb3NvZnQuY29tLzgzNmFmZTgwLWM3OWEtNGYyMS05NjMzLWMxZTBkMGMwNDAyMCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRmMTZhMTM5LTQ4ZTktNGY4ZS05N2ZhLTRmOWZiODYwZjg1ZS8iLCJpYXQiOjE2NDY3OTQ3MzcsIm5iZiI6MTY0Njc5NDczNywiZXhwIjoxNjQ2Nzk4NjM3LCJhaW8iOiJFMlpnWUhoL1hKNXJJK2VsclhmbUNqNk5ZcnpOQndBPSIsImFwcGlkIjoiODAwYzE3NjItMGQzYS00OTkwLWE1ZWMtOWQxNGZhYzA4MGMxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlLyIsIm9pZCI6IjMyNzkzZDdjLWEwNTgtNGQ5ZS1hOWFmLTU0OGJiNzI0OTc0MSIsInJoIjoiMC5BUjBBT2FFV1QtbElqay1YLWstZnVHRDRYcXhlbGlpZktLeEN0aDVvajBqejhCVWRBQUEuIiwicm9sZXMiOlsiY2xhdmVfZW1wcmVzYXJpYWwiXSwic3ViIjoiMzI3OTNkN2MtYTA1OC00ZDllLWE5YWYtNTQ4YmI3MjQ5NzQxIiwidGlkIjoiNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlIiwidXRpIjoiV29DTXBWMW5pVW03UFJVQlVod05BQSIsInZlciI6IjEuMCJ9.ljEKJTDg4aaFBgZ8U9c2ygA0L4whMSrE_MHEYsiHVdW1DXCPdZlv2sYQmPxfNkK37YAlG2XcgX5x4Ge1byTaP8RNX7fEVOuVZWj7d6K3SfNF5j_o_ZZBYlbUhnFusnFrco1BmrLSQiw6Wn59T5kB5_v9U68G75qJ5Gvn2osHlNYA9GbCsrfLH7oY3T-aSuMh1pepBwXjQf2OM8qJAYtJN2aUN9HiKoZ7LH6Mz23EXg5vXXF-99dEOeTI_t413-vLF0WUW0iNkILdAEq_zD1sa9HiC-IekvhijL3PWpJ_nSB6cibWGQ2UabrR5axK42-_CzfFJ5voVrCIGEA1SQfz5w"
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