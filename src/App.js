import React from 'react'
import './App.css';
import Contacts from './components/Contacts';
import SideNavPage from './components/BootsrtapNab'
import Home from './Home';


function App() {
  return (
    <>
    <Home/>
    <SideNavPage/>
    <div className="row">
      <div className="col-md-8 offset-md-2">
      </div>
    </div>

    </>
  );
}

export default App;