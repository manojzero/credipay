const express = require('express')
// const dbconfig = require('../app/config/dbconfig.js')
const routes = require('../app/routes/index.js')
// const token = require('../app/services/tokenservice.js')
var bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const app = express();
// const port = process.env.HOST;

const xss = require('xss-clean');
const compression = require('compression');
const nocache = require("nocache");
const jwt = require('jsonwebtoken');
const auth = require('../app/middleware/auth.js')
const errorHandler=require('../app/utils/error-handler.js');
const dotenv = require("dotenv");

// dotenv.config({ path: path.join(__dirname, "../../../.env") });
dotenv.config();
const port = process.env.HOST || 2000;

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// app.use(nocache());
// app.set('etag', false);


app.use(errorHandler);
let allowedOrigins = [
  "http://localhost:2000",
  "http://localhost:4200",
  "http://localhost:4300",
  "http://localhost:4400",
  
];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)

    if (!origin) return callback(null, true);
    console.log("allowedOrigins" + allowedOrigins);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
// parse urlencoded request body
//app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));

// app.get('/protected', token.authenticateToken, (req, res) => {
//   res.json({ message: 'Welcome to the protected route!', user: req.user });
// });
// app.use(cookieParser());
app.get('/protected', auth, (req, res) => {
  res.json({ message: 'Welcome to the protected route!', user: req.user });
});

app.use('/v1', routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


    // "start": "node --env-file .env ./run/server.js"