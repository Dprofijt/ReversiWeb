Game.Data = (function(){
    console.log('hallo, vanuit module Data')

    configMap = {
        apiKey: "<apiKey>",
        mock: [{
            url: api/Spel/Beurt,
            data:0
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

    privateInit = function(){
        console.log('hallo, vanuit privateInit')
    }

    return{
        init: privateInit
    }

}