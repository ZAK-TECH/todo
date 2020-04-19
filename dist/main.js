
class Todo{

  constructor(name,toDoDate){
    this.id=Date.now();
    this.name=name;
    this.toDoDate=toDoDate;
    this.state='ToDo';
    this.isImportant=false;

  } 
}

let todolist=[];
let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
if(lastList!=null)todolist=lastList;
console.log(todolist);


function storeToLocalStorage(){
  
    let todo=document.getElementById("toDoInput").value;
    let toDoDate=document.getElementById("toDoDate").value;

          if(toDoDate=="")toDoDate="Not mentionned";
          let todoObject=new Todo(todo,toDoDate);
          todolist.push(todoObject);
          //console.warn('added',todolist);
    localStorage.setItem('MyToDoList',JSON.stringify(todolist));
    document.getElementById("ToDoForm").reset();

}


