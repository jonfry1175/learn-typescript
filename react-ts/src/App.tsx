import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types/type';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    try {
      const response = await axios.get<Todo[]>('http://localhost:5000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (todo: Omit<Todo, 'id'>) => {
    try {
      const response = await axios.post<Todo>('http://localhost:5000/todos', todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleComplete = async (id: number) => {
    try {
      const todo = todos.find(t => t.id === id);
      if (todo) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        const response = await axios.put<Todo>(`http://localhost:5000/todos/${id}`, updatedTodo);
        setTodos(todos.map(t => (t.id === id ? response.data : t)));
      }
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      setTodos(todos.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
