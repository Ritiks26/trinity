import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import "./Examination.css";

export function Examination() {
  return (
    <>
      <Header />
      <Hero
        title={"Examination Cell"}
        content={
          "The Examination Cell ensures transparent and streamlined academic evaluations, following university guidelines. All processes are conducted with maximum accuracy, confidentiality and efficiency."
        }
      />
      <Footer />
    </>
  );
}
