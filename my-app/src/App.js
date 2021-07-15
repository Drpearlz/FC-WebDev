import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Foot';

function App() {
  return ( 
     <Navbar />,
     <Header />,
     <Footer />,
     <div className = "App" >
    <h1>This is my first React App from Focus College</h1>
    </div>
    
  );
}

export default App;