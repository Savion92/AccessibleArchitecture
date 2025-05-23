import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/Home/HomePage";
import Contact from "./pages/Contact";
import Checklists from "./pages/Lists/Checklists";
import Login from "./pages/Auth/Login";
import Navigation from "./components/Navigation";
import SignUp from "./pages/Auth/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checklists" element={<Checklists />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
      <Toaster />
    </Container>
  );
}

export default App;
