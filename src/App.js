import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import TodosPage from "./pages/TodosPage";
import './App.scss';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/todo-app" element={<ProjectsPage />} />
        <Route path="todo-app/todos" element={<TodosPage />} />
      </Routes>
    </Router>

  );
}

export default App;
