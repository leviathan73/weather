const express = require("express")
const axios = require("axios")
const cors = require("cors")
const log4js = require("log4js");
const logger = log4js.getLogger();

const moment = require('moment')

logger.level = "all"
logger.debug(process.env)
const server = express()
const port = 3000 || process.env.npm_package_config_port
const delay = 0 //|| process.env.npm_package_config_delay

server.use(cors({
	origin: "*",
	optionsSuccessStatus: 200
}))

server.get('/weather', function (req, res) {
	console.log("start processing fetch .....");
	const options = {
		method: 'GET',
		url: 'https://community-open-weather-map.p.rapidapi.com/weather',
		params: {
			q: req.query.q,
			lat: '0',
			lon: '0',
			// callback: 'test',
			id: '2172797',
			lang: 'null',
			units: 'metric',
			mode: 'xml, html'
		},
		headers: {
			'x-rapidapi-key': '60569ea851mshd6fd42aa4b40958p15bc52jsn8c8786a941e3',
			'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
		}
	};
	var start = moment();
	axios.request(options)
		.then(function (response) {
			setTimeout(() => {
				res.send({
					temperature: response.data.main.temp + "C",
					wilgotnosc: response.data.main.humidity + "%",
					zachod: moment(response.data.sys.sunrise).format("HH:MM"),
					wschod: moment(response.data.sys.sunset).format("HH:MM"),
					wiatr: response.data.wind.speed + "km/h",
					kierunekwiatru: response.data.wind.deg,
					ikony: response.data.weather[0].main.toLowerCase()
				});
			}, delay);
			logger.info(`Weather api response time ${moment().diff(start, 'ms')} ms. `);
			logger.info(response.data);
		})
		.catch(function (error) {
			logger.error(error);
		});

});

server.listen(port, () => {
	logger.info(`Example app listening at http://localhost:${port}`);
});