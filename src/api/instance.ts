import axios from "axios";
import { UserModel } from "../model/user";

export const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const user = {
  get: () => {
    return instance.get<UserModel[]>("/user");
  },
};
