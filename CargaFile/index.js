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
    //var UrlLoadFile = globals.systemproperties.UrlLoadFile; 
    var sUrlProxy = "http://10.66.3.149:8080"; 
    var UrlLoadFile ="https://apiprivada-qa.proteccion.com.co/sgi-qa/gei/nti/initializer/upload/v2";
    debugger;
    try {
        let promises = [];
        debugger
        paramsHeader = data.inputs.input.Header;
        let requestPermissions = data.inputs.input.Body;    

        let options = {
            'method': 'POST',
            'url': UrlLoadFile,
            headers: paramsHeader,
            proxy: sUrlProxy,
            formData: {
                'file': {
                  'value': requestPermissions.file,
                  'options': {
                    'filename': requestPermissions.fileName,
                    'contentType': null
                  }
                }
              }
        };

       debugger
        let client = ssl ? https : http;
        request(options, function (error, response) {
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
    }catch (e) {
        var errorResponse = {
            "error": -500,
            "message": "Error al ejecutar la peticion. Exception: "+e.message,
            "status": -500
        };
        /*LOG.error(['[', actionName, '] Error: ', e.message]);
        
        var error = RESPONSE(null, errorResponse, 500 );*/
        console.log(errorResponse);
        //callback(error);
    }
}




invoke(null, null, input.requestBizagi, null, null, null);
exports.invoke = invoke;