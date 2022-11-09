class ToDo {
    constructor(name, task, date) {
        this.name = name;
        this.task = task;
        this.date = date;
    }


    toString(){
        return this.name + ": " + this.task + ": " + this.date + "\n";
    }
}

export {ToDo};