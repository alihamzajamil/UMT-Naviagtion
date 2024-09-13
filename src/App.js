import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

import { Route , Routes } from 'react-router-dom';
import FeaturesSection from './pages/Features';
import Contact from './pages/Contact';
import Error from './Components/Error';
import Home from './pages/Home';
import About from './pages/About';
import UmtNavigator from './pages/UmtNavigator';
import AdminPanel from './Components/admin/AdminPanel';

function App() {
  return (
    <>
    <Header />

    <div className="mt-40"> 
    <Routes>
 
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/features" element={<FeaturesSection />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/navigator" element={<UmtNavigator/>} />
    <Route path="*" element={<Error />} />
    <Route path="/admin" element={<AdminPanel />} />

    


  </Routes>
  
</div>
  

    <Footer />
    
    </>
  );
}

export default App;
