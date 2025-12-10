import { Link } from "react-router";
import "./Hero.css";

export function Hero({ title, content, showLinks = false }) {
  return (
    <section className="hero-section">
      <div className="hero-slide overlay">
        <div className="hero-content">
          <h1 className="fade-up">
            {title}
            <span style={{ color: "red" }}>.</span>
          </h1>
          <p className="fade-up">{content}</p>
          {showLinks && (
            <div className="navigate fade-up">
              <Link to={"/programs"} className="link">
                Explore Programs
              </Link>
              <Link to={"/examination"} className="link">
                Examinations
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
