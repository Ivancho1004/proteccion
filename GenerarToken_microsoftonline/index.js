/**
 * @author Proteecion
 */

 const _ = require('lodash');
 const http = require('http');
 const https = require('https');
 var qs = require('querystring');
 var request = require('request');
 process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
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

        configApi = data.inputs.input.config.api;
        debugger;
        let requestPermissions = JSON.stringify(data.inputs.input.token_microsoftonline);   
        requestPermissions = data.inputs.input.token_microsoftonline;    
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
            formData: requestPermissions
        };
        for (let parametro of paramsHeader) {
            if (parametro.enable) {
                options.headers[parametro.name] = parametro.value;
            }
        }
       debugger
        let client = ssl ? https : http;
        request(options, function (error, response) {
            debugger
            var json = JSON.parse(response.body);
            debugger
            if (response.statusCode === 200) {               
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
        /*LOG.error(['[', actionName, '] Error: ', e.message]);
        var errorResponse = {
                       "error": -500,
                       "message": "Error al ejecutar la peticion. Exception: "+e.message,
                       "status": -500
                   };
        var error = RESPONSE(null, errorResponse, 500 );*/
        console.log(errorResponse);
        //callback(error);
    }
}




invoke(null, "Consumo", input.requestBizagi, null, null, null);
exports.invoke = invoke;