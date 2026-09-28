import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-brand-black text-white font-sans overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aquí agregarás las demás rutas después */}
        </Routes>
        <WhatsAppButton />
        
        {/* Línea roja inferior fija que se ve en image_11a8b9.jpg */}
        <div className="fixed bottom-0 left-0 w-full h-4 bg-brand-red z-50"></div>
      </div>
    </Router>
  );
}

export default App;