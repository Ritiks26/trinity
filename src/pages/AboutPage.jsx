import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import wavyImageHalf from "../assets/wavy-half.png";
import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      <title>About - Trinity College</title>
      <Header />
      <main>
        <section className="about-section">
          <Hero
            title={"About Us"}
            content={
              "Trinity is a forward-thinking educational institution dedicated                to delivering quality higher education in technology,                management, and information sciences. With a focus on academic                rigor and real-world skills, Trinity nurtures students to excel                in their careers and contribute meaningfully to society."
            }
          />

          <div className="our-vision fade-up">
            <h2>Our Vision</h2>
            <div className="vision-grid-content">
              <div className="wavy">
                <img className="wavy-half-image" src={wavyImageHalf} alt="" />
              </div>
              <div className="vision-child">
                <p>
                  To develop Trinity into a leading institution where academic
                  excellence, modern technology, and ethical values come
                  together to prepare students for real-world challenges. We aim
                  to nurture a community of innovative thinkers, skilled
                  professionals, and responsible leaders who contribute
                  meaningfully to industry and society.
                </p>
              </div>
            </div>
          </div>
          <div className="our-mission fade-up">
            <h2>Our Mission</h2>
            <div className="mission-grid-content">
              <div className="mission-child">
                <img
                  src="data:image/png;base64,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"
                  alt="financial-growth-analysis--v2"
                />
                <h3>Deliver excellence</h3>
                <p>Deliver high-quality, industry-aligned education</p>
              </div>
              <div className="mission-child">
                <img
                  src="data:image/png;base64,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"
                  alt="financial-growth-analysis--v2"
                />
                <h3>Promote innovation</h3>
                <p>Encourage innovation, creativity, and research</p>
              </div>
              <div className="mission-child">
                <img
                  src="data:image/png;base64,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"
                  alt="financial-growth-analysis--v2"
                />
                <h3>Build strong values</h3>
                <p>Build strong ethical and professional values</p>
              </div>
              <div className="mission-child">
                <img
                  src="data:image/png;base64,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"
                  alt="financial-growth-analysis--v2"
                />
                <h3>Empower with skills</h3>
                <p>Empower students with practical skills and knowledge</p>
              </div>
            </div>
          </div>

          <div className="stats-container fade-up">
            <div className="stats-child">
              <h1>95%</h1>
              <p>Placement Rate</p>
            </div>
            <div className="stats-child">
              <h1>30+</h1>
              <p>Experienced Faculty</p>
            </div>
            <div className="stats-child">
              <h1>2000+</h1>
              <p>Successful Alumni</p>
            </div>
            <div className="stats-child">
              <h1>100+</h1>
              <p>Hiring Partners</p>
            </div>
          </div>

          <div className="leadership">
            <h2 className="fade-up">Leadership</h2>
            <div className="leadership-container">
              <div className="leadership-child fade-up">
                <div className="leaders-info">
                  <h3>Dr. S. Bhushan Prasad</h3>
                  <p>Principal</p>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38="
                  alt=""
                />
              </div>
              <div className="leadership-child fade-up">
                <div className="leaders-info">
                  <h3>Dr. J. K. Satyarthi</h3>
                  <p>Chairmain</p>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38="
                  alt=""
                />
              </div>
              <div className="leadership-child fade-up">
                <div className="leaders-info ">
                  <h3>Dr. Navneet Kumar</h3>
                  <p>Director</p>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38="
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="committee-members fade-up">
            <h2>Committee Members</h2>
            <div className="parent-container">
              <div className="members-info">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Heads of Deparments</h3>
                </div>
                <div className="members-container">
                  <div className="members-name-wrapper">
                    <div className="members-name-post">
                      <strong>Ms nikita nandani</strong>
                      <p>HOD, Computer Science</p>
                    </div>

                    <div className="members-name-post">
                      <strong>Mrs Pushplata Singh</strong>
                      <p>HOD, Library Science</p>
                    </div>
                    <div className="members-name-post">
                      <strong>Mrs Sharmila Srivastava</strong>
                      <p>HOD, Management</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="members-info">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3>Administrative Heads</h3>
                </div>
                <div className="members-container">
                  <div className="members-name-wrapper">
                    <div className="members-name-post">
                      <strong>Ms. Kumari Seema</strong>
                      <p>Head, Academic</p>
                    </div>

                    <div className="members-name-post">
                      <strong>Mrs. Rajani Bala</strong>
                      <p>Head, Administration</p>
                    </div>
                    <div className="members-name-post">
                      <strong>Dr. Din Bandhu Singh</strong>
                      <p>Center Head</p>
                    </div>
                    <div className="members-name-post">
                      <strong>Mr. Uday Kumar Verma</strong>
                      <p>Admission Coordinator</p>
                    </div>
                  </div>
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
