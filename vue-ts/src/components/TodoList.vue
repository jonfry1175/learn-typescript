<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getTodos, addTodo, updateTodo, deleteTodo, Todo } from '../services/api.ts';

const todos = ref<Todo[]>([]);
const newTodo = ref('');
const errorMessage = ref<string | null>(null);

const fetchTodos = async () => {
  try {
    todos.value = await getTodos();
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to fetch todos';
  }
};

// method trim untuk menghilangkan spasi di depan dan belakang
const createTodo = async () => {
  try {
    if (newTodo.value.trim()) {
      const todo = await addTodo({ title: newTodo.value.trim(), completed: false });
      todos.value.push(todo);
      newTodo.value = '';
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to add todo';
  }
};

const toggleCompletion = async (todo: Todo) => {
  try {
    todo.completed = !todo.completed;
    await updateTodo(todo);
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to update todo';
  }
};

const removeTodo = async (id: number) => {
  try {
    await deleteTodo(id);
    todos.value = todos.value.filter(todo => todo.id !== id);
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to delete todo';
  }
};

onMounted(fetchTodos);
</script>

<template>
  <div class="container mt-5">
    <h1>To-Do List</h1>
    
    <div v-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <form @submit.prevent="createTodo" class="mb-3">
      <div class="input-group">
        <input v-model="newTodo" type="text" class="form-control" placeholder="Add new to-do" />
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>

    <ul class="list-group">
      <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <input type="checkbox" v-model="todo.completed" @change="toggleCompletion(todo)" />
          <span :class="{ 'text-decoration-line-through': todo.completed }" class="ms-2">{{ todo.title }}</span>
        </div>
        <button @click="removeTodo(todo.id)" class="btn btn-danger btn-sm">Delete</button>
      </li>
    </ul>
  </div>
</template>
