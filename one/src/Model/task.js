export default class Task {
    constructor(id, name,memterID, priority, labelArr, status, description){
        this.id=id;
        this.name=name;
        this.memterID=memterID;
        this.priority=priority;
        this.labelArr=labelArr;
        this.status=status;
        this.description=description;
    }
}