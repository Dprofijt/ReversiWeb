Game.Model = (function(){
    console.log('hallo, vanuit module Model')

    configMap = {
        Game: null,
    }

    privateInit = function(){
        console.log('hallo, vanuit privateInit')
    }

    return{
        init: privateInit
    }

}