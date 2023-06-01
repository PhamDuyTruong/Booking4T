import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Button, Container, Row } from "reactstrap";
import { NavLink, Link, useHistory } from "react-router-dom";
import logo from "../../Assets/images/4T-logo.png";
const nav_links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/hotels",
    display: "Hotels",
  },
  {
    path: "/news",
    display: "News",
  },
 
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useHistory();

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();

    return window.removeEventListener("scroll", stickyHeaderFunction);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className="nav__item" key={index}>
                        <NavLink
                          to={item.path}
                          className={(isActive) =>
                            isActive ? "active__link" : ""
                          }
                        >
                          {item.display}
                        </NavLink>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/signin">Login</Link>
                </Button>

                <Button className="btn primary__btn">
                  <Link to="/signup">Register</Link>
                </Button>
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
