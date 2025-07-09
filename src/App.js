import { Routes, Route, Navigate } from 'react-router-dom';
import Gallery from './components/gallary';
import Header from './components/Nav';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/contact';
import Reservation from './components/reservation';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import ScrollToTop
import ReservationList from './components/ReservationList';
import MenuUploadForm from './components/MenuUploadForm';
// import ContactMessages from './components/ContactMessageslist';
function App() {
  return (
    <div className="App">
      <ScrollToTop /> {/* ✅ Scrolls to top on route change */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/ReservationList" element={<ReservationList />} />
        <Route path="/MenuUploadForm" element={<MenuUploadForm />} />

        {/* <Route path="/ContactMessageslist" element={<ContactMessages />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
        
      
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
