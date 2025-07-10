import './App.css';
import Alert from './Components/alert';
import Navbar from './Components/Navbar';

import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  }

  return (
  <>
   <Navbar title="TextUtils" aboutText="about" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
  <div className='container my-3'>
    

  <TextForm showalert={showalert} heading="Enter The Text To Analyze" mode={mode} />

</div>
</>

   
  );
 }

export default App;

