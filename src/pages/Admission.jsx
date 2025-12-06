import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./Admission.css";

export function Admission() {
  return (
    <>
      <Header />
      <main>
        <section className="admission-section">
          <div className="admission-container hero-slide overlay">
            <div className="admission-content fade-up">
              <h1>
                Trinity Admission<span style={{ color: "red" }}>.</span>
              </h1>
              <p>
                We invite aspiring students to join our programs and build a
                strong academic and professional future with us. Admissions are
                open for undergraduate and postgraduate programs across multiple
                disciplines.
              </p>
            </div>
          </div>
          <div className="eligibility-criteria-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>Eligibility Criteria</h2>.
            </div>
            <div className="eligibility-criteria">
              <ul>
                <li>
                  <strong>BCA</strong> - 0+2 (any stream) from a recognized
                  board.
                </li>
                <li>
                  <strong>B.Sc. Library Science </strong>- 10+2 (any stream).
                </li>
                <li>
                  <strong>MCA </strong>- Bachelor's degree with Mathematics at
                  10+2 or graduation level.
                </li>
                <li>
                  <strong>MBA</strong> - Bachelor's degree in any discipline.
                </li>
              </ul>
            </div>
          </div>

          <div className="admission-process-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>Admission Process</h2>
            </div>
            <div className="admission-process">
              <p>
                <span className="with-check">&#10003;</span>Fill the online
                application form.
              </p>
              <p>
                {" "}
                <span className="with-check">&#10003;</span>Upload required
                documents.
              </p>
              <p>
                {" "}
                <span className="with-check">&#10003;</span>Attend counseling /
                interview (if applicable).
              </p>
              <p>
                {" "}
                <span className="with-check">&#10003;</span>Receive admission
                confirmation.
              </p>
              <p>
                {" "}
                <span className="with-check">&#10003;</span>Pay enrollment fees
                to secure your seat.
              </p>
            </div>
          </div>

          <div className="documents-required-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>Documents Required</h2>
            </div>

            <div className="documents-required">
              <p>
                <span className="with-check">&#10003;</span>Passport-size
                photographs
              </p>
              <p>
                <span className="with-check">&#10003;</span>10th & 12th
                Marksheet
              </p>
              <p>
                <span className="with-check">&#10003;</span>Graduation Marksheet
                (for PG programs)
              </p>
              <p>
                <span className="with-check">&#10003;</span>ID Proof (Aadhaar /
                Voter ID / Passport)
              </p>
              <p>
                <span className="with-check">&#10003;</span>Transfer Certificate
                / Migration (if required)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
