require("dotenv").config();

var express = require('express');
var router = express.Router();
var request = require('request');
const cors = require('cors');
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

// const db = require("../db/database.js");

// ROOT_URL_FIRST = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';
ROOT_URL_FIRST = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';

// ROOT_URL_SECOND = '&interval=1min&apikey=';
ROOT_URL_SECOND = '&apikey=';


API_KEY = process.env.API_KEY;

/* Home page */
router.get('/', function(req, res) {
    const data = {
        title: "Bull Stocks",
        info: "erf"
    };

    res.json(data);
});

/* GET IBM - International Buisiness Machines Corp */
router.get("/IBM", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}IBM.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET SAAB AB */
router.get("/SAAB", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}SDV.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET BMW - Bayerische Motoren Werke AG */
router.get("/BMW", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}BMW.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET Telia Company AB */
router.get("/TLS", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}TLS.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET Swedbank AB */
router.get("/SWDB", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}FRYA.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET Axfood AB */
router.get("/AXF", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}AXL1.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET AstraZeneca PLC */
router.get("/ZEGA", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}ZEGA.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET Avanza Bank Holding AB */
router.get("/AVZA", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}1JJA.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET Scandic Hotels Group AB */
router.get("/SCA", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}10H.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});

/* GET Cloetta AB */
router.get("/CLO", cors(), async (req, res) => {
    const request = await fetch(
      `${ROOT_URL_FIRST}0CL.FRK${ROOT_URL_SECOND}${API_KEY}`
    );
    const data = await request.json();
    // console.log(data);
    res.json(data);
});


module.exports = router;
