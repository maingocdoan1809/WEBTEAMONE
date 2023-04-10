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
    try {
      const serverEndpoint = "http://localhost:3000/login";
      const response = await fetch(serverEndpoint, {
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
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      <div className={` ${style.container} row`}>
        <div className={` shadow col-lg-4 col-md-7 col-sm-9  ${style.form}`}>
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

          {err || loginSuccess || (
            <div className="alert alert-warning" role="alert">
              Your username or password is not correct. Try again.
            </div>
          )}
          {!err || (
            <div className="alert alert-danger" role="alert">
              Something went wrong, we'll fix it soon.
            </div>
          )}
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
          <div className={`${style.center}`}>
            <button onClick={onSubmit} className="btn btn-primary w-100">
              Login <i className="fa-thin fa-spinner fa-spin"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
