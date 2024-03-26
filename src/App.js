import logo from "./assets/logo.svg";
import "./App.css";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Profile userName={"kumarabhishekbansal"} />}
          />

          <Route
            exact
            path="/projects"
            element={<Projects userName={"kumarabhishekbansal"} />}
          />

          <Route
            path="/projects/:name"
            element={<ProjectDetail userName="kumarabhishekbansal" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
