

  export function RenderList() { 
    
    let todolist=JSON.parse(localStorage.getItem('MyToDoList'))?JSON.parse(localStorage.getItem('MyToDoList')):[];
    let table = document.getElementById("ToDoTable");
    table.innerHTML='<thead> <tr><th class="pr-5" >ToDo </th><th class="pr-5"> Todo On date:</th><th class="pr-5">State :</th><th class="pr-5" >Change state</th><th class="pr-5"> Important</th><th class="pr-5"> Remove</th></tr></thead>';
    todolist.forEach( (todo,index)=>{
    
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5=row.insertCell(4);
    let cell6=row.insertCell(5);
 
    cell1.innerHTML = todo.name;
    cell2.innerHTML=todo.toDoDate;
    if(todo.state=="ToDo"){
        cell3.innerHTML=`<span class="badge badge-warning">${todo.state}</span>`;
        cell4.innerHTML=`<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item" id="D${todo.id}">Done</button></div></div>`;    }
    else {
        cell3.innerHTML=`<span class="badge  badge-success">${todo.state}</span>`;
        cell4.innerHTML=`<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item btn btn-primary "  id="T${todo.id}" >ToDo</button></div></div>`;
    }
  
    cell5.innerHTML=`<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="customSwitch${todo.id}" ><label class="custom-control-label" for="customSwitch${todo.id}"></label></div>`;
    document.getElementById('customSwitch'+todo.id).checked=todo.isImportant;
    cell6.innerHTML=`<button type="button" class="btn btn-danger" id="rm${index}">X</button>`;
   
    });

  }
  