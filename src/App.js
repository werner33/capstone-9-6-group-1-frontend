import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
<<<<<<< HEAD
import Forum from './components/Forum';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            {/* <Route Forum /> */}

          </Routes>
        </main>
      </Router>
=======
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Mission from "./Pages/Mission"
import Articles from "./Pages/Articles"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
function App() {
  return (
    <div className="App">
    <Router>
    <NavBar />
    <main>
    <Routes>
    <Route path="/articles" element ={<Articles />} />
    <Route path="/contact" element ={<Contact />} />
    <Route path="/about" element ={<About />} />
    <Route path="/mission" element ={<Mission />} />
    <Route path="/login" element ={<Login />} />
    <Route path="/signup" element ={<SignUp />} />

    </Routes>
    </main>
    </Router>
>>>>>>> 3ade0366b8e5504a3b080895ed9ac41a939825ed
    </div>
  );
}

export default App;
