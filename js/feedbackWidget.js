class FeedbackWidget {
    constructor(elementId) {

        this._elementId = elementId;
    }

    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }

    set elementId(value) {
        this._elementId = value;
    }


    show(message, type) {

        let element = document.getElementById(this._elementId);
        element.style.display = "block";

        element.textContent = message;

        if (type === 'history') {
            element.className = "alert alert-info";
            // this return is needed to not execute the log function
            // and not add anything to the history
            return;
        }
        if (type === 'success') {
            element.className = "alert alert-success";
        }
        if (type === 'error') {
            element.className = "alert alert-danger";
        }
        this.log({message, type});
    }

    hide() {
        let element = document.getElementById(this._elementId);
        element.style.display = "none";
    }

    log(message) {
        let storage = JSON.parse(localStorage.getItem('feedback_widget')) || [];

        storage.unshift(message)
        if (storage.length > 10) {
            storage.pop();
        }
        localStorage.setItem('feedback_widget', JSON.stringify(storage));
    }

    removeLog() {
        localStorage.clear();
    }

    history() {
        let messageArray = JSON.parse(localStorage.getItem('feedback_widget')) || []
        let string;

        messageArray.forEach((message) => {
            let item = '<type: ' + message.type + '> - <' + message.message + '>   \n'
            string += item;
            console.log(item)
        })
        this.show(string, 'history');
    }
}






// const success = new FeedbackWidget("feedback-success");
// success.show("Gaat goed", 'success');
//
// const error = new FeedbackWidget("feedback-danger");
// error.show("Gaat fout", 'error');

// log
// const log = new FeedbackWidget("feedback-log");
// log.log({message: 'Bijna klaar, tijd voor koffie',
//     type: 'success'});