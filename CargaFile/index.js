var request = require('request');
var fs = require('fs');
debugger
var nuevo = fs.createReadStream('/C:/Users/Ivan Cubides/Downloads/PDF Clave.pdf');
debugger
var options = {
  'method': 'POST',
  'url': 'https://apiprivada-qa.proteccion.com.co/sgi-qa/gei/nti/initializer/upload/v2',
  'headers': {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL3Byb3RlY2Npb24ub25taWNyb3NvZnQuY29tL2dlaV9wcnVlYmFzIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZjQ3ZGNjZTQtMDJlNy00ZDg4LWE2NTktYTJkMGJiZTE3MGU3LyIsImlhdCI6MTY0NzM1MDE2MCwibmJmIjoxNjQ3MzUwMTYwLCJleHAiOjE2NDczNTQwNjAsImFpbyI6IkUyWUFndVc2bjdZOEVKT1hUbit1K1piUC93TUEiLCJhcHBpZCI6IjQzNjM3NDg2LWNkNjQtNDQ1YS1hZDlhLTQ2MjA2MTE3NWQwNCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2Y0N2RjY2U0LTAyZTctNGQ4OC1hNjU5LWEyZDBiYmUxNzBlNy8iLCJvaWQiOiJiNzQ2YmE4NC0yNTQ0LTQ4ZjctODdjNy0yNmIzOGZkNzQ5OTYiLCJyaCI6IjAuQVFvQTVNeDk5T2NDaUUybVdhTFF1LUZ3NTN4anc5RWVXUWRGZzAxamMtS1RsYzRLQUFBLiIsInJvbGVzIjpbImVudmlhcl9ub3RpZmljYWNpb25lcyJdLCJzdWIiOiJiNzQ2YmE4NC0yNTQ0LTQ4ZjctODdjNy0yNmIzOGZkNzQ5OTYiLCJ0aWQiOiJmNDdkY2NlNC0wMmU3LTRkODgtYTY1OS1hMmQwYmJlMTcwZTciLCJ1dGkiOiItcXdZSWFjWDZrMkhKZWRIUTV5TUFBIiwidmVyIjoiMS4wIn0.iTsDwQWTwjI-x4aYU4egvkZEAxyrXVzgGbO1XJnR3SURCZtiw6Vtrooj1mxr8AXzmz8-oT-MxRL5WbSmrMDKgfjmPwwNT2tRGtZzyipC9_ffYgewy_uoTbrMuPuuslBx-r-GDperg04B19i3B0ZCBomxWIJbQrXvbyH2cCY2w-Q6Yxvolb_tMmpjn_Y63T-VjxCdCmkpoaXcQrRfokV6uwIk_PaPFoaMF_85U4EzaIB5QCwLX0FGfs7lE142VUIDlT8zDiaJm3xZUtvAOQGB27iQHjPjkLEeERxuv8woLbjkl-P7CqZ70c0Tj6xfnqtA3s594EiVJti7yD0hIs_6Tg',
    'x-api-key': 'YZNtu2sJDf6A2nbwmL0A34AbZyKVm8NQ1CnWz9Tb',
    'ClienteDNI': 'CC-1234'
  },
  formData: {
    'file': {
      'value': fs.createReadStream('/C:/Users/icubides/Downloads/PDF Clave (6).pdf'),
      'options': {
        'filename': '/C:/Users/icubides/Downloads/PDF Clave (6).pdf',
        'contentType': null
      }
    }
  }
};
debugger
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
