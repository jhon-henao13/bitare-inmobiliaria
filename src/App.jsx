import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Home from './pages/Home/Home';
import Desarrollos from './pages/Desarrollos/Desarrollos';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-brand-black text-white font-sans overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desarrollos" element={<Desarrollos />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        
        {/* Línea roja inferior fija */}
        <div className="fixed bottom-0 left-0 w-full h-4 bg-brand-red z-50"></div>
      </div>
    </Router>
  );
}

export default App;