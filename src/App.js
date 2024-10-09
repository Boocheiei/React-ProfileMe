import Nav from './components/nav/nav';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Topnav from './components/topnav/topnav';
import Apptwo from './components/main/Apptwo';
import React from 'react';

function App() {
  return (
    <div>
        <Topnav/>
        <Nav/>
        <Main/>
        <Apptwo/>
        <Footer/>
    </div>
  );
}

export default App;
