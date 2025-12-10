import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import GovernanceImage from "../assets/governance.png";

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
      />{" "}
      <div className="affiliation-container fade-up">
        <h2>Affiliation & Standards</h2>
        <div className="affiliation-grid-content">
          <div className="affiliation-child">
            <img src={GovernanceImage} alt="Degree Validity" />
            <div className="affiliation-content">
              <h3>Degree Validity</h3>
              <p>
                Valid for jobs, competitive exams, and global higher studies.
              </p>
            </div>
          </div>

          <div className="affiliation-child">
            <img src={GovernanceImage} alt="Student Benefits" />
            <div className="affiliation-content">
              <h3>Student Benefits</h3>
              <p>University events, research & exam support.</p>
            </div>
          </div>

          <div className="affiliation-child">
            <img src={GovernanceImage} alt="Legal Compliance" />
            <div className="affiliation-content">
              <h3>Legal Compliance</h3>
              <p>Fully UGC & government-approved standards.</p>
            </div>
          </div>

          <div className="affiliation-child">
            <img src={GovernanceImage} alt="Governance" />
            <div className="affiliation-content">
              <h3>Governance & Quality Assurance</h3>
              <p>Regular updates with strict academic standards.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="affiliated-programs-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Affiliated Programs</h2>
        </div>
        <div className="affiliated-programs-grid">
          <div className="affiliated-programs-child">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3>Science & Technology</h3>
            </div>
            <div className="affiliated-courses">
              <p>
                <span className="with-check">&#10003;</span>B.Sc. Computer
                Science
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.C.A. – Computer
                Applications
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.Sc. Information
                Technology
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.Sc. Mathematics
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.Sc. Physics
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.Sc. Chemistry
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.Sc. Biotechnology
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.Sc. Microbiology
              </p>
            </div>
          </div>
          <div className="affiliated-programs-child">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3>Commerce & Management</h3>
            </div>
            <div className="affiliated-courses">
              <p>
                <span className="with-check">&#10003;</span>B.Com (General)
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.Com (Hons.) –
                Accounting & Finance
              </p>
              <p>
                <span className="with-check">&#10003;</span>BBA – Business
                Administration
              </p>
              <p>
                <span className="with-check">&#10003;</span>BMS – Management
                Studies
              </p>
              <p>
                <span className="with-check">&#10003;</span>BFM – Financial
                Markets
              </p>
            </div>
          </div>
          <div className="affiliated-programs-child">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3>Arts & Humanities</h3>
            </div>
            <div className="affiliated-courses">
              <p>
                <span className="with-check">&#10003;</span>B.A. English
                Literature
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.A. Hindi
                Literature
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.A. Psychology
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.A. Sociology
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.A. Political
                Science
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.A. History
              </p>
              <p>
                <span className="with-check">&#10003;</span>B.A. Economics
              </p>
            </div>
          </div>
          <div className="affiliated-programs-child">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3>Content Coming Soon</h3>
            </div>
            <div className="affiliated-courses">
              <p>
                <span className="with-check">&#10003;</span>Content Under
                Preparation
              </p>
              <p>
                <span className="with-check">&#10003;</span>Content Under
                Preparation
              </p>
              <p>
                <span className="with-check">&#10003;</span>Content Under
                Preparation
              </p>
              <p>
                <span className="with-check">&#10003;</span>Content Under
                Preparation
              </p>
              <p>
                <span className="with-check">&#10003;</span>Content Under
                Preparation
              </p>
              <p>
                <span className="with-check">&#10003;</span>Content Under
                Preparation
              </p>
              <p>
                <span className="with-check">&#10003;</span>Content Under
                Preparation
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
