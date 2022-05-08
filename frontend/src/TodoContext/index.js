import React, { useState, useEffect } from 'react';
import consumer from '../consumer';
const TodoContext = React.createContext();

function TodoProvider(props) {

  const [todos, saveTodos] = useState([]);

  useEffect(() => {
    consumer.findAllTodo()
      .then(response => response.json())
      .then(data => saveTodos(data))
  }, [todos]);


  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);


  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const Todo = {
      name: text,
      completed: false,
    };
    consumer.saveNewTodo(Todo)
      .then(response => console.log(response))
  }

  const completeTodo = (text, id) => {
    const completeTodo = {
      id: id,
      name: text,
      completed: true,
    };

    consumer.updateTodo(completeTodo)
      .then(response => console.log(response))
  }

  const deleteTodo = (id) => {
    consumer.deleteTodo(id).then(response => console.log(response))
  };


  return (
    <TodoContext.Provider value={{
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
