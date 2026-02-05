import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return ( 
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
    <Header />

    <BrowserRouter> 
      <Navigation />
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>

    <Footer />
    </div>
  );
}

