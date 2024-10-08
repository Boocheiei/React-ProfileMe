import logo from './logo.svg';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Topnav from './components/topnav/topnav';

function App() {
  return (
    <div>
        <Topnav/>
        <Nav/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
