let requestBizagi = {
    "inputs": {
        "input": {
            "data": {
                "config": {
                    "api": [
                        {
                            "name": "Actualizar_solicitud",
                            "header": {
                                "params": [
                                    {
                                        "name": "x-api-key",
                                        "value": "YZNtu2sJDf6A2nbwmL0A34AbZyKVm8NQ1CnWz9Tb",
                                        "enable": true
                                    },
                                    {
                                        "name": "Authorization",
                                        "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL1Byb3RlY2Npb25EMlBydWViYXMub25taWNyb3NvZnQuY29tLzgzNmFmZTgwLWM3OWEtNGYyMS05NjMzLWMxZTBkMGMwNDAyMCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRmMTZhMTM5LTQ4ZTktNGY4ZS05N2ZhLTRmOWZiODYwZjg1ZS8iLCJpYXQiOjE2NDU1MDU2MjgsIm5iZiI6MTY0NTUwNTYyOCwiZXhwIjoxNjQ1NTA5NTI4LCJhaW8iOiJFMlpnWVBocXBIa3l1c0Q4dlV2RmdwOEZzejN6QUE9PSIsImFwcGlkIjoiODAwYzE3NjItMGQzYS00OTkwLWE1ZWMtOWQxNGZhYzA4MGMxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlLyIsIm9pZCI6IjMyNzkzZDdjLWEwNTgtNGQ5ZS1hOWFmLTU0OGJiNzI0OTc0MSIsInJoIjoiMC5BUjBBT2FFV1QtbElqay1YLWstZnVHRDRYcXhlbGlpZktLeEN0aDVvajBqejhCVWRBQUEuIiwicm9sZXMiOlsiY2xhdmVfZW1wcmVzYXJpYWwiXSwic3ViIjoiMzI3OTNkN2MtYTA1OC00ZDllLWE5YWYtNTQ4YmI3MjQ5NzQxIiwidGlkIjoiNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlIiwidXRpIjoiMTN0MEdYSlFnazJFNm9qZ3BQZEpBQSIsInZlciI6IjEuMCJ9.wFATMuOAg215Atc-j6y4a_AJFdAxwptqCMan31mVf7CVIWVl6geTDpvLFqtd9kXecxuvcjC5J3tyaoWLEQD6mCGQDaAdSj5ImdyUe-TenQLM_5InxHRqQIT96bJYO3mjFuiFnO3adetWcBF_Ym27wkFCFTqi4c_bzuRHs7IkfLCEdXiY22DwZhTwPJ5rBqWk5Dj0sVXLD6T8DtdpVvjJtPTapWxeN-61NsLna71UbxlHNWCE1SS_7D9ZLGutl1Qwhy1UQUbfcxj4uWQMjyRKssJDzpNIK4aCenOX_wnDB8u8oV3ZesViL09rcdyUk_gTidNMV8O7EQYtpxNA93DiMw",
                                        "enable": true
                                    },
                                    {
                                        "name": "Content-Type",
                                        "value": "application/json",
                                        "enable": true
                                    }
                                ],
                            },
                            "detail": {
                                "method": 'POST',
                                "hostname": 'clientes-api.pruebas.proteccion.com.co',
                                "port": 443,
                                "path": '/empresas-qa/ges/add/tramitesolicitudclaveempv2/commands',
                                "ssl": true
                            }
                        }
                    ]
                },
                "actualizar_solicitud": {
                    "comando": {
                      "idTrazabilidad": "cce046e7-0eb6-4c14-97cd-15ef3e153e88",
                      "nombre": "actualizarestadosolicitudcommand.solicitar",
                      "aplicacionEmisora": {
                        "nombreAplicacionEmisora": "Bizagi",
                        "idTransaccionEmisora": "ea3694bd-8d4d-49df-a126-63658f353faf",
                        "fechaTransaccion": "2022-02-02T09:03:43.002-05:00"
                      },
                      "payload": {
                        "idSolicitud": "SC00000209",
                        "estado": "1"
                      }
                    }
                  }
            }
        }
    }
};

module.exports.requestBizagi = requestBizagi;