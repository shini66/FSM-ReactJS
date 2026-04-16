import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "@/components/UI/Footer.jsx";
import Nav from "@/components/UI/Nav.jsx";
import AboutPage from "@/page/about.jsx";
import ContactPage from "@/page/contact.jsx";
import HomePage from "@/page/home.jsx";
import LoginPage from "@/page/login.jsx";
import PostsPage from "@/page/posts.jsx";

function RoutesApp() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Nav />}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </main>
      {location.pathname !== "/login" && <Footer />}
    </>
  );
}

export default RoutesApp;
