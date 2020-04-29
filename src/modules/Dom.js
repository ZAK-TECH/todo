import {getStorageData,updateTodo,RemoveTodo} from './storage';
import {update_undo_array} from './UndoRedo';
import moment from "moment";


export const RenderTodoList=()=>{
    const todolist=getStorageData("current_todolist");
    document.getElementById("ToDoTable").innerHTML='<thead> <tr><th class="pr-5" >ToDo </th><th class="pr-5"> Todo On date:</th><th class="pr-5">State :</th><th class="pr-5" >Change state</th><th class="pr-5"> Important</th><th class="pr-5"> Remove</th></tr></thead>';
    todolist.forEach(todo => {
        RenderTodo(todo);      
    });
}

export const WatchTodoDate=()=>{
    
    setInterval(function(){
        const todolist=getStorageData("current_todolist");
        todolist.forEach(todo=>{
            if((todo.toDoDate==moment().format("D/M/YYYY, h:mm a")) && (todo.state=='ToDo')){
                alert("the Task"+todo.name+" is planned to be done NOW !");
            };
        });

    }, 10000);
}

 /* Add Todo to DOM */
export const RenderTodo=(todo)=>{

   
    let table = document.getElementById("ToDoTable");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5=row.insertCell(4);
    let cell6=row.insertCell(5);
   /*  console.log(moment().format("D/M/YYYY, h:mm a"));
    console.log(todo.toDoDate); */

    cell1.innerHTML = todo.name;
    cell2.innerHTML=todo.toDoDate;
    
    if(todo.state=="ToDo")cell3.innerHTML=`<span class="badge badge-warning ">${todo.state}</span>`;
    else cell3.innerHTML=`<span class="badge  badge-success">${todo.state}</span>`;
        
    cell4.innerHTML=`<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item"  id="T${todo.id}" >ToDo</button><button class="dropdown-item" id="D${todo.id}">Done</button></div></div>`;
    cell5.innerHTML=`<div class="custom-control custom-switch ${todo.isImportant == true ? 'bg-warning' : ''}"><input type="checkbox" class="custom-control-input" id="customSwitch${todo.id}" ><label class="custom-control-label" for="customSwitch${todo.id}"></label></div>`;
    document.getElementById('customSwitch'+todo.id).checked=todo.isImportant;
    cell6.innerHTML=`<button type="button" class="btn btn-danger" id="rm${todo.id}">X</button>`;

    /* change importance */
    const buttonId='customSwitch'+todo.id;
    const isImportantButton=document.getElementById(buttonId);
    isImportantButton.addEventListener("change",()=>{

        /* save current State to Undo array before Changing */
        update_undo_array();

          todo.isImportant=isImportantButton.checked;
          updateTodo(todo);
          RenderTodoList();
 
      });

    /* change todo State EventListener */
        const todoId='T'+todo.id;
        const setToDoButton=document.getElementById(todoId);
        setToDoButton.addEventListener("click",()=>{
  
          /* save current State to Undo array before Changing */
          update_undo_array();

            todo.state="ToDo";
            cell3.innerHTML=`<span class="badge badge-warning ">${todo.state}</span>`;
            updateTodo(todo);
    
        });
          const doneId='D'+todo.id;
          const setDoneButton=document.getElementById(doneId);
          setDoneButton.addEventListener("click",()=>{
              
              /* save current State to Undo array before Changing */
              update_undo_array(); 
            
              todo.state="Done";
              cell3.innerHTML=`<span class="badge  badge-success">${todo.state}</span>`;
              updateTodo(todo);
   
          }); 
          
     /* Remove button EventListener  */
      const RmbuttonId='rm'+todo.id;
      const removeButton=document.getElementById(RmbuttonId);
      removeButton.addEventListener("click",()=>{

        /* save current todolist to Undo array before Removing */
        update_undo_array();

          RemoveTodo(todo.id);
          RenderTodoList();
          update_undo_array();
      });
    
    } 