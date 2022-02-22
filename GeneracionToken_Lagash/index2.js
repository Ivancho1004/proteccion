var request = require('request');
debugger
var options = {
  'method': 'POST',
  'url': 'https://login.windows.net/ProteccionD2Pruebas.onmicrosoft.com//oauth2/token?api-version=1.6',
  'headers': {
    //'Cookie': 'fpc=AsLy70aeOqtGq1ExiyOk3tSCpOXrAgAAALjWjNkOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
  },
  formData: {
    'grant_type': 'client_credentials',
    'resource': 'https://graph.windows.net',
    'client_secret': '+XmTz8af691MlLC8PGcbGu48OSa/AfbCTtMl5svFeYM=',
    'client_id': '28965eac-289f-42ac-b61e-688f48f3f015'
  }
};
debugger
request(options, function (error, response) {
  debugger
  if (error) throw new Error(error);
  console.log(response.body);
});
