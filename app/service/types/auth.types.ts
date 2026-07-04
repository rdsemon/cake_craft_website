export interface userLogin {
  email: string;
  password: string;
}

export interface userSignUp extends userLogin {
  name: "string";
  confirmPasswrod: "string";
}
