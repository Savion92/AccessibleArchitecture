import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Checklists from "./pages/Checklists";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";

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
    </Container>
  );
}

export default App;
