let requestBizagi = {
    "inputs": {
        "input": {
            "data": {
                "config": {
                    "api": [
                        {
                            "name": "Token_Lagash",
                            "header": {
                                "params": [
                                    /*{
                                        "name": "Authorization",
                                        "value": "Bearer 123",
                                        "enable": true
                                    },*/
                                    {
                                        "name": "Content-Type",
                                        "value": "application/x-www-form-urlencoded",
                                        "enable": true
                                    }
                                ],
                            },
                            "detail": {
                                "method": 'POST',
                                "hostname": "login.windows.net",
                                "port": 443,
                                "path": "/ProteccionD2Pruebas.onmicrosoft.com/oauth2/token?api-version=1.6",
                                "ssl": true
                            }
                        }
                    ]
                },
                "formData": {
                    "grant_type": "client_credentials",
                    "resource": "https://graph.windows.net",
                    "client_secret": "+XmTz8af691MlLC8PGcbGu48OSa/AfbCTtMl5svFeYM=",
                    "client_id": "28965eac-289f-42ac-b61e-688f48f3f015"
                  }
            }
        }
    }
};

module.exports.requestBizagi = requestBizagi;