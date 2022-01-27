let requestBizagi = {
    "inputs": {
        "input": {
            "data": {
                "config": {
                    "api": [
                        {
                            "name": "Permissions",
                            "header": {
                                "params": [
                                    {
                                        "name": "x-ibm-client-id",
                                        "value": "test",
                                        "enable": true
                                    },
                                    {
                                        "name": "x-ibm-client-secret",
                                        "value": "test",
                                        "enable": true
                                    },
                                    {
                                        "name": "Message-Id",
                                        "value": "test",
                                        "enable": true
                                    },
                                    {
                                        "name": "APIM-debug",
                                        "value": true,
                                        "enable": true
                                    },
                                    {
                                        "name": "x-mock-response-code",
                                        "value": "200",
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
                                "hostname": "b8b874ae-a3eb-4f84-abc1-fc4b56cb0780.mock.pstmn.io",
                                "port": 443,
                                "path": "/v1/operations/product-specific/cards/customers/credit-cards/inmediate-use"
                            }
                        }
                    ]
                },
                "dataUsoInmediato": [
                    {
                        "data": {
                            "user": {
                                "id": "SVP"
                            },
                            "customer": {
                                "identification": {
                                    "documentType": "TIPDOC_FS000",
                                    "documentNumber": "444"
                                },
                                "firstName": "Juan",
                                "lastName": "Perez"
                            },
                            "card": {
                                "id": "al",
                                "segment": "PERSONAL",
                                "handlingFeeCode": "132",
                                "handlingFeeExemptionMonths": "6",
                                "customerCard": {
                                    "embossedName": "Juan A. Perez",
                                    "approvalType": "PREAPROBADO_VIRTUAL",
                                    "limit": 1000000,
                                    "billingCycle": "15",
                                    "openingOffice": "13245",
                                    "adviserCode": "12345",
                                    "referred": "12345",
                                    "novelty": {
                                        "description": "DEBITO_AUTOMATICO",
                                        "paymentPlan": {
                                            "type": {
                                                "value": "<Error: Too many levels of nesting to fake this schema>"
                                            }
                                        },
                                        "account": {
                                            "type": {
                                                "value": "<Error: Too many levels of nesting to fake this schema>"
                                            },
                                            "number": {
                                                "value": "<Error: Too many levels of nesting to fake this schema>"
                                            }
                                        }
                                    }
                                }
                            },
                            "requestInformation": {
                                "id": "1265",
                                "requiredDocuments": {
                                    "documentsToSign": "PAGARE",
                                    "documentsToCollect": "C LABORAL"
                                }
                            }
                        }
                    },
                    {
                        "data": {
                            "user": {
                                "id": "SVP"
                            },
                            "customer": {
                                "identification": {
                                    "documentType": "TIPDOC_FS000",
                                    "documentNumber": "123123"
                                },
                                "firstName": "Juan",
                                "lastName": "Perez"
                            },
                            "card": {
                                "id": "al",
                                "segment": "PERSONAL",
                                "handlingFeeCode": "132",
                                "handlingFeeExemptionMonths": "6",
                                "customerCard": {
                                    "embossedName": "Juan A. Perez",
                                    "approvalType": "PREAPROBADO_VIRTUAL",
                                    "limit": 1000000,
                                    "billingCycle": "15",
                                    "openingOffice": "13245",
                                    "adviserCode": "12345",
                                    "referred": "12345",
                                    "novelty": {
                                        "description": "DEBITO_AUTOMATICO",
                                        "paymentPlan": {
                                            "type": {
                                                "value": "<Error: Too many levels of nesting to fake this schema>"
                                            }
                                        },
                                        "account": {
                                            "type": {
                                                "value": "<Error: Too many levels of nesting to fake this schema>"
                                            },
                                            "number": {
                                                "value": "<Error: Too many levels of nesting to fake this schema>"
                                            }
                                        }
                                    }
                                }
                            },
                            "requestInformation": {
                                "id": "1265",
                                "requiredDocuments": {
                                    "documentsToSign": "PAGARE",
                                    "documentsToCollect": "C LABORAL"
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
};

module.exports.requestBizagi = requestBizagi;