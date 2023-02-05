import React from "react";
import logo from "../images/Bee.png";
// import logo from "../logo.png";

const Header = ({ setCurrentPage, isDarkMode, setIsDarkMode }) => {
  return (
    <header>

      <nav class="navbar navbar-expand-lg jot">
        <div class="container pex-5">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <img className="you" src={logo} alt="logo" width="150" />
              <span
                class="nav-link active px-5"
                aria-current="page"
                onClick={() => setCurrentPage("home")}
              >
                <button type="button" class="btn btn-info boot">Home</button>
              </span>
              <span
                class="nav-link px-5"
                onClick={() => setCurrentPage("about")}
              >
                <button type="button" class="btn btn-info boot">ABOUT ME</button>
              </span>
              <span
                class="nav-link px-5" 
                onClick={() => setCurrentPage("project")}
              >
               <button type="button" class="btn btn-info boot">PROJECT</button>
              </span>
              <span
                class="nav-link px-5"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <button type="button" class="btn btn-info boot"><i class="bi bi-toggle-on">THEME</i></button>

                
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
