export function isImportant(){

    let todolist=[];
    let lastList=JSON.parse(localStorage.getItem('MyToDoList'));
    if(lastList!=null)todolist=lastList;
  
    todolist.forEach( (todo)=>{
      
      const buttonId='customSwitch'+todo.id;
      const isImportantButton=document.getElementById(buttonId);
      isImportantButton.addEventListener("change",()=>{
          todo.isImportant=isImportantButton.checked;
          console.log(isImportantButton.checked);
          localStorage.setItem('MyToDoList',JSON.stringify(todolist));

      });
     
  });
  
  }