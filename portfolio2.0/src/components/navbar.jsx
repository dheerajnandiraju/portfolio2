import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav
        style={{
          padding: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="navbar navbar-expand-lg"
      >
        <div>
          <a
            style={{ fontSize: "2rem" }}
            className="navbar-brand text-white"
            href="#"
          >
            Dheeraj Nandiraju
          </a>
        </div>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              style={{ borderRadius: "0.5rem" }}
              className="navbar-toggler-icon bg-light "
            >
              <a
                class="btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              ></a>
              <div
                style={{ backgroundColor: "#242B30" }}
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a
                        style={{ fontSize: "3rem" }}
                        className="nav-link text-white m-3"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "3rem" }}
                        className="nav-link text-white m-3"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "3rem" }}
                        className="nav-link text-white m-3"
                        href="#"
                      >
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "3rem" }}
                        className="nav-link text-white m-3"
                        href="#"
                      >
                        Certificate
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "3rem" }}
                        className="nav-link text-white m-3"
                        href="#"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        style={{ fontSize: "3rem" }}
                        className="nav-link text-white m-3"
                        href="#"
                      >
                        contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Certificate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
