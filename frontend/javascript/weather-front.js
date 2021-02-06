fetch("http://localhost:3000/weather")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log(error);
	});