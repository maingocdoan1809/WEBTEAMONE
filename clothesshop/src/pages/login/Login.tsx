import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import style from "./Login.module.css";
import { redirect, useNavigate } from "react-router-dom";
import { sha256 } from "js-sha256";
function Login() {
  const [loginSuccess, setLoginSuccess] = useState(true);
  const [err, setErr] = useState(false);
  const [emptyfield, setEmtyfield] = useState(false);
  const [isPending, setPending] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    setLoginSuccess(true);
    setErr(false);
    setEmtyfield(false);
  }, [username, password]);
  const navigate = useNavigate();
  const onSubmit = async function (evt: React.MouseEvent<HTMLButtonElement>) {
    setPending(true);
    try {
      if (username == "" || password == "") {
        setEmtyfield(true);
        return;
      }
      setEmtyfield(false);
      const serverEndpoint = "http://localhost:3000/login";
      const response = await fetch(serverEndpoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password: sha256(password),
        }),
      });
      const result = await response.json();
      if (result.accept && checkbox) {
        localStorage.setItem("username", result.user.username);
        localStorage.setItem("fullname", result.user.fullname);
      }
      if (result.accept) {
        navigate("/WEBTEAMONE/");
        return;
      }
      setErr(result.err);
      setLoginSuccess(result.accept);
    } catch (err) {
      setErr(true);
    } finally {
      setPending(false);
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
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
          </div>

          {loginSuccess || (
            <div className="alert alert-warning" role="alert">
              Your username or password is not correct. Try again.
            </div>
          )}
          {!err || (
            <div className="alert alert-danger" role="alert">
              Something went wrong, we'll fix it soon.
            </div>
          )}
          {!emptyfield || (
            <div className="alert alert-danger" role="alert">
              You must input both fields
            </div>
          )}
          <div className={`${style.checkbox} mb-3 flex-column`}>
            <div className={`${style.checkbox}`}>
              <input
                type="checkbox"
                checked={checkbox}
                id="remember"
                onChange={(e) => {
                  setCheckbox(!checkbox);
                }}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className={`${style.checkbox} `}>
              <span>Don't have any account? </span>{" "}
              <a href="/WEBTEAMONE/register">Register</a>
            </div>
          </div>
          <div className={`${style.center}`}>
            <button
              onClick={onSubmit}
              className="btn btn-primary w-100 d-flex gap-2 justify-content-center align-items-center"
            >
              <span>Login</span>
              {!isPending || (
                <div
                  className="spinner-border spinner-border-sm text-light"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
