export enum AccountState {
  DELETE,
  ACTIVE,
}
export enum AccountPriority {
  NORMAL,
  ADMIN,
}
export type Account = {
  username: string;
  fullname: string;
  state?: AccountState | undefined;
  priority?: AccountPriority | undefined;
};

export type DBResultLogin = {
  err: boolean;
  accept: boolean;
  user?: Account;
};
