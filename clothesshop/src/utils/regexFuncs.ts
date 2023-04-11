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
