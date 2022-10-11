const Game = (function (url) {
	console.log('hallo, vanuit een module')
	console.log(url);
	let configMap = {
		apiUrl: url
	}

	// Private function init
	const privateInit = function () {
		console.log('Private information!');
		console.log('hallo, vanuit Game')
		console.log(configMap.apiUrl);
	}

	// Waarde/object geretourneerd aan de outer scope
	return {
		init: privateInit
	}
})('/api/url')


Game.Data = (function () {
	console.log('hallo, vanuit module Data')

	let stateMap = {
		environment: 'development'
	}

	let configMap = {
		//d856e701b9205f6d6cac399ac29549b7
		apiKey: "d856e701b9205f6d6cac399ac29549b7",
		mock: [{
			url: 'api/Spel/Beurt',
			main: {
				temp: 200
			}
			,
			data: 0
		}]
	}

	const getMockData = function () {

		//filter mock data, configMap.mock ... oei oei, moeilijk moeilijk :-)
		const mockData = configMap.mock.filter((item) => {
			return item;
		})
		return new Promise((resolve, reject) => {
			resolve(mockData);
		});
	}
	const get = function (url) {
        if (stateMap.environment === 'development') {
            return getMockData(url);
        } else if (stateMap.environment === 'production') {
            return $.get(url)
                .then(r => {
                    return r
                })
                .catch(e => {
                    console.log(e.message);
                });
        } else {
            throw new Error('Environment not set');
        }

	}


	let privateInit = function (environment) {
		if (environment !== "production" || environment !== "development") {
			throw new Error('Environment not set');
		}
		stateMap.environment = environment;
		console.log('hallo, vanuit Data')
	}
	return {
		init: privateInit,
		get
	}
})();

Game.Model = (function () {
	console.log('hallo, vanuit module Model')

	let configMap = {
		Game: null,
	}

	// GetWeatherData (use Game.Data.get)
	// with url: 'http://api.openweathermap.org/data/2.5/weather?q=zwolle&apikey=d856e701b9205f6d6cac399ac29549b7'

	// getWeather function
	const getWeather = function () {
		return Game.Data.get('http://api.openweathermap.org/data/2.5/weather?q=zwolle&apikey=d856e701b9205f6d6cac399ac29549b7')
			.then(r => {
				console.log(r[0].main.temp)
				if (r[0].main.temp) {
					console.log("Temperatuur: " + r[0].main.temp);
					return r[0].main.temp;
				}
			})
			.catch(e => {
				console.error("Er is geen temperatuur gevonden");
				throw new Error('No temperature found');
			});
	}

	let privateInit = function () {
		console.log('hallo, vanuit Model')
	}
	return {
		init: privateInit,
		getWeather
	}
})();

Game.Reversi = (function () {
	console.log('hallo, vanuit module Reversi')

	let configMap = {
		Game: null,
	}
	let privateInit = function () {
		console.log('hallo, vanuit Reversi')
	}

	return {
		init: privateInit
	}
})()
