import style from "./Register.module.css";
function Register() {
  return (
    <>
      <div className={`${style.container} `}>
        <form className={`col-lg-4 col-md-6 shadow ${style.form}`}>
          <div className="mb-3 d-flex justify-content-center">
            <h3>Register</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Your full name
            </label>
            <input type="text" className="form-control" id="fullname" />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="retypepassword" className="form-label">
              Re-type password
            </label>
            <input
              type="password"
              className="form-control"
              id="retypepassword"
            />
          </div>
          <div className={`${style.spacebetween}`}>
            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
            <div className={`${style.spacebetween}`}>
              <span className="me-3 text-secondary">
                Already have an account?
              </span>
              <button type="button" className="btn btn-outline-secondary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
