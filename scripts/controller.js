/**
 * Created by nethmih on 8/11/16.
 */
(function (window) {

    function toDoController (model,view) {
        this.model = model;
        this.view = view;
    }

    toDoController.prototype.addToDoItem = function (title) {
        console.log('controller hits');
        model.addToDoItem(title);
    }





}(window));
