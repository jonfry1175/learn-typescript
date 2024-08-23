import React from 'react';
import { useForm } from 'react-hook-form';
import { Todo } from '../types/type';

interface TodoFormProps {
  addTodo: (todo: Omit<Todo, 'id'>) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const { register, handleSubmit, reset } = useForm<Omit<Todo, 'id'>>();

  const onSubmit = (data: Omit<Todo, 'id'>) => {
    addTodo(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          type="text"
          placeholder="New Todo"
          className="form-control"
          {...register('title', { required: true })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
