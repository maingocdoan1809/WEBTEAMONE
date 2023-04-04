import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import style from "./Main.module.css";
function Main() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className={`${style.main} container-fluid`}>
          <div className="row"></div>
        </div>
      </div>
    </>
  );
}

export default Main;
