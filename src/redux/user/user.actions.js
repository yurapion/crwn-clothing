import { UsersActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UsersActionTypes.SET_CURRENT_USER,
  payload: user
});
