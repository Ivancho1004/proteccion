/**
 * @author Proteecion
 */

 const _ = require('lodash');
 const http = require('http');
 let https = require('follow-redirects').https;
 var qs = require('querystring');

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
            options = {
                'method': 'POST',
                'hostname': 'login.windows.net',
                'path': '/ProteccionD2Pruebas.onmicrosoft.com/oauth2/token?api-version=1.6',
                'headers': {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Cookie': 'fpc=AsLy70aeOqtGq1ExiyOk3tSCpOXrAwAAAAKHi9kOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
                },
                'maxRedirects': 20
              };
            debugger
            let client = ssl ? https : http;
            const req = client.request(options, (response) => {
                debugger
                let httpStatusCode = response.statusCode;
                //console.log('response: '+JSON.parse(response));
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
            var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"grant_type\"\r\n\r\nclient_credentials\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"resource\"\r\n\r\nhttps://graph.windows.net\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"client_secret\"\r\n\r\n+XmTz8af691MlLC8PGcbGu48OSa/AfbCTtMl5svFeYM=\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"client_id\"\r\n\r\n28965eac-289f-42ac-b61e-688f48f3f015\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--";
            req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

            
            req.write(postData);
            //req.write(data);
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