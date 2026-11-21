import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const App = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAppTodo = () => {
    const todoText = text.trim();
    if (todoText) {
      dispatch(addTodo(todoText));
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAppTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
