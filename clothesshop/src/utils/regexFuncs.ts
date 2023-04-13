export function checkPassword(
  password: string | undefined
): boolean | undefined {
  if (password == "" || password == undefined) {
    return undefined;
  }
  const checkWordPattern = new RegExp("[a-zA-Z]");
  const checkNumberPattern = new RegExp("[0-9]");
  const checkSpecialCharPattern = new RegExp("\\W");

  return (
    checkNumberPattern.test(password) &&
    checkWordPattern.test(password) &&
    checkSpecialCharPattern.test(password)
  );
}
export function checkPhoneNumber(phonenumber: string) {
  if (phonenumber == "") return false;
  const checkPhoneNumberPattern = new RegExp("[a-zA-Z]");
  return !checkPhoneNumberPattern.test(phonenumber);
}
export function checkEmail(email: string) {
  const checkEmailPattern = new RegExp(
    "^\\w+@\\w*(gmail|email|gov)(\\.w+)*\\.(com|vn|net)$"
  );
  return checkEmailPattern.test(email);
}
