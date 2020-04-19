
    
   function RenderList() { 
    
    let todolist=[];
    let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
    let table = document.getElementById("ToDoTable");

    if(lastList!=null)todolist=lastList;
    todolist.forEach( (todo)=>{

    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5=row.insertCell(4);7

    
    cell1.innerHTML = todo.name;
    cell2.innerHTML=todo.toDoDate;
    cell3.innerHTML=`<span class="badge badge-warning">${todo.state}</span>`;
    cell4.innerHTML='<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item btn btn-primary " >ToDo</button><button class="dropdown-item">Done</button></div></div>';
    cell5.innerHTML=`<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="customSwitch${todo.id}" ><label class="custom-control-label" for="customSwitch${todo.id}"></label></div>`;

    });

  }
  RenderList();