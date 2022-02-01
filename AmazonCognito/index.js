/**
 * @author Proteecion
 */
debugger
 const _ = require('lodash');
 const http = require('http');
 const https = require('https');
 var qs = require('querystring');

 //process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
 debugger;
 const input = require('./input');
const { devNull } = require('os');
 var output = {};
debugger;
 function invoke(globals, actionName, data, authenticationType, LOG, callback) {
        
    debugger;
    try {
        let promises = [];
        let name = "amazoncognito";
        configApi = _.find(data.inputs.input.data.config.api, { name: name });
        debugger;
        if (configApi) {
            debugger
            let requestPermissions = data.inputs.input.data.amazoncognito;
            
            debugger
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
                hostname: hostname,
                path: path,
                method: method,
                port: port,
                headers: {},
                'maxRedirects': 20
            };
            debugger
            for (let parametro of paramsHeader) {
                if (parametro.enable) {
                    options.headers[parametro.name] = parametro.value;
                }
            }
    
            let client = ssl ? https : http;
            const req = client.request(options, (response) => {
                debugger
                let httpStatusCode = response.statusCode;
                response.on('data', (out) => {
                    let json = null;
                    if (Buffer.isBuffer(out)) {
                        json = out.toString('utf8');
                        json = JSON.parse(json);
                    }
                    else {
                        json = JSON.parse(out);

                    }
                    if (httpStatusCode === 200) {
                        resolve({ valido: true, response: json, error: '', name: name });
                    }
                    else {
                        json.name = name;
                        resolve({ valido: false, error: json, response: '', name: name });
                    }

                });
            });

            req.on('error', error => {
                debugger
                console.log('error'+error);
                error.name = name;
                resolve({ valido: false, error: error, response: '', name: name });
            });
            debugger
            req.write(qs.stringify(data));
            req.end();
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