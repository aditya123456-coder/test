import { Link } from "react-router-dom";
import { useState } from "react";

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.description);

  const handleSave = () => {
    updateTodo(todo.id, { ...todo, title, description: desc });
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded-md bg-white shadow-sm">
      {isEditing ? (
        <div className="space-y-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 text-white rounded-md mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 bg-gray-400 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <Link to={`/todo/${todo.id}`}>
            <h3 className="text-lg font-semibold">{todo.title}</h3>
          </Link>
          <p className="text-sm text-gray-600">{todo.description}</p>

          <div className="mt-3 space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 bg-red-600 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}