const Game = (function(url){
    console.log('hallo, vanuit een module')
    console.log(url);
    let configMap = {
        apiUrl: url
    }

    // Private function init
    const privateInit = function(){
        console.log('Private information!');
        console.log('hallo, vanuit een module')
        console.log(configMap.apiUrl);
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }
})('/api/url')