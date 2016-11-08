/**
 * Created by nethmih on 8/11/16.
 */
(function(window) {

    function toDoModel() {
        this.taskList = [];
        this.TotaltaskId = 0
        numOfTasks = this.TotaltaskId;
    }

    function toDoTask(title) {
        this.title = title;
        this.taskId = numOfTasks++;
    }
 
    toDoModel.prototype.addToDoItem = function (title) {
        let newItem = new toDoTask(title);
        this.taskList.push(newItem);
        
    }

})(window);