import { useState } from 'react';
import Todo from './components/Todo';
import './App.css';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
// Import Filter apenas se estiver utilizando
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade do sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "trabalho do quezado",
      category: "estudar",
      isCompleted: false,
    },
    {
      id: 3, 
      text: "atividade de ingles",
      category: "dever",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      {}
      {/* <Filter handleStatusChange={handleStatusChange} handleSort={handleSort} /> */}
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
        ) 
        .map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            completeTodo={completeTodo} 
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
