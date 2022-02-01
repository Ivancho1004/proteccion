/*var bizagiUtil = require('bz-util');
var REQUIRED = bizagiUtil.REQUIRED;
var ERROR = bizagiUtil.error;
var RESPONSE = bizagiUtil.getResponse;*/
var Client = require('ssh2-sftp-client');
const input = require('./input.js');

debugger;
/**
 * @author Bizagi
 */ 

 function formatError(err) {
    var errorMessage = '';
    var errorObject = {
        error: '',
        message: '',
        status: 0
    };

    if (err.code === 3) {
        errorMessage = 'Please check that you have write permissions on the specified path to be able to upload the file.';
        errorObject.error = errorMessage;
        errorObject.message = errorMessage;
        errorObject.status = 400;
    }
    else if (err.code === 2) {
        errorMessage = 'Please check that the path exists.';
        errorObject.error = errorMessage;
        errorObject.message = errorMessage;
        errorObject.status = 400;
    }
    else if (err.code === 4) {
        errorMessage = 'Please check that the specified path isn\'t a folder.';
        errorObject.error = errorMessage;
        errorObject.message = errorMessage;
        errorObject.status = 400;
    }
    else if (err.level === 'client-timeout' || err.code === 'ECONNREFUSED' || err.code === 'ENOTFOUND') {
        errorMessage = 'Please check that the host address and port you\'re trying to connect to are correct';
        errorObject.error = errorMessage;
        errorObject.message = errorMessage;
        errorObject.status = 400;
    }
    else if (err.level === 'client-authentication') {
        errorMessage = 'Wrong username and/or password.';
        errorObject.error = errorMessage;
        errorObject.message = errorMessage;
        errorObject.status = 401;
    }
    else {
        errorMessage = 'Unexpected error occurred. ' + err.stack;
        errorObject.error = errorMessage;
        errorObject.message = errorMessage;
        errorObject.status = 400;
    }

    return errorObject;
}

function invoke(globals, actionName, data, authenticationType, LOG, callback) {
    const HOST = globals.authdata.HOST;
    const PORT = globals.authdata.PORT;
    const USERNAME = globals.authdata.USERNAME;
    const PASSWORD = globals.authdata.PASSWORD;

    const remote_path = data.inputs.input.remote_path;
    const file_data = data.inputs.input.data;
    
    //Required parameters validation
    /*var validationError = bizagiUtil.validator.requiredParameters({
        'remote_path': remote_path,
        'data': file_data,
        'HOST': HOST,
        'PORT': PORT,
        'USERNAME': USERNAME,
        'PASSWORD': PASSWORD,
        'callback': callback
    });

    if (validationError) {
        LOG.error(['[SFTP.', actionName, '] Error: ', validationError]);
        callback(validationError);
        return;
    }*/

    var sftp = new Client();

    sftp.on('error', function (err) {
        LOG.error(['[SFTP.', actionName, '] Error: ', err]);
    });

    sftp.on('close', function (err) {
        LOG.debug(['[SFTP.', actionName, '] ClosedWithError: ', err]);
    });
    

    var fileData = new Buffer(file_data, 'base64');
    var options = {
        flags: 'w',  // w - write and a - append
        encoding: 'utf8', // use null for binary files
        mode: 0o666, // mode to use for created file (rwx)
        autoClose: true // automatically close the write stream when finished
    }
    sftp.connect({
            host: HOST,
            port: PORT,
            username: USERNAME,
            password: PASSWORD
        })
        .then(function () {
            return sftp.put(fileData, remote_path, options);
        })
        .then(function (data) {
            var output = {
                success: true
            };
            var success = RESPONSE(output, null, 200);
            callback(success);
            sftp.end();
            return;
        }).catch(function (err) {
            LOG.error(['[SFTP.', actionName, '] Error: ', err]);
            var errorObject = formatError(err);
            var error = RESPONSE(null, errorObject, errorObject.status, errorObject.message);
            callback(error);
            sftp.end();
            return;
        });
}


invoke(input.globals, null, input.requestBizagi, null, null, null);
exports.invoke = invoke;