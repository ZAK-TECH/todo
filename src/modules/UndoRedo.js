import {getStorageData,SetStorageData} from './storage';

let todolist_undo = []
let todolist_redo = []
let limit_undo=0;
let limit_redo=0;

export const update_undo_array=()=>{
    limit_undo=0;limit_redo=0;
    let current_todolist=getStorageData("current_todolist")?getStorageData("current_todolist"):[];
    todolist_undo.unshift(current_todolist);
    /* console.log(todolist_undo); */
}

export const update_redo_array=()=>{
    let current_todolist=getStorageData("current_todolist")?getStorageData("current_todolist"):[];
    todolist_redo.unshift(current_todolist);
    /* console.log(todolist_undo);  */
}


export const Undo=()=>{
limit_undo++;
    if(todolist_undo && todolist_undo.length>0 && limit_undo<6){
      
      //save current todolist to redo array before going back
      update_redo_array();

      //update  current Todolist   with the first  ellement of undo Array
      SetStorageData("current_todolist",todolist_undo[0])
    
      //remove the first element of (todolist_undo)
      todolist_undo.splice(0, 1);
      /* console.log("Undo Array :\n"+todolist_undo); */
      }
    else{
      alert('there is no other step backward')
    }
}
       
  export const Redo=()=>{
limit_redo++;
    if(todolist_redo && todolist_redo.length>0 && limit_redo<6){

      //save current todolist to Undo array before going forward
      update_undo_array();

      //update  current Todolist   with the first  ellement of Redo Array
      SetStorageData("current_todolist",todolist_redo[0])

      //remove the first element of (todolist_redo)
      todolist_redo.splice(0, 1);
     /*  console.log("Redo array \n"+todolist_redo); */   
      }
    else{
      alert('There is no other step forward')
      
    }

  }