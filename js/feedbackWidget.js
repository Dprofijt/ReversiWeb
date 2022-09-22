
class FeedbackWidget{;
    constructor(elementId) {

        this._elementId = elementId;
    }

    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }
    set elementId(value) {
        this._elementId = value;
    }


    show(message, type){

        let element = document.getElementById(this._elementId);
        element.style.display = "block";
        element.textContent = message;

        if(type === 'success'){
            element.style.color = 'green';
        }
        if(type === 'error'){
            element.style.color = 'red';
        }
        this.log(message);
    }
    hide(){
        this._element.removeClass("widget-show")
        this._element.addClass("widget-hidden")
    }

// log in local storage
    log(message){
        // add new massage to storage
        if(!(localStorage.getItem('feedback_widget'))){
            let storage = {
                messages: [message]
            }
            localStorage.setItem('feedback_widget', JSON.stringify(storage));
        } else {
            let storage = JSON.parse(localStorage.getItem('feedback_widget'));
            storage.messages.unshift(message)
            if(storage.messages.length > 10){
                storage.messages.pop();
            }
            localStorage.setItem('feedback_widget', JSON.stringify(storage));
        }
    }
    removeLog(){
        localStorage.removeItem("feedback_widget");
    }

}