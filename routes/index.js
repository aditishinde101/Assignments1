var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22').then(resp => {
  res.render('home',resp.data)
  }).catch((error) => {
      console.error(error);
    });
});

module.exports = router;
