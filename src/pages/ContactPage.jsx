import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import "./ContactPage.css";

export function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="contact-container">
          <Hero
            title={"Contact Us"}
            content={
              "We’re here to assist you with queries regarding admissions, programs, and campus information. Reach out to Trinity College using any of the contact points below."
            }
          />

          <div className="contact-details-container">
            <h1>Get In Touch</h1>
            <h4>
              Email, call, or visit to learn how Trinity can solve your problem
            </h4>
            <div className="contact-details-child">
              <div className="email">trinitycollegepatna@gmail.com</div>
              <div className="contact-no">+91 87973 03476</div>
              <div className="address">
                <div className="location">Trinity College, </div>Shushila Sadan,
                Road No. 10, Sanjay Gandhi Nagar
              </div>
              <div className="office-timing">
                <h2>Office Hours</h2>
                <p>Monday – Saturday, 9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
