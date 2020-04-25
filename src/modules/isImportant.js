export function isImportant(){

    let todolist=JSON.parse(localStorage.getItem('MyToDoList')) ? JSON.parse(localStorage.getItem('MyToDoList')):[];
    let todolist_undo= JSON.parse(localStorage.getItem('todolist_undo')) ? JSON.parse(localStorage.getItem('todolist_undo')) : [];
  
    todolist.forEach( (todo)=>{
    
      
      const buttonId='customSwitch'+todo.id;
      const isImportantButton=document.getElementById(buttonId);
      isImportantButton.addEventListener("change",()=>{

        /* save current State to Undo array before Changing */
            todolist_undo.unshift(todolist);
            localStorage.setItem('todolist_undo',JSON.stringify(todolist_undo));

          todo.isImportant=isImportantButton.checked;
          localStorage.setItem('MyToDoList',JSON.stringify(todolist));
          location.reload();

      });
     
  });
  
  }