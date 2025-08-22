import { useState, useEffect } from "react";
import { getTodos, saveTodos } from "../utils/localstorage";
import TodoItem from "../components/TodoItem";
import TodoForm from "../component/TodoFrom";

export default function TodoList() {
  const [todos, setTodos] = useState(()=>getTodos());
  const [search, setSearch] = useState("");

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const updateTodo = (id, updated) =>
    setTodos(todos.map((t) => (t.id === id ? updated : t)));

  const deleteTodo = (id) =>
    setTodos(todos.filter((t) => t.id !== id));

  const filtered = todos.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          console.log(e.target.value)
        }}
        className="mt-4 w-full p-2 border rounded-md"
      />

      <div className="mt-6 space-y-3">
        {filtered.length === 0 && <p>No todos yet.</p>}
        {filtered.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}