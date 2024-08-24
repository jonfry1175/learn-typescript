<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getTodos, addTodo, updateTodo, deleteTodo, Todo } from '../services/api.ts';

const todos = ref<Todo[]>([]);
const newTodo = ref('');

const fetchTodos = async () => {
  todos.value = await getTodos();
};

const createTodo = async () => {
  if (newTodo.value.trim()) {
    const todo = await addTodo({ title: newTodo.value.trim(), completed: false });
    todos.value.push(todo);
    newTodo.value = '';
  }
};

const toggleCompletion = async (todo: Todo) => {
  todo.completed = !todo.completed;
  await updateTodo(todo);
};

const removeTodo = async (id: number) => {
  await deleteTodo(id);
  todos.value = todos.value.filter(todo => todo.id !== id);
};

onMounted(fetchTodos);
</script>

<template>
  <div class="container mt-5">
    <h1>To-Do List</h1>
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
          <span
           :class="{ 'text-decoration-line-through': todo.completed }" class="ms-2"
           >{{ todo.title }}</span>
        </div>
        <button @click="removeTodo(todo.id)" class="btn btn-danger btn-sm">Delete</button>
      </li>
    </ul>
  </div>
</template>
