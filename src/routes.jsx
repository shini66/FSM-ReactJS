import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/UI/Nav.jsx';
import Footer from './components/UI/Footer.jsx';
import LoginPage from './page/login.jsx';
import HomePage from './page/home.jsx';
import AboutPage from './page/about.jsx';
import ContactPage from './page/contact.jsx';

function RoutesApp() {

    return (
        <Router>
            <Nav />
            <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default RoutesApp;