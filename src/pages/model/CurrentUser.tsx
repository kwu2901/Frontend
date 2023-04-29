import { createContext } from "react";
import { User } from "../model/UserModel";

interface CurrentUserType {
  token: string | null;
  user: User | null;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
}

export const CurrentUser = createContext<CurrentUserType>({
  token: null,
  user: null,
  setToken: () => {},
  setUser: () => {},
});
