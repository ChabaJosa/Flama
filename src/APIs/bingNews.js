import axios from "axios";
import unirest from "unirest";

export default axios.create({
  baseURL: "https://bing-news-search1.p.rapidapi.com/news",
  headers: {
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "52b7d4bfb3msh102ba6e3848c00ep1bcadajsnfdf060a68e26",
    "x-bingapis-sdk": "true",
    useQueryString: true,
  },
  query: {
    "freshness": "Day",
	"textFormat": "Raw",
	"safeSearch": "Off",
	"q": "Candles"
  }
  
});

// var unirest = require("unirest");

// var req = unirest("GET", "https://bing-news-search1.p.rapidapi.com/news/search");

// req.query({
// 	"freshness": "Day",
// 	"textFormat": "Raw",
// 	"safeSearch": "Off",
// 	"q": "Candles"
// });

// req.headers({
// 	"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
// 	"x-rapidapi-key": "52b7d4bfb3msh102ba6e3848c00ep1bcadajsnfdf060a68e26",
// 	"x-bingapis-sdk": "true",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });