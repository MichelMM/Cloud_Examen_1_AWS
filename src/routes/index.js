const router = require('express').Router();
const path = require('path')
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey:process.env.API_KEY,
  }),
  serviceUrl: process.env.URL,
});


router.route('/autor').get((req, res) => {
  alumno = `MMM`
  servicio = "ECS en AWS"
  res.json({
    alumno,
    servicio
  });
})




module.exports = router;