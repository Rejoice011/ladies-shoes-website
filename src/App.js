
import './App.css';
import Home from './Route/Home';
import Project from './Route/Project'; 
import About from './Route/About';
import Contact from './Route/Contact';
import Booking from './Route/Booking';
import {Routes,Route} from 'react-router-dom'






function App() {
  return (
    
     <>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/project' element={<Project />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/booking' element={<Booking />} />
      </Routes>
     </>
    
  );
}

export default App;
