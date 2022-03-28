let requestBizagi = {
    "inputs": {
      "input": {
        "body": {
          "emailUsuario": "ivancho1004@gmail.com",
          "idEmpresa": "900854974",
          "idUsuario": "12345678",
          "nombreEmpresa": "Empresa prueba",
          "nombreUsuario": "IVAN CUBIDES",
          "perfil": "ADM",
          "Permisos": [
            {
              "Permiso": "1"
            },
            {
              "Permiso": "2"
            },
            {
              "Permiso": "11"
            },
            {
              "Permiso": "12"
            },
            {
              "Permiso": "3"
            },
            {
              "Permiso": "4"
            },
            {
              "Permiso": "5"
            },
            {
              "Permiso": "6"
            },
            {
              "Permiso": "7"
            },
            {
              "Permiso": "8"
            },
            {
              "Permiso": "9"
            },
            {
              "Permiso": "10"
            }
          ],
          "tipoIdEmpresa": "NIT",
          "tipoIdUsuario": "CC"
        },
        "config": {
          "api": {
            "detail": {
              "hostname": "graphserviceemp-pruebas.azurewebsites.net",
              "method": "POST",
              "path": "/CreateKey?au=",
              "port": 443,
              "ssl": true
            },
            "header": {
              "params": [
                {
                  "enable": true,
                  "name": "Content-Type",
                  "value": "application/json"
                },
                {
                  "enable": true,
                  "name": "Authorization",
                  "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlLyIsImlhdCI6MTY0ODE0MDQyOCwibmJmIjoxNjQ4MTQwNDI4LCJleHAiOjE2NDgxNDQzMjgsImFpbyI6IkUyWmdZT2lYTzhnbW1OVndmSGJUajIzSlRESldBQT09IiwiYXBwaWQiOiIyODk2NWVhYy0yODlmLTQyYWMtYjYxZS02ODhmNDhmM2YwMTUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZjE2YTEzOS00OGU5LTRmOGUtOTdmYS00ZjlmYjg2MGY4NWUvIiwib2lkIjoiMGQzYzk2M2UtMjliYS00NDJkLWFjNDEtOGZmZDRmZDNkZmFjIiwicmgiOiIwLkFSMEFPYUVXVC1sSWprLVgtay1mdUdENFhnSUFBQUFBQUFBQXdBQUFBQUFBQUFBZEFBQS4iLCJyb2xlcyI6WyJEaXJlY3RvcnkuUmVhZC5BbGwiXSwic3ViIjoiMGQzYzk2M2UtMjliYS00NDJkLWFjNDEtOGZmZDRmZDNkZmFjIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6Ik5BIiwidGlkIjoiNGYxNmExMzktNDhlOS00ZjhlLTk3ZmEtNGY5ZmI4NjBmODVlIiwidXRpIjoiaS1XOU1QR1I3MFdXNTJzXzQyY3BBQSIsInZlciI6IjEuMCJ9.T5_x63rqLR0ts8yUvu1kGv9QeVU8-DPLPI7RqKxcfkS2wTGkbv2QVNDPOM3lpMcDaKcfY2Sx9d_Drb4CzUHN733V9HLpI4SV5ZVWAqA3hBe344fO_Es8iVIfGb3JWxc9uMJd21dr2lYnxYAm6xqiN9dqvbkaANOhn3xAz5uKis3aBQKbbALR371xV67Xi3PJDhbIjeWvhiRC8ri73ydQ-QX5zdxlbK_T0ld_VMnpz3T36I0X7NqJFS_OTXw_js6wMuBcURj_313j1Qo584SWNPWg9n_dhxyPvmBWmSxItGa5998U_XkBWL5J_NW3U3XSpik_EOobyxN89XRjJPZ_zQ"
                }
              ]
            },
            "name": "CreateKey"
          }
        }
      }
    }
  }
  
  ;
 
 module.exports.requestBizagi = requestBizagi;