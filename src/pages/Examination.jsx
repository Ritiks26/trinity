import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import "./Examination.css";

export function Examination() {
  return (
    <>
      <title>Examination - Trinity College</title>
      <Header />
      <main>
        <section className="examination-section">
          <Hero
            title={"Examination Cell"}
            content={
              "The Examination Cell ensures transparent and streamlined academic evaluations, following university guidelines. All processes are conducted with maximum accuracy, confidentiality and efficiency."
            }
          />
          <div className="examination-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>Examination Services & Regulations</h2>
            </div>

            <div className="examination-grid">
              <div className="examination-child">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Services Offered</h3>
                </div>
                <div className="examination-child-content">
                  <p>
                    <strong>1. Exam Timetable & Notifications</strong> - Regular
                    updates on upcoming exams, schedules, and important
                    announcements.
                  </p>
                  <p>
                    <strong>2. Student Examination Assistance</strong> -
                    Guidance related to admit cards, seating arrangements,
                    internal marks, and revaluation applications.
                  </p>
                  <p>
                    <strong>3. Result Processing</strong> - Accurate compilation
                    and declaration of results within the stipulated timeline.
                  </p>
                  <p>
                    <strong>4. Coordination With University</strong> - Seamless
                    communication with the affiliating university for external
                    exams and guidelines.
                  </p>
                </div>
              </div>
              <div className="examination-child">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Revaluation & Scrutiny</h3>
                </div>
                <div className="examination-child-content">
                  Students who wish to apply for{" "}
                  <strong>
                    revaluation, photocopy of their answer script,
                  </strong>{" "}
                  or <strong>scrutiny of marks</strong> can access the official
                  application forms provided by the Examination Cell. These
                  services ensure transparency and allow students to verify
                  their examination results in a fair manner. All details
                  regarding deadlines, fees, and instructions will be published
                  on the college notice board and the official website, and
                  students are advised to submit their applications within the
                  prescribed timelines.
                </div>
              </div>
              <div className="examination-child">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Examination Rules & Guidelines</h3>
                </div>
                <div className="examination-child-content">
                  <p>
                    <strong>1.</strong> Students must carry their admit card and
                    valid ID card to the exam hall.
                  </p>
                  <p>
                    <strong>2.</strong> Mobile phones, smartwatches, and
                    electronic gadgets are strictly prohibited.
                  </p>
                  <p>
                    <strong>3.</strong> Students should report at least 15
                    minutes before the scheduled exam time.
                  </p>
                  <p>
                    <strong>4.</strong> Any form of malpractice will lead to
                    disciplinary action as per institutional norms.
                  </p>
                  <p>
                    <strong>5.</strong> Students must follow seating plan and
                    instructions from invigilators.
                  </p>
                </div>
              </div>
              <div className="examination-child">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Important Downloads</h3>
                </div>
                <div className="examination-child-content">
                  <p>
                    <strong>1.</strong> Exam Timetables (Mid-Term &
                    End-Semester). <span>&#8599;</span>
                  </p>
                  <p>
                    <strong>2.</strong> Admit Card Instructions.{" "}
                    <span>&#8599;</span>
                  </p>
                  <p>
                    <strong>3.</strong> Internal Marks Submission Format.{" "}
                    <span>&#8599;</span>
                  </p>
                  <p>
                    <strong>4.</strong> Revaluation & Scrutiny Application Form.{" "}
                    <span>&#8599;</span>
                  </p>
                  <p>
                    <strong>5.</strong> Examination Guidelines Handbook.{" "}
                    <span>&#8599;</span>
                  </p>
                  <p>
                    <strong>6.</strong> Previous Year Question Papers.{" "}
                    <span>&#8599;</span>
                  </p>
                  <p>
                    <strong>7.</strong> Practical Examination Schedules.{" "}
                    <span>&#8599;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
