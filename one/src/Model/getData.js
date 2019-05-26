import Task from './task'
import liskTask from './liskTask'
import TaskData from './taskData'

let listOfTask = new liskTask();
//bắt cầu
for (let task of TaskData) {
    let id = task.id;
    let name = task.name;
    let memterID = task.memterID;
    let priority = task.priority;
    let labelArr = task.labelArr;
    let status = task.status;
    let description = task.description;

    let newtask = new Task(id, name, memterID, priority, labelArr, status, description)
    listOfTask.addTask(newtask)
}
export default listOfTask;
