import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

import "./Affiliation.css";

export function Affiliation() {
  return (
    <>
      <Header />
      <Hero
        title={"Affiliation"}
        content={
          "Trinity College is affiliated to Patliputra University and adheres strictly to the academic, administrative, and examination regulations prescribed by the university. We follow a transparent and quality-driven system to ensure the highest academic standards."
        }
      />
      <Footer />
    </>
  );
}
