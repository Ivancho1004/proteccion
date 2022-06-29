let requestBizagi = {
    "inputs": {
      "input": {
        "params": {
          "tipoPerfil": "1",
          "tipoDocumento":"CC",
          "documento":"30064563793"
        },
        "config": {
          "api": {
            "detail": {
              "hostname": "api-qa.proteccion.com.co",
              "method": "GET",
              "path": "/perfil-inversion-qa/eyc/enr/perfil-inversionista/perfil-actual/",
              "port": 443,
              "ssl": true
            },
            "header": {
              "params": [
                {
                  "enable": true,
                  "name": "x-api-key",
                  "value": "bolLs38S33765aWYTPSvq7IE3zkoRZ4m7GV4XZnE"
                },
                {
                  "enable": true,
                  "name": "Content-Type",
                  "value": "application/json"
                },
                {
                  "enable": true,
                  "name": "Authorization",
                  "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL3Byb3RlY2Npb24ub25taWNyb3NvZnQuY29tL3BlcmZpbF9pbnZlcnNpb25pc3RhIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZjQ3ZGNjZTQtMDJlNy00ZDg4LWE2NTktYTJkMGJiZTE3MGU3LyIsImlhdCI6MTY1NjQ2ODcwNywibmJmIjoxNjU2NDY4NzA3LCJleHAiOjE2NTY0NzI2MDcsImFpbyI6IkUyWmdZSmdTSGlWcjR0VW45bDhnU0ZwNzMvTlpBQT09IiwiYXBwaWQiOiI0MzYzNzQ4Ni1jZDY0LTQ0NWEtYWQ5YS00NjIwNjExNzVkMDQiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mNDdkY2NlNC0wMmU3LTRkODgtYTY1OS1hMmQwYmJlMTcwZTcvIiwib2lkIjoiYjc0NmJhODQtMjU0NC00OGY3LTg3YzctMjZiMzhmZDc0OTk2IiwicmgiOiIwLkFRb0E1TXg5OU9jQ2lFMm1XYUxRdS1GdzUwSGZjSUhnRkROTGswdl92Zm1PU2UwS0FBQS4iLCJyb2xlcyI6WyJwZXJmaWxfaW52ZXJzaW9uLmNvbnN1bHRhciJdLCJzdWIiOiJiNzQ2YmE4NC0yNTQ0LTQ4ZjctODdjNy0yNmIzOGZkNzQ5OTYiLCJ0aWQiOiJmNDdkY2NlNC0wMmU3LTRkODgtYTY1OS1hMmQwYmJlMTcwZTciLCJ1dGkiOiJEOFZPWW9Dc1UwU1F4aURMN3J5eEFBIiwidmVyIjoiMS4wIn0.EUyTTShwn_Jd-b9uM1y-TJXNR2N052IxKeAvpXe9wFBy2_ksgbR2b31pkMk4hd4qz5OROV3DIEHzZpMa_uh9maHyqPWMzNOLFBWhU3XNUWzHzfiiYIIVtQ6Vw0L7X60PByPydKp6w9XwjWyfi0VdtYZs2KqA8DGEImWSFv3dsEwZMLvAraAa4MWhrt4Lj8v-x154F67p2X7QefWrKWsi4WenOWZtOkvNAa4WHe8Yg3_iPRBP76tYH5bFn-m3Sr4c4xoMzFGxRyiNZUh7wVGaeEcikLjr0IFL4PoqCEBLGiGhEkf7NGf30PdxHUYezHfw2BHpkcJ4xx6Yn-t9NrgZzA"
                }
              ]
            },
            "name": "perfil-inversionista"
          }
        }
      }
    }
  };
 
 module.exports.requestBizagi = requestBizagi;