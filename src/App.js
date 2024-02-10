import { useState } from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap-icons/font/bootstrap-icons.css'
import RoutesMap from "./routes";
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Header from './components/layout/Header';


function App() {
  const linksList=[
    "/",
    "/home",
    "/login",
    "/about",
    "/products"

  ]
  const [totalQty, setTotalQty] = useState(0)

  const manageTotalQty =()=>{
    setTotalQty(totalQty+1)
  }

  return (
    <BrowserRouter>
         <NavBar links={linksList} totalQty={totalQty} />
          <RoutesMap  manageTotalQty={manageTotalQty}/>
    </BrowserRouter>
    
  );
}

export default App;



/// state management
//// useContext
/// redux  redux/toolkit