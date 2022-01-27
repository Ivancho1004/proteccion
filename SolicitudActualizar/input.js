let requestBizagi = {
    "inputs": {
        "input": {
            "data": {
                "config": {
                    "api": [
                        {
                            "name": "Actualizar",
                            "header": {
                                "params": [
                                    {
                                        "name": "Authorization",
                                        "value": "Bearer 123",
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
                                "hostname": "internal-albeksqa2-1876233188.us-east-1.elb.amazonaws.com",
                                "port": 8590,
                                "path": "/api/solicitud/actualizar",
                                "ssl": true
                            }
                        }
                    ]
                },
                "actualizar": {
                    "idSolicitud": "SC00000209",
                    "estado": "2"
                  }
            }
        }
    }
};

module.exports.requestBizagi = requestBizagi;