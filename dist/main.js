let n=0;
        
   function addToTable() { 
        
            n++;    
          let table = document.getElementById("ToDoTable");
          let todo=document.getElementById("toDoInput").value;
          let toDoDate=document.getElementById("toDoDate").value;
          let row = table.insertRow(0);
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);
          let cell4 = row.insertCell(3);
          let cell5=row.insertCell(4);
         
          
         
          cell1.innerHTML = todo;
          if(toDoDate=="") cell2.innerHTML='Not mentionned'; else cell2.innerHTML=toDoDate;
          cell3.innerHTML='<span class="badge badge-warning">ToDO</span>';
          cell4.innerHTML='<div class="dropdown"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">State</button><div class="dropdown-menu"><button class="dropdown-item btn btn-primary " >ToDo</button><button class="dropdown-item">Done</button></div></div>';
          cell5.innerHTML=`<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input" id="customSwitch${n}" ><label class="custom-control-label" for="customSwitch${n}"></label></div>`;
          document.getElementById("ToDoForm").reset();
         
        }