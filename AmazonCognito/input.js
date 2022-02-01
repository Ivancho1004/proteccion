let requestBizagi = {
    "inputs": {
        "input": {
            "data": {
                "config": {
                    "api": [
                        {
                            "name": "amazoncognito",
                            "header": {
                                "params": [
                                    {
                                        "name": "Authorization",
                                        "value": "Basic MmFmZDBwOGZ1dTBzbXZwaTI5bDRwcmxkazQ6MXUzY2Rudm9rODN0dmU1ZjEycWc4amRhaWttbHNwazM3cGw1cWs2M21tNmMyY2ZjcGp1ZQ==",
                                        "enable": true
                                    },
                                    {
                                        "name": "Content-Type",
                                        "value": "application/x-www-form-urlencoded;charset=utf-8",
                                        "enable": true
                                    },
                                    {
                                        "name": "Cookie",
                                        "value": "XSRF-TOKEN=a0de84ef-de1f-429f-9a12-a8f23d3c3818",
                                        "enable": true
                                    }
                                ],
                            },
                            "detail": {
                                "method": 'POST',
                                "hostname": "terceros-qa.auth.us-east-1.amazoncognito.com",
                                "port": 443,
                                "path": "/oauth2/token",
                                "ssl": true
                            }
                        }
                    ]
                },
                "amazoncognito": {
                    "grant_type": "client_credentials",
                    "scope": "empresas-qa/documentos.validar empresas-qa/clave.generar"
                  }
            }
        }
    }
};

module.exports.requestBizagi = requestBizagi;