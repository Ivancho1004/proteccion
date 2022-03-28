/*var bizagiUtil = require('bz-util');
var REQUIRED = bizagiUtil.REQUIRED;
var ERROR = bizagiUtil.error;
var RESPONSE = bizagiUtil.getResponse;*/

const http = require('http');
const https = require('https');
var request = require('request');


const input = require('./input');
 
function invoke(globals, actionName, data, authenticationType, LOG, callback) {   
    var sUrlProxy = "";//"http://10.66.3.149:8080"; globals.systemproperties.UrlProxy;
    //LOG.trace(['[', actionName, ']************    START   ************']);        
        configApi = data.inputs.input.config.api;
        let requestData = JSON.stringify(data.inputs.input.body);
        var method = configApi.detail.method; 
        var paramsHeader = configApi.header.params;
        var hostname = configApi.detail.hostname;
        var path = configApi.detail.path;
        var port = configApi.detail.port;
        var ssl = configApi.detail.ssl;
        debugger
        try {
                    let options = {
                        'method': method,
                        'url': 'https://'+hostname+path,
                        headers: {},
                        proxy: sUrlProxy,
                        body: requestData
                    };
                    
                    for (let parametro of paramsHeader) {
                        if (parametro.enable) {
                            options.headers[parametro.name] = parametro.value;
                        }
                    }
                   debugger
                    let client = ssl ? https : http;
                    //LOG.trace(['[', actionName, '] options: ', options]);                    
                    request(options, function (error, response) {
                        var json = JSON.parse(response.body);
                        debugger
                        //LOG.trace(['[', actionName, '] BodyResponse: ', json]);
                        //console.log(json);
                        if (response.statusCode === 202) {               
                            var success = RESPONSE(json, null, 202);
                            callback(success);
                         } else {
                              var errorResponse = {
                                    "statusCode": response.statusCode ,
                                    "Message": json.Message,
                                    "StatusCode": json.StatusCode
                                };
                                console.log(errorResponse);
                             /*var error = RESPONSE(null, errorResponse, 500);
                             callback(error);*/
                         }
                    });
                }catch (e) {
                    //LOG.error(['[', actionName, '] Error: ', e.message]);
                    var errorResponse = {
                                   "error": -500,
                                   "message": "Error al ejecutar la peticion "+actionName+". Exception: "+e.message,
                                   "status": -500
                               };
                               console.log(errorResponse);
                    /*var error = RESPONSE(null, errorResponse, 500 );
                    callback(error);*/
                }
}
invoke(null, null, input.requestBizagi, null, null, null);
exports.invoke = invoke;