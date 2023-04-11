import React, { useEffect, useState } from "react";
import SearchInput from "../search/SearchInput";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <nav
        className={`navbar shadow-sm navbar-expand-lg bg-body-tertiary sticky-top ${style.nav}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../../images/logo/log.png"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <ul className="navbar-nav me-5 d-flex justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span style={{ position: "relative" }}>
                    My cart <span className="badge bg-danger">1</span>
                  </span>
                </a>
              </li>
            </ul>
            <SearchInput handle={getProductName} />
            <div className="d-flex justify-content-end ms-2">
              <ButtonToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
function getProductName(promt: string) {
  return new Promise(async (resolve) => {
    const result = await fetch(
      `http://localhost:3000/product?productname=${promt}`
    );
    resolve(
      result.json().then((data) => {
        const productName: string[] = [];
        data.forEach((element: any) => {
          productName.push(element["productName"]);
        });

        return productName;
      })
    );
  });
}

enum ButtonType {
  LOGIN,
  LOGOUT,
}

function ButtonToggle() {
  const [state, setState] = useState(ButtonType.LOGIN);
  useEffect(() => {
    if (localStorage.getItem("username") != null) {
      setState(ButtonType.LOGOUT);
    }
  });
  return (
    <>
      <a
        href={
          state == ButtonType.LOGIN ? "/WEBTEAMONE/login" : "/WEBTEAMONE/logout"
        }
        className="btn btn-primary"
      >
        {state == ButtonType.LOGIN ? "Login" : "Logout"}
      </a>
    </>
  );
}

export default Navbar;
