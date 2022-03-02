/**
 * @author Proteecion
 */

 const _ = require('lodash');
 const http = require('http');
 let https = require('follow-redirects').https;
 var qs = require('querystring');
 var request = require('request');
 process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
 debugger;
 const input = require('./input');
 var output = {};
debugger;
 function invoke(globals, actionName, data, authenticationType, LOG, callback) {
        
    debugger;
    try {
        let promises = [];

        let name = "Token_Lagash";
        configApi = _.find(data.inputs.input.data.config.api, { name: name });
        debugger;
        if (configApi) {
            debugger
            let requestPermissions = JSON.stringify(data.inputs.input.data.formData);
            requestPermissions = data.inputs.input.data.token_microsoftonline;
            requestPermissions = data.inputs.input.data.formData;
                let responsePermissions = Invoke(requestPermissions
                    , configApi.detail.hostname
                    , configApi.detail.path
                    , configApi.detail.port
                    , configApi.detail.method
                    , configApi.header.params
                    , configApi.name
                    , configApi.detail.ssl);
                promises.push(responsePermissions);
        }

        Promise.all(promises).then(values => {
            let response = {
                response: values,
            };
            debugger
            console.log('response: '+JSON.stringify(response));
        });
    }
    catch (e) {

    }
}

Invoke = (data, hostname, path, port, method, paramsHeader, name, ssl) => {
    return new Promise((resolve) => {
        try {
            let options = {
                'method': method,
                'url': 'https://'+hostname+path,
                headers: {},
                form: data
            };
            debugger
            for (let parametro of paramsHeader) {
                if (parametro.enable) {
                    options.headers[parametro.name] = parametro.value;
                }
            }
           
            debugger
            let client = ssl ? https : http;
            request(options, function (error, response) {
                debugger
                let httpStatusCode = response.statusCode;
              if (error) throw new Error(error);
              //console.log(response.body);
              var json = JSON.parse(response.body);
              if (httpStatusCode === 200) {
                resolve({ valido: true, response: json, error: '', name: name });
            }
            else {
                json.name = name;
                resolve({ valido: false, error: json, response: '', name: name });
            }
            });

            
        }
        catch (e) {
            debugger
            e.name = name;
            resolve({ valido: false, error: e, response: '', name: name });
        }
    });
};


invoke(null, null, input.requestBizagi, null, null, null);
exports.invoke = invoke;