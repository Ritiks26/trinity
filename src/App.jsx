import { useEffect } from "react";
import { useLocation } from "react-router";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Programs } from "./pages/Programs";
import { Admission } from "./pages/Admission";
import { Affiliation } from "./pages/Affiliation";
import { ContactPage } from "./pages/ContactPage";
import "./App.css";

function App() {
  const location = useLocation().pathname;
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // 20% visible hote hi animation hoga
    );

    elements.forEach((el) => observer.observe(el));
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/affiliation" element={<Affiliation />} />
      </Routes>
    </>
  );
}

export default App;
