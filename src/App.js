import React from 'react'
import './App.css';
import Contacts from './components/Contacts';
import SideNavBar from './components/SideNavBar'


function App() {
  return (
    <>
    <SideNavBar />
    <div className="row">
      <div className="col-md-8 offset-md-2">
      <Contacts ></Contacts>
      </div>
    </div>

    </>
  );
}

export default App;