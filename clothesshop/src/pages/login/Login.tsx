import React, { FormEventHandler, useRef, useState } from "react";
import style from "./Login.module.css";

function Login() {
  console.log("Login render");

  const [loginSuccess, setLoginSuccess] = useState(true);
  const [err, setErr] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const checkboxRef = useRef<HTMLInputElement>(null!);

  const onSubmit = async function (evt: React.MouseEvent<HTMLButtonElement>) {
    const response = await fetch("http://localhost:3000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      }),
    });
    const result = await response.json();
    if (result.accept && checkboxRef.current.checked) {
      localStorage.setItem("username", result.username);
    }
    setErr(result.err);
    setLoginSuccess(result.accept);
  };
  return (
    <>
      <div className={` ${style.container}`}>
        <div className={` shadow   ${style.form}`}>
          <div className="mb-3">
            <h2 className={`${style.center}`}>Login</h2>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="username"
              ref={usernameRef}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              ref={passwordRef}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className={`${style.checkbox} mb-3 flex-column`}>
            <div className={`${style.checkbox}`}>
              <input type="checkbox" ref={checkboxRef} id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className={`${style.checkbox} `}>
              <span>Don't have any account? </span>{" "}
              <a href="/WEBTEAMONE/register">Register</a>
            </div>
          </div>
          {err || loginSuccess || (
            <div className="alert alert-warning" role="alert">
              Your username or password is not correct. Try again.
            </div>
          )}
          {!err || (
            <div className="alert alert-danger" role="alert">
              Something's wrong, we're fixing it soon.
            </div>
          )}
          <div className={`${style.center}`}>
            <button onClick={onSubmit} className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
