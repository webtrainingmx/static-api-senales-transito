const express = require('express');
const morgan = require('morgan');
const app = express();

const signalsRouter_v1 = require('./routers/signals_v1.router');
const questionsRouter_v1 = require('./routers/questions_v1.router');


function allowCrossDomain(req, res, next) {
  // Instead of "*" you could only specific origins
  res.header('Access-Control-Allow-Origin', '*');
  // Supported HTTP verbs
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use(morgan('dev'));

app.use(allowCrossDomain);

app.use('/traffic-signals/v1/signals', signalsRouter_v1);
app.use('/traffic-signals/v1/questions', questionsRouter_v1);

app.listen(4000);
console.log('Listening on port 4000');