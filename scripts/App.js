/**
 * Created by nethmih on 8/11/16.
 */
(function(window){
    function App(){
        this.store = new window.app.LocalStorage('todoApp');
        this.model = new window.app.toDoModel(this.store);
        this.view  = new window.app.toDoView();
        this.controller = new window.app.toDoController(this.model,this.view);
    }
    var app = new App();
    renderView(app.model,app.controller);
})(window);