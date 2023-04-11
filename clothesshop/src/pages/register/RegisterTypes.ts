export type InputInfo = {
  value: string;
  filled: boolean | undefined;
};
export type RegisterInfo = {
  username: InputInfo;
  password: InputInfo;
  fullname: InputInfo;
  email: InputInfo;
  phonenumber: InputInfo;
  retypepassword: InputInfo;
};
export type RegisterState = {
  isPasswordMatch: boolean | undefined;
  isPasswordOk: boolean | undefined;
  registerInfo: RegisterInfo;
};
export type RegisterArg = {
  value?: string;
  action: RegisterAction;
};
export enum RegisterAction {
  CHANGE_USERNAME = "username",
  CHANGE_PASSWORD = "password",
  CHANGE_RETYPEPASSWORD = "retypepassword",
  CHANGE_FULLNAME = "fullname",
  CHANGE_EMAIL = "email",
  CHANGE_PHONENUMBER = "phonenumber",
  SUBMIT = "submit",
}
export const initialState = {
  isEmtyField: undefined,
  isPasswordMatch: undefined,
  isPasswordOk: undefined,
  registerInfo: {
    email: {
      filled: undefined,
      value: "",
    },
    fullname: {
      filled: undefined,
      value: "",
    },
    password: {
      filled: undefined,
      value: "",
    },
    phonenumber: {
      filled: undefined,
      value: "",
    },
    username: {
      filled: undefined,
      value: "",
    },
    retypepassword: {
      filled: undefined,
      value: "",
    },
  } as RegisterInfo,
} as RegisterState;
