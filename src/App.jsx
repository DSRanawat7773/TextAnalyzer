import { useState } from 'react'

import './App.css'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import About from '../components/About'
import Alert from '../components/Alert'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode ] = useState('light');
  const [alert, setAlert] = useState(null);

 const  showAlert = (message, type) => {
    setAlert({
      msg: message,
      type : type
    })

    setTimeout(() => {
        setAlert(null);
    }, 1500)

  }
  const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = 'gray';
          showAlert("Dark Mode has been enabled", "success")
          document.title = 'TextUtils - Dark Mode'
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = '#e1e6ed';
          showAlert("Light Mode has been enabled", "warning")
          document.title = 'TextUtils - Light Mode'
        }
  }

  return (

    <>
      <Router>
        <Navbar className="my-4 p-6" title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="my-3">
          <Routes>
            <Route path="/about" element={<About className="container my-3 mx-5" mode={mode} />} />
            <Route path="/" element={<Form showAlert={showAlert} className="container mx-3" heading="Enter the text to Analyze:" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>

  )
}



export default App
