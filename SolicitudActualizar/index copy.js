/**
 * @author Proteecion
 */

 const http = require('http');
 const https = require('https');
 var request = require('request');


 //process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
 debugger;
 const input = require('./input');
 var output = {};
debugger;
 function invoke(globals, actionName, data, authenticationType, LOG, callback) {
    //var sUrlProxy = globals.systemproperties.UrlProxy; 
    var sUrlProxy = "";//"http://10.66.3.149:8080"; 
    debugger;
    try {
        let promises = [];
        debugger
        configApi = data.inputs.input.config.api;
        let requestPermissions = JSON.stringify(data.inputs.input.actualizar_solicitud);    
        var method = configApi.detail.method; 
        var paramsHeader = configApi.header.params;
        var hostname = configApi.detail.hostname;
        var path = configApi.detail.path;
        var port = configApi.detail.port;
        var ssl = configApi.detail.ssl;     
        debugger
        let options = {
            'method': method,
            'url': 'https://'+hostname+path,
            headers: {},
            proxy: sUrlProxy,
            body: requestPermissions
        };
        for (let parametro of paramsHeader) {
            if (parametro.enable) {
                options.headers[parametro.name] = parametro.value;
            }
        }
       debugger
        let client = ssl ? https : http;
        request(options, function (error, response) {
            var json = JSON.parse(response.body);
            debugger
            if (response.statusCode === 202) {               
                //var success = RESPONSE(json, null, 200);
                console.log(json);
                //callback(success);
             } else {
                 var errorResponse = {
                        "error": response.statusCode ,
                        "message": json.Message,
                        "status": json.StatusCode
                    };
                // error = RESPONSE(null, errorResponse, 500);
                 console.log(errorResponse)
                 //callback(error);
             }
        });
    }
    catch (e) {
        //LOG.error(['[', actionName, '] Error al leer la data: ', e.message]);
        console.log('Error al leer la data: ', e.message);
    }
}




invoke(null, null, input.requestBizagi, null, null, null);
exports.invoke = invoke;