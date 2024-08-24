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

const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error(`API Error: ${error.response?.status} - ${error.message}`);
    throw new Error(error.response?.data || 'Error connecting to API');
  } else {
    console.error('Unexpected Error:', error);
    throw new Error('An unexpected error occurred');
  }
};

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await apiClient.get('/todos');
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  try {
    const response = await apiClient.post('/todos', todo);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const response = await apiClient.put(`/todos/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const deleteTodo = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/todos/${id}`);
  } catch (error) {
    handleApiError(error);
  }
};
