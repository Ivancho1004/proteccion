/**
 * @author Proteecion
 */

 const _ = require('lodash');
 const http = require('http');
 const https = require('https');

 process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
 debugger;
 const input = require('./input');
 var output = {};
debugger;
 function invoke(globals, actionName, data, authenticationType, LOG, callback) {
    debugger;
    try {
        let promises = [];

        let name = "Permissions";
        Permissions = _.find(data.inputs.input.data.config.api, { name: name });
        debugger;
        if (Permissions) {
            let requestPermissions = JSON.stringify(data.inputs.input.data.dataUsoInmediato);
                let responsePermissions = Invoke(requestPermissions, Permissions, name);
                promises.push(responsePermissions);
        }

        Promise.all(promises).then(values => {
            let response = {
                response: values,
            };
        });
    }
    catch (e) {

    }
}

Invoke = (data, Disbursements, name) => {
    return new Promise((resolve) => {
        try {
            const options = {
                hostname: Disbursements.detail.hostname,
                path: Disbursements.detail.path,
                method: Disbursements.detail.method,
                headers: {}
            };

            for (let parametro of Disbursements.header.params) {
                if (parametro.enable) {
                    options.headers[parametro.name] = parametro.value;
                }
            }

            var HTTP = Disbursements.detail.port === 443 ? https : http;
            const req = HTTP.request(options, (response) => {
                let httpStatusCode = response.statusCode;
                let data = '';
                let json = null;

                response.on('data', (out) => {
                    if (Buffer.isBuffer(out)) {
                        data += out
                    }
                    else {
                        json = JSON.parse(out);
                    }
                });

                response.on('end', () => {
                    if (!json) {
                        json = data.toString('utf8');
                        json = JSON.parse(data);
                    }

                    if (httpStatusCode === 200) {
                        resolve({ valido: true, response: json, error: ''});
                    }
                    else {
                        resolve({ valido: false, error: json, response: '' });
                    }
                });

            });

            req.on('error', error => {
                error.name = name;
                resolve({ valido: false, error: error, response: '', name: name });
            });

            req.write(data);
            req.end();
        }
        catch (e) {
            e.name = name;
            resolve({ valido: false, error: e, response: '', name: name });
        }
    });
};


invoke(null, null, input.requestBizagi, null, null, null);
exports.invoke = invoke;