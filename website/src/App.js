import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import ResumePage from './Components/ResumePage/ResumePage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route element={<HomePage/>} path="/"/>
          <Route element={<ProjectsPage/>} path="/projects"/>
          <Route element={<ResumePage/>} path="/resume"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
