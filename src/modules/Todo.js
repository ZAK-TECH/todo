export default class Todo{
  constructor(name,toDoDate,state='ToDo',isImportant='false'){
      this.id=Date.now();
      this.name=name;
      this.toDoDate=toDoDate;
      this.state=state;
      this.isImportant=isImportant;
  
    } 
}


export function AddTodo(){

const ToDoForm=document.getElementById("ToDoForm");
ToDoForm.addEventListener("submit",(event)=>{
  event.preventDefault();

  /* get last todo list from localstorage before writing to it */

let todolist=[];
let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
if(lastList!=null)todolist=lastList;

/* add  todo to local storage */

let todo=document.getElementById("toDoInput").value;
let toDoDate=document.getElementById("toDoDate").value;

      if(toDoDate=="")toDoDate="Not mentionned";
      let todoObject=new Todo(todo,toDoDate);
      todolist.push(todoObject);
      //console.warn('added',todolist);
localStorage.setItem('MyToDoList',JSON.stringify(todolist));
document.getElementById("ToDoForm").reset();

/* Insert  todo into the  table */
/* let table = document.getElementById("ToDoTable");
let row = table.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let cell4 = row.insertCell(3);
let cell5=row.insertCell(4);

cell1.innerHTML =todoObject.name;
cell2.innerHTML=todoObject.toDoDate;
cell3.innerHTML=`<span class="badge badge-warning">${todoObject.state}</span>`;
cell4.innerHTML=`<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item" id="D${todo.id}">Done</button></div></div>`;    
cell5.innerHTML=`<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="customSwitch${todoObject.id}" ><label class="custom-control-label" for="customSwitch${todoObject.id}"></label></div>`; */

location.reload();

});

} 

export function changeState(){

  let todolist=[];
  let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
  if(lastList!=null)todolist=lastList;

  todolist.forEach( (todo)=>{
    if(todo.state=='Done'){
    const buttonId='T'+todo.id;
    const setToDoButton=document.getElementById(buttonId);
    setToDoButton.addEventListener("click",()=>{
        todo.state="ToDo";
    //    localStorage.removeItem('MyToDoList');
        localStorage.setItem('MyToDoList',JSON.stringify(todolist));
        location.reload();

    });
    }else{
    
      const butonId='D'+todo.id;
      const setDoneButton=document.getElementById(butonId);
      setDoneButton.addEventListener("click",()=>{
          todo.state="Done";
      //    localStorage.removeItem('MyToDoList');
          localStorage.setItem('MyToDoList',JSON.stringify(todolist));
          location.reload();
  
      }); 
      }
     
});

}



