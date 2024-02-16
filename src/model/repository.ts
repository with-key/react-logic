/**
 * Repository (server <-> client)
 */

import React from "react";
import { UserModel } from "./user";
import { instance } from "../api/instance";

export const useUser = () => {
  const [user, setUser] = React.useState<UserModel | undefined>(undefined);

  const fetch = async () => {
    const { data } = await instance.get("/user");
    setUser(new UserModel(data[0]));
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return user;
};
