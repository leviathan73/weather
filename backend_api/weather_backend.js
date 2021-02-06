const express = require("express")
const axios = require("axios")
const cors = require("cors")

const server = express()
const port = 3000


server.use(cors({
	origin: "*",
	optionsSuccessStatus: 200
}))

server.get('/weather', function (req, res) {
	const options = {
		method: 'GET',
		url: 'https://community-open-weather-map.p.rapidapi.com/weather',
		params: {
			q: 'Wroclaw',
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

	axios.request(options).then(function (response) {
		res.send(response.data)
		console.log(response.data);
	}).catch(function (error) {
		console.error(error);
	});

})

server.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})










// test({
// 	"coord": {
// 		"lon": -0.13,
// 		"lat": 51.51
// 	},
// 	"weather": [{
// 		"id": 741,
// 		"main": "Fog",
// 		"description": "fog",
// 		"icon": "50n"
// 	}],
// 	"base": "stations",
// 	"main": {
// 		"temp": 284.04,
// 		"pressure": 1011,
// 		"humidity": 93,
// 		"tempmin": 280.93,
// 		"tempmax": 287.04
// 	},
// 	"visibility": 10000,
// 	"wind": {
// 		"speed": 1.5
// 	},
// 	"clouds": {
// 		"all": 20
// 	},
// 	"dt": 1570234102,
// 	"sys": {
// 		"type": 1,
// 		"id": 1417,
// 		"message": 0.0102,
// 		"country": "GB",
// 		"sunrise": 1570255614,
// 		"sunset": 1570296659
// 	},
// 	"timezone": 3600,
// 	"id": 2643743,
// 	"name": "London",
// 	"cod": 200
// })