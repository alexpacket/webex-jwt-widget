var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET widget window content. */
router.get('/', function(req, res, next) {
  
  const payload = {
    "sub": encodeURIComponent(req.query.user),
    "name": req.query.user,
    "iss": process.env.WEBEX_TEAMS_ISSUER_ID,
    "exp": Math.round(Date.now()/1000) + 3600
  }

  const decoded = Buffer.from(process.env.WEBEX_TEAMS_ISSUER_SECRET, 'base64');

  const jwtToken = jwt.sign(payload, decoded, { algorithm: 'HS256', noTimestamp: true });

  res.render('widget_jwt', { guestToken: jwtToken, toPersonEmail: process.env.TO_PERSON_EMAIL } );
})

module.exports = router;
