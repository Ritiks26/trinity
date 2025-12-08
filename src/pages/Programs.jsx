import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { courses } from "../data/loadData";
import { faculties } from "../data/loadData";
import "./Programs.css";

export function Programs() {
  return (
    <>
      <Header />
      <main>
        <section className="program-section">
          <Hero
            title={"Programs"}
            content={
              "At Trinity, we provide a wide range of academic programs crafted to empower students with strong foundational knowledge and industry-relevant expertise. Each course is structured to promote critical thinking, hands-on learning, and professional growth."
            }
          />
          <div className="programs">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h2>Programs We Offer</h2>
            </div>
          </div>
          <div className="programs-offered-container">
            {courses.map((course) => (
              <div className="programs-offered-child fade-up">
                <div>
                  <h4>{course.name}</h4>
                  <div className="duration">
                    <p>{course.duration}</p>
                  </div>
                  <div className="courses">
                    <p>
                      <span className="with-check">&#10003;</span>{" "}
                      {course.course1}
                    </p>
                    <p>
                      <span className="with-check">&#10003;</span>{" "}
                      {course.course2}
                    </p>
                    <p>
                      <span className="with-check">&#10003;</span>{" "}
                      {course.course3}
                    </p>
                    <p>
                      <span className="with-check">&#10003;</span>{" "}
                      {course.course4}
                    </p>
                    <p>
                      <span className="with-check">&#10003;</span>{" "}
                      {course.course5}
                    </p>
                  </div>
                  <div className="career-paths-container">
                    <h3>Career Paths</h3>
                    <div className="career-paths-child">
                      {course.careerPath1 && (
                        <p>
                          <span className="with-check">&#10003;</span>{" "}
                          {course.careerPath1}
                        </p>
                      )}
                      {course.careerPath2 && (
                        <p>
                          <span className="with-check">&#10003;</span>{" "}
                          {course.careerPath2}
                        </p>
                      )}
                      {course.careerPath3 && (
                        <p>
                          <span className="with-check">&#10003;</span>{" "}
                          {course.careerPath3}
                        </p>
                      )}
                      {course.careerPath4 && (
                        <p>
                          <span className="with-check">&#10003;</span>{" "}
                          {course.careerPath4}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="enroll">
                    <button> Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="faculty-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h2>Faculty Directory</h2>
            </div>
            <div className="faculty-grid">
              {faculties.map((faculty, index) => (
                <div key={index} className="faculty-grid-child">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h3>{faculty.department}</h3>
                  </div>
                  <div className="department-team">
                    {faculty.facultyMembers.map((member, i) => (
                      <p key={i}>
                        <span className="with-check">&#10003;</span> {member}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
