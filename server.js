var express = require('express'),
  app = express(),
  port = process.env.PORT || 300;

app.listen(port);

console.log('ideas list API server started on: ' + port);
