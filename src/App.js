import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
    <nav><Navbar> </Navbar></nav> 
    <Routes>      
    <Route exact path="/" element={<Home></Home>}> </Route>
    <Route path="/contact" element={<Contact></Contact>}> </Route>
    <Route path="/services" element={<Services></Services>}> </Route>
    </Routes>
    <nav><Footer></Footer></nav>    
    </BrowserRouter>

  );
}

export default App;
