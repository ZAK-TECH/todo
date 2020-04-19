
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
//console.log(todolist);


function storeToLocalStorage(){
    /* add the todo to local storage */
    let todo=document.getElementById("toDoInput").value;
    let toDoDate=document.getElementById("toDoDate").value;

          if(toDoDate=="")toDoDate="Not mentionned";
          let todoObject=new Todo(todo,toDoDate);
          todolist.push(todoObject);
          //console.warn('added',todolist);
    localStorage.setItem('MyToDoList',JSON.stringify(todolist));
    document.getElementById("ToDoForm").reset();
  
    /* Insert todo in table */
    let table = document.getElementById("ToDoTable");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5=row.insertCell(4);
    if(todoObject.toDoDate=="")todoObject.toDoDate="Not mentionned";
   
    cell1.innerHTML =todoObject.name;
    cell2.innerHTML=todoObject.toDoDate;
    cell3.innerHTML=`<span class="badge badge-warning">${todoObject.state}</span>`;
    cell4.innerHTML=`<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item btn btn-primary "  onclick="setToDo(${todoObject.id})" >ToDo</button><button class="dropdown-item" onclick="setDone(${todoObject.id})">Done</button></div></div>`;
    cell5.innerHTML=`<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="customSwitch${todoObject.id}" ><label class="custom-control-label" for="customSwitch${todoObject.id}"></label></div>`;
    document.getElementById("ToDoForm").reset();

}


