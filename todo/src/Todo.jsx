import { useState } from "react";
import "./style.css";

function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;
    
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button type="submit">Submit</button>
      </form>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button 
              className="close" 
              onClick={() => removeTodo(id)}
              aria-label={`Delete todo: ${text}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;