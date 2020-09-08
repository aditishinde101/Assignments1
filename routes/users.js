var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22').then(resp => {
    // res.write("<h1 style='color:red;'>"+resp.data.name+"</h1>");
    // res.end();
   res.render('home',resp.data)
  }).catch((error) => {
      console.error(error);
    });
});

module.exports = router;
