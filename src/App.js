import './App.css';
import Alert from './Components/alert';
import Navbar from './Components/Navbar';
import About from './Components/about';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
  const removeBodyclasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyclasses()
    document.body.classList.add('bg-'+ cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark mode';
      // NOTE: Ye intervals remove kar do warna bar bar title change hota rahe ga
      // setInterval(() => { document.title = 'TextUtils is Amazing Mode'; }, 2000);
      // setInterval(() => { document.title = 'Install TextUtils Now'; }, 1500);
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
            <Route exact path="/about" element={<About  mode={mode}/>} />
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Try TextUtils - Word Counter, Character Counter,Remove Extra Spaces" mode={mode} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
