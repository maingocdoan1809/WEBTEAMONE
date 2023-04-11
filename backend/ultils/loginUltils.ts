import { AccountPriority, AccountState } from "../types/DBTypes";

export function getState(state: number): AccountState | undefined {
  switch (state) {
    case AccountState.ACTIVE:
      return AccountState.ACTIVE;
    case AccountState.DELETE:
      return AccountState.DELETE;
  }
  return undefined;
}
export function getPriority(state: number): AccountPriority | undefined {
  switch (state) {
    case AccountPriority.ADMIN:
      return AccountPriority.ADMIN;
    case AccountPriority.NORMAL:
      return AccountPriority.NORMAL;
  }
  return undefined;
}
