/**
 * Created by nethmih on 8/11/16.
 */
(function(window) {

    function toDoView(model) {
        this.model = model;
    }

    toDoView.prototype.render = function (view) {
        document.getElementById('todoInput').appendChild(view);
    };

    // Export to window
    window.app = window.app || {};
    window.app.toDoView=toDoView;

}(window));

var renderView=function(model,controller) {
    var container = document.getElementById('content');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};
