import {RenderList}from './modules/RenderList';
import {AddTodo} from './modules/Todo';
import {RemoveTodo} from './modules/Todo';
import {changeState} from './modules/changeState';
import {isImportant} from './modules/isImportant';
import {Undo, Redo} from'./modules/UndoRedo';

RenderList();
AddTodo();
RemoveTodo();
changeState();
isImportant();
Undo();
Redo();

