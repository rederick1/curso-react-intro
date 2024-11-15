import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import './navbar';
import { Navbar } from './navbar';
import { Ingreso } from './ingreso';
import { MyAccount } from './MyAccount';

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/ingreso" element={<Ingreso/>}/>
        <Route path='/MyAccount' element={<MyAccount/>}/>
        </Routes>
      </Router>
    </div>
    
    /*
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/ingreso" element={<Ingreso/>}/>
        <Route path='/MyAccount' element={<MyAccount/>}/>
        </Routes>
      </Router>
      
    </div>*/
  );
}

export default App;
