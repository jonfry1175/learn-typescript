// import React from 'react';
// import { Todo } from '../types/type';

// interface TodoListProps {
//   todos: Todo[];
//   toggleComplete: (id: number) => void;
//   deleteTodo: (id: number) => void;
// }

// const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
//   return (
//     <ul className="list-group">
//       {todos.map(todo => (
//         <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
//           <span
//             style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//             onClick={() => toggleComplete(todo.id)}
//           >
//             {todo.title}
//           </span>
//           <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;


import React from 'react';
import { Todo } from '../types/type';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
          <span
            style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer' // Menambahkan kursor pointer
            }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.title}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
