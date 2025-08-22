import { Routes, Route, Link } from "react-router-dom";
import TodoDetail from "./pages/TodoDetail";
import TodoLIst from "./pages/TodoLIst";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <Link to="/" className="text-blue-600 hover:underline">All Todos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoLIst />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}