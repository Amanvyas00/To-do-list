import React, { useState } from 'react'
import './App.css';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList';

const App = () => {
  const[listTodo, SetListTodo] = useState([]);

  let addList = (inputText) => {
    if(inputText!=='')
    SetListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=> {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    SetListTodo([...newListTodo])
  }
  return (
    <div>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList}/>
          <h1 className="app-heading">TODO</h1>
          <hr />
          {listTodo.map((listItem,i) => {
            return(
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            )
          } )}
        </div>
      </div>
    </div>
  )
}

export default App
