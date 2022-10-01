const Game = (function(url){
    console.log('hallo, vanuit een module')
    console.log(url);
    let configMap = {
        apiUrl: url
    }

    // Private function init
    const privateInit = function(){
        console.log('Private information!');
        console.log('hallo, vanuit Game')
        console.log(configMap.apiUrl);
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }
})('/api/url')


Game.Data = (function(){
    console.log('hallo, vanuit module Data')

    let configMap = {
        //d856e701b9205f6d6cac399ac29549b7
        apiKey: "d856e701b9205f6d6cac399ac29549b7",
        mock: [{
            //         url: api / Spel / Beurt,
            data: 0
        }]
    }
    const getMockData = function(url){

        //filter mock data, configMap.mock ... oei oei, moeilijk moeilijk :-)
        const mockData = configMap.mock.filter((item) => {
            return item.url === url;
        })
        return new Promise((resolve, reject) => {
            resolve(mockData);
        });
    }

    const get = function(url){
        return $.get(url)
            .then(r => {
                return r
            })
            .catch(e => {
                console.log(e.message);
            });
    }

    let privateInit = function () {
        console.log('hallo, vanuit Data')
    }
    return{
        init: privateInit,
        get
    }
})();

Game.Model = (function(){
    console.log('hallo, vanuit module Model')

    let configMap = {
        Game: null,
    }

    // GetWeatherData (use Game.Data.get)
    // with url: 'http://api.openweathermap.org/data/2.5/weather?q=zwolle&apikey=d856e701b9205f6d6cac399ac29549b7'
    //check if temperature is defined
    let getWeather = function () {
        Game.Data.get().then(
            data => {
                if (!data.main.temp) {
                    console.log("Error")
                }
                else {
                    console.log(data)
                }
            }
        );

    }

    let privateInit = function () {
        console.log('hallo, vanuit Model')
    }
    return{
        init: privateInit,
        getWeather: getWeather
    }
})

Game.Reversi = (function(){
    console.log('hallo, vanuit module Reversi')

    let configMap = {
        Game: null,
    }
    let privateInit = function () {
        console.log('hallo, vanuit Reversi')
    }

    return{
        init: privateInit
    }
})()
