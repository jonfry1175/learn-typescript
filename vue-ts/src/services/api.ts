import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = async (): Promise<Todo[]> => {
  const response = await apiClient.get('/todos');
  return response.data;
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  const response = await apiClient.post('/todos', todo);
  return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const response = await apiClient.put(`/todos/${todo.id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await apiClient.delete(`/todos/${id}`);
};
