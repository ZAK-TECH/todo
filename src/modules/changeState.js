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