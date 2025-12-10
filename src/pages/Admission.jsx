import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import "./Admission.css";

export function Admission() {
  return (
    <>
      <Header />
      <main>
        <section className="admission-section">
          <Hero
            title={"Trinity Admission"}
            content={
              "We invite aspiring students to join our programs and build a strong academic and professional future with us. Admissions are open for undergraduate and postgraduate programs across multiple disciplines."
            }
          />
          <div className="admission-info-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>Admission Details</h2>
            </div>
            <div className="admission-details-container">
              <div className="admission-details-child">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Eligibility Criteria</h3>
                </div>
                <div className="eligibility-criteria">
                  <p>
                    {" "}
                    <strong>BCA</strong> – 10+2 (any stream) from a recognized
                    board.
                  </p>
                  <p>
                    <strong>B.Sc. Library Science</strong> – 10+2 (any stream).
                  </p>
                  <p>
                    <strong>MCA</strong> – Bachelor's degree with Mathematics at
                    10+2 or graduation level.
                  </p>
                  <p>
                    <strong>MBA</strong> – Bachelor's degree in any discipline.
                  </p>
                </div>
              </div>
              <div className="admission-details-child">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Admission Process</h3>
                </div>
                <div className="admission-process">
                  <p>
                    <span>&#10003;</span> Fill the online application form.
                  </p>
                  <p>
                    <span>&#10003;</span> Upload required documents.
                  </p>
                  <p>
                    <span>&#10003;</span> Attend counseling / interview (if
                    applicable).
                  </p>
                  <p>
                    <span>&#10003;</span> Receive admission confirmation.
                  </p>
                  <p>
                    <span>&#10003;</span> Pay enrollment fees to secure your
                    seat.
                  </p>
                </div>
              </div>
              <div className="admission-details-child">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Documents Required</h3>
                </div>
                <div className="documents-required">
                  <p>
                    <span>&#10003;</span> Passport-size photographs
                  </p>
                  <p>
                    <span>&#10003;</span> 10th & 12th Marksheet
                  </p>
                  <p>
                    <span>&#10003;</span> Graduation Marksheet (for PG programs)
                  </p>
                  <p>
                    <span>&#10003;</span> ID Proof (Aadhaar / Voter ID /
                    Passport)
                  </p>
                  <p>
                    <span>&#10003;</span> Transfer Certificate / Migration (if
                    required)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
