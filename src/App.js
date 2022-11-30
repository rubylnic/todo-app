import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import TodosPage from "./pages/TodosPage";
import './App.scss';
import Nav from "./components/Nav";

function App() {


  return (
    <Router basename='/'>
      <Nav />
      <Routes>
        <Route path="/" exact element={<ProjectsPage />} />
        <Route path="/todos/:id" element={<TodosPage />} />
      </Routes>
    </Router>

  );
}

export default App;
