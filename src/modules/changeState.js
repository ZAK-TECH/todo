
export function changeState(){

    let todolist=JSON.parse(localStorage.getItem('MyToDoList')) ? JSON.parse(localStorage.getItem('MyToDoList')):[];
    let todolist_undo= JSON.parse(localStorage.getItem('todolist_undo')) ? JSON.parse(localStorage.getItem('todolist_undo')) : [];
  
    todolist.forEach( (todo)=>{
      if(todo.state=='Done'){
      const buttonId='T'+todo.id;
      const setToDoButton=document.getElementById(buttonId);
      setToDoButton.addEventListener("click",()=>{

        /* save current State to Undo array before Changing */
        todolist_undo.unshift(todolist);
        localStorage.setItem('todolist_undo',JSON.stringify(todolist_undo));

          todo.state="ToDo";
          localStorage.setItem('MyToDoList',JSON.stringify(todolist));
         // RenderList();
          location.reload();
  
      });
      }else{
      
        const butonId='D'+todo.id;
        const setDoneButton=document.getElementById(butonId);
        setDoneButton.addEventListener("click",()=>{
            
            /* save current State to Undo array before Changing */
        todolist_undo.unshift(todolist);
        localStorage.setItem('todolist_undo',JSON.stringify(todolist_undo));

            todo.state="Done";
            localStorage.setItem('MyToDoList',JSON.stringify(todolist));
             //RenderList();
            location.reload();
    
        }); 
        }
       
  });
  
  }