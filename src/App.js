import './App.css';
import Alert from './Components/alert';
import Navbar from './Components/Navbar';
import About from './Components/about';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyclasses = () => {
    document.body.classList.remove('bg-light', 'bg-dark', 'bg-success', 'bg-danger', 'bg-primary', 'bg-warning');
  };

  const toggleMode = (cls) => {
    removeBodyclasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="about" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
