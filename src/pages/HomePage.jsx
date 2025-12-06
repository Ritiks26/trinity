import { Link } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { loadCards } from "../data/loadData";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <title>Home - Trinity College</title>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-slide overlay">
            <div className="hero-content">
              <h1 className="fade-up">
                Empowering Students Through Quality Education, Innovation &
                Integrity<span style={{ color: "red" }}>.</span>
              </h1>
              <p className="fade-up">
                Trinity is committed to shaping future-ready professionals in
                Computer Science, Management, and Library Sciences through
                excellence in teaching and modern learning infrastructure.
              </p>
              <div className="navigate fade-up">
                <Link to={"/programs"} className="link">
                  Explore Programs
                </Link>
                <Link to={""} className="link">
                  Examinations
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose fade-up">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Why Choose Trinity</h2>
          </div>

          <div className="cards-container">
            {loadCards.map((card) => {
              return (
                <div key={card.type} className="wct-card">
                  <div className="wct-icon"></div>
                  <div className="wct-title">{card.type}</div>
                  <p>{card.content}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="programs-section">
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2 className="fade-up">Featured Programs</h2>
            </div>
            <div className="programs-container">
              <div className="programs-card fade-up">
                <p>
                  BCA – Build skills in <strong>computing, </strong>
                  <strong>programming,</strong> and
                  <strong> software fundamentals.</strong>
                </p>
              </div>
              <div className="programs-card fade-up">
                <p>
                  MCA – Advance your expertise in
                  <strong> software development,</strong>
                  <strong> AI, </strong>and
                  <strong> enterprise systems.</strong>
                </p>
              </div>
              <div className="programs-card fade-up">
                <p>
                  B.Sc. Library Science – Learn
                  <strong> modern information management,</strong> and
                  <strong> digital archiving.</strong>
                </p>
              </div>
              <div className="programs-card fade-up">
                <p>
                  MBA – Become a <strong>leader in business,</strong>
                  <strong> analytics,</strong> and
                  <strong> strategic management.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights-section fade-up">
          <div className="bg-white">
            <div className="carousel-lists">
              <ul className="carousel-track">
                <li>Tech-enabled classNamerooms</li>
                <li>Library & digital learning resources</li>
                <li>Well-equipped computer laboratories</li>
                <li>Seminar halls & training rooms</li>
                <li>Student community spaces</li>
                <li>Collaborative learning & activity spaces</li>
                <li>Tech-enabled classNamerooms</li>
                <li>Library & digital learning resources</li>
                <li>Well-equipped computer laboratories</li>
                <li>Seminar halls & training rooms</li>
                <li>Student community spaces</li>
                <li>Collaborative learning & activity spaces</li>
              </ul>
            </div>
          </div>

          <div className="extra-info">
            <div className="image-container">
              <p>
                A welcoming campus that inspires students to dream and achieve.
              </p>
            </div>
            <div className="image-container">
              <p>
                Building confident graduates prepared for a successful future
                ahead.
              </p>
            </div>
            <div className="image-container">
              <p>
                A learning environment where creativity and curiosity grow
                together.
              </p>
            </div>
            <div className="image-container">
              <p>
                We help students discover their goals and chase excellence
                proudly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
