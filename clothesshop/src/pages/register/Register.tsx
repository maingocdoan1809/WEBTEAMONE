import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { useEffect, useReducer, useRef } from "react";
import {
  checkEmail,
  checkPassword,
  checkPhoneNumber,
} from "../../utils/regexFuncs";
import {
  RegisterAction,
  RegisterArg,
  RegisterState,
  initialState,
} from "./RegisterTypes";
import { createAccount } from "./RegisterUtils";
import { sha256 } from "js-sha256";
function Register() {
  const navigate = useNavigate();
  const [registerState, dispatch] = useReducer(reducer, initialState);
  const isPasswordMatch = registerState.isPasswordMatch;
  const isPasswordOk = registerState.isPasswordOk;
  useEffect(() => {
    let isAllFilled = true;

    Object.values(registerState.registerInfo).forEach((e) => {
      isAllFilled &&= e.filled!;
    });
    if (isAllFilled && isPasswordMatch && isPasswordOk) {
      console.log(
        createAccount({
          username: registerState.registerInfo.username.value,
          fullname: registerState.registerInfo.fullname.value,
          email: registerState.registerInfo.email.value,
          phonenumber: registerState.registerInfo.phonenumber.value,
          password: sha256(registerState.registerInfo.password.value),
        })
      );
    }
  });
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
            <input
              type="text"
              value={registerState.registerInfo.fullname.value}
              onChange={(e) => {
                dispatch({
                  value: e.target.value,
                  action: RegisterAction.CHANGE_FULLNAME,
                });
              }}
              className={`form-control ${
                registerState.registerInfo.fullname.filled == undefined
                  ? ""
                  : registerState.registerInfo.fullname.filled
                  ? ""
                  : "is-invalid"
              }`}
              id="fullname"
            />
            <AlertField
              predicate={registerState.registerInfo.fullname.filled}
              stringIfTrue=""
              stringIfFalse=" Please fill in this field."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${
                registerState.registerInfo.email.filled == undefined
                  ? ""
                  : registerState.registerInfo.email.filled
                  ? ""
                  : "is-invalid"
              }`}
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={registerState.registerInfo.email.value}
              onChange={(e) => {
                dispatch({
                  value: e.target.value,
                  action: RegisterAction.CHANGE_EMAIL,
                });
              }}
            />
            <AlertField
              predicate={registerState.registerInfo.email.filled}
              stringIfTrue="We'll never share your email with anyone else."
              stringIfFalse="Your email is not in correct format"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className={`form-control ${
                registerState.registerInfo.phonenumber.filled == undefined
                  ? ""
                  : registerState.registerInfo.phonenumber.filled
                  ? ""
                  : "is-invalid"
              }`}
              id="phonenumber"
              name="phonenumber"
              aria-describedby="emailHelp"
              value={registerState.registerInfo.phonenumber.value}
              onChange={(e) => {
                dispatch({
                  value: e.target.value,
                  action: RegisterAction.CHANGE_PHONENUMBER,
                });
              }}
            />
            <AlertField
              predicate={registerState.registerInfo.phonenumber.filled}
              stringIfTrue=""
              stringIfFalse="Please fill in this field."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${
                registerState.registerInfo.username.filled == undefined
                  ? ""
                  : registerState.registerInfo.username.filled
                  ? ""
                  : "is-invalid"
              }`}
              id="username"
              name="username"
              value={registerState.registerInfo.username.value}
              onChange={(e) => {
                dispatch({
                  value: e.target.value,
                  action: RegisterAction.CHANGE_USERNAME,
                });
              }}
            />
            <AlertField
              predicate={registerState.registerInfo.username.filled}
              stringIfTrue=""
              stringIfFalse="Plese fill in this field."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className={`form-control ${
                registerState.registerInfo.password.value == ""
                  ? registerState.registerInfo.password.filled == undefined
                    ? ""
                    : registerState.registerInfo.password.filled
                    ? ""
                    : "is-invalid"
                  : isPasswordOk
                  ? "is-valid"
                  : "is-invalid"
              }`}
              id="password"
              value={registerState.registerInfo.password.value}
              onChange={(e) => {
                dispatch({
                  value: e.target.value,
                  action: RegisterAction.CHANGE_PASSWORD,
                });
              }}
            />
            <AlertField
              predicate={registerState.isPasswordOk}
              stringIfTrue=""
              stringIfFalse="Password must contain numbers, words, and special characters"
            />
            <AlertField
              predicate={registerState.registerInfo.password.filled}
              stringIfTrue=""
              stringIfFalse="Please fill in this field."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="retypepassword" className="form-label">
              Re-type password
            </label>
            <input
              type="password"
              className={`form-control ${
                registerState.registerInfo.retypepassword.value == ""
                  ? registerState.registerInfo.retypepassword.filled ==
                    undefined
                    ? ""
                    : registerState.registerInfo.retypepassword.filled
                    ? ""
                    : "is-invalid"
                  : isPasswordOk && isPasswordMatch
                  ? "is-valid"
                  : "is-invalid"
              }`}
              id="retypepassword"
              name="retypepassword"
              value={registerState.registerInfo.retypepassword.value}
              onChange={(e) => {
                dispatch({
                  value: e.target.value,
                  action: RegisterAction.CHANGE_RETYPEPASSWORD,
                });
              }}
            />
            <AlertField
              predicate={registerState.isPasswordMatch}
              stringIfTrue=""
              stringIfFalse="You must enter the exact password you've typed above."
            />
            <AlertField
              predicate={registerState.registerInfo.retypepassword.filled}
              stringIfTrue=""
              stringIfFalse="Please fill in this field."
            />
          </div>
          <div className={`${style.spacebetween}`}>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                dispatch({ action: RegisterAction.SUBMIT });
              }}
            >
              Register
            </button>
            <div className={`${style.spacebetween}`}>
              <span className="me-3 text-secondary">
                Already have an account?
              </span>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={(e) => {
                  navigate("/WEBTEAMONE/login");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

type AlertFieldProps = {
  predicate: boolean | undefined;
  stringIfTrue: string;
  stringIfFalse: string;
};
function AlertField(props: AlertFieldProps) {
  return (
    <>
      {props.predicate != false ? (
        !props.stringIfTrue ?? (
          <div className="form-text">{props.stringIfTrue}</div>
        )
      ) : (
        <div className="form-text text-danger">{props.stringIfFalse}</div>
      )}
    </>
  );
}

function reducer(state: RegisterState, arg: RegisterArg): RegisterState {
  if (arg.action == RegisterAction.CHANGE_PASSWORD) {
    const password = arg.value;
    return {
      ...state,
      isPasswordMatch: password == state.registerInfo.retypepassword.value,
      isPasswordOk: checkPassword(password),
      registerInfo: {
        ...state.registerInfo,
        [arg.action]: {
          value: arg.value!,
          filled: undefined,
        },
      },
    };
  } else if (arg.action == RegisterAction.CHANGE_RETYPEPASSWORD) {
    const retypepassword = arg.value;
    const password = state.registerInfo.password;
    return {
      ...state,
      isPasswordMatch: retypepassword == password.value,
      isPasswordOk: checkPassword(password.value),
      registerInfo: {
        ...state.registerInfo,
        [arg.action]: {
          value: arg.value!,
          filled: undefined,
        },
      },
    };
  } else if (arg.action == RegisterAction.SUBMIT) {
    return {
      ...state,
      registerInfo: {
        email: {
          value: state.registerInfo.email.value,
          filled: checkEmail(state.registerInfo.email.value),
        },
        fullname: {
          value: state.registerInfo.fullname.value,
          filled: state.registerInfo.fullname.value != "",
        },
        password: {
          value: state.registerInfo.password.value,
          filled: state.registerInfo.password.value != "",
        },
        retypepassword: {
          value: state.registerInfo.retypepassword.value,
          filled: state.registerInfo.retypepassword.value != "",
        },
        phonenumber: {
          value: state.registerInfo.phonenumber.value,
          filled: checkPhoneNumber(state.registerInfo.phonenumber.value),
        },
        username: {
          value: state.registerInfo.username.value,
          filled: state.registerInfo.username.value != "",
        },
      },
    };
  }
  return {
    ...state,
    registerInfo: {
      ...state.registerInfo,
      [arg.action]: {
        value: arg.value!,
        filled: undefined,
      },
    },
  };
}

export default Register;
