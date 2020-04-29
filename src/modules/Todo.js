import moment from "moment";
export default class Todo{
  constructor(name,toDoDate,state='ToDo',isImportant=false){
      this.id=Date.now();
      this.name=name;
      this.toDoDate=toDoDate;
      this.state=state;
      this.isImportant=isImportant;
  
    } 

  }






