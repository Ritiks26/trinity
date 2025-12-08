import { NavLink, Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import androidMenu from "../../assets/hamburger-menu.svg";
import removeIcon from "../../assets/remove.svg";
import "./Header.css";

export function Header() {
  const [isAndroidMenuOpen, setIsAndroidMenuOpen] = useState(false);

  const toggleAndroidMenu = () => {
    setIsAndroidMenuOpen(!isAndroidMenuOpen);
  };

  const headerRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 595) {
  //       headerRef.current.classList.add("header-text-change");
  //     } else {
  //       headerRef.current.classList.remove("header-text-change");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const heroSection = document.querySelector(".hero-slide");
    const triggerPoint = heroSection ? heroSection.offsetHeight - 50 : 100;

    const handleScroll = () => {
      if (window.scrollY > triggerPoint) {
        headerRef.current.classList.add("header-text-change");
      } else {
        headerRef.current.classList.remove("header-text-change");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef}>
      <div className="left-section">
        <div className="logo-icon">
          <img src="assets/images/logo-t.svg" alt="" />
        </div>
        <Link to={"/"} className="header-location">
          <div className="college-name">Trinity College</div>
          <div className="college-location">Patliputra, Patna</div>
        </Link>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admission"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              admission
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/affiliation"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              affiliation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleAndroidMenu}>
          <img src={androidMenu} alt="" />
        </div>
      </div>
      <div className={`android-menus ${isAndroidMenuOpen ? "visible" : ""}`}>
        <div className="remove-icon" onClick={toggleAndroidMenu}>
          <img src={removeIcon} alt="" />
        </div>
        <ul>
          <li>
            <NavLink onClick={toggleAndroidMenu} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleAndroidMenu} to={"/about-us"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleAndroidMenu} to={"/admission"}>
              Admission
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleAndroidMenu} to={"/affiliation"}>
              Affiliation
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleAndroidMenu} to={"/contact-us"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
