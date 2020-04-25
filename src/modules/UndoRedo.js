export function Undo(){
    const undo_btn=document.getElementById("undo_btn");
    undo_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let MyToDoList=JSON.parse(localStorage.getItem('MyToDoList'))?JSON.parse(localStorage.getItem('MyToDoList')):[];
    let todolist_undo = JSON.parse(localStorage.getItem('todolist_undo')) ? JSON.parse(localStorage.getItem('todolist_undo')) : []
    let todolist_redo = JSON.parse(localStorage.getItem('todolist_redo')) ? JSON.parse(localStorage.getItem('todolist_redo')) : []
    if(todolist_undo && todolist_undo.length>0){
      
      //save current todolist to redo array before going back
      todolist_redo.unshift(MyToDoList);
      localStorage.setItem('todolist_redo', JSON.stringify(todolist_redo));

      //update  current Todolist   with the first  ellement of undo Array
      localStorage.setItem('MyToDoList', JSON.stringify(todolist_undo[0]));

      //remove the first element of (todolist_undo)
      todolist_undo.splice(0, 1)
      localStorage.setItem('todolist_undo', JSON.stringify(todolist_undo))
      location.reload();
      }
    else{
      alert('there is no other step backward')
    }
    });
}
       
  export function Redo(){
    const redo_btn=document.getElementById("redo_btn");
    redo_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let MyToDoList=JSON.parse(localStorage.getItem('MyToDoList'))?JSON.parse(localStorage.getItem('MyToDoList')):[];
    let todolist_undo = JSON.parse(localStorage.getItem('todolist_undo')) ? JSON.parse(localStorage.getItem('todolist_undo')) : []
    let todolist_redo = JSON.parse(localStorage.getItem('todolist_redo')) ? JSON.parse(localStorage.getItem('todolist_redo')) : []
    
    if(todolist_redo && todolist_redo.length>0){

      //save current todolist to Undo array before going forward
      todolist_undo.unshift(MyToDoList);
      localStorage.setItem('todolist_undo', JSON.stringify(todolist_undo));

      //update  current Todolist   with the first  ellement of Redo Array
      localStorage.setItem('MyToDoList', JSON.stringify(todolist_redo[0]));

      //remove the first element of (todolist_redo)
      todolist_redo.splice(0, 1)
      localStorage.setItem('todolist_redo', JSON.stringify(todolist_redo))
      location.reload();
      }
    else{
      alert('There is no other step forward')
      
    }
});
  }