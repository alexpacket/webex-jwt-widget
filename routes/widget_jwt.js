var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios');

/* GET widget window content. */
router.get('/', function(req, res, next) {
  console.log(req.query.user);
  const payload = {
    "sub": encodeURIComponent(req.query.user),
    "name": req.query.user,
    "iss": 'Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi8wNWMxMWNlZS05YzhiLTQ5ZmQtOGRiNy01ZGYwMjM5MTQyZTk',
    "exp": Math.round(Date.now()/1000) + 3600
  }

  const decoded = Buffer.from('gDh973cmYxAGvqnN6GiX70TnGJtklE6lRkrRJaOJw2U=', 'base64');

  const jwtToken = jwt.sign(payload, decoded, { algorithm: 'HS256', noTimestamp: true });

  console.log('jwtToken: '+jwtToken);

  axios.post('https://api.ciscospark.com/v1/jwt/login', '',
      { headers: { 'Authorization': 'Bearer ' + jwtToken } })
      .then(response => {
        guestToken = response.data;
        res.send(guestToken);
      })
      .catch(err => {
        switch (err.code) {
            case 'ENOTFOUND':
                console.log("could not contact the Webex API");
                break
            default:
                console.log("error accessing /jwt/login, err: " + err.message);
                console.log(jwtToken);
                if (err.response && (err.response.status >= 400) && (err.response.status < 500)) {
                    console.log(`Invalid Guest token: ${err.response.data.message}`);
                }    
                break;
        }
        res.send('error')
    })   
});

module.exports = router;
