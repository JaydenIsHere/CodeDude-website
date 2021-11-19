import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Feature from './pages/Feature';
import Docs from './pages/Docs';




function App() {
  return (
    
     <Router>
<Navbar/>
   
<Routes>

<Route path="/"element={<Home />} />
<Route path="/feature"element={<Feature />} />
<Route path="/docs"element={<Docs/>} />

</Routes>

<Footer/>
     </Router>

  );
}

export default App;
