/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ILogin, IRegister } from "../types/auth.types";
import api from "./index";

export const login = async (data: ILogin) => {
  try {
    const response = await api.post("/auth/login", data);

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const register = async (data: Omit<IRegister, "confirm_password">) => {
  console.log(data);
  // register logic
};