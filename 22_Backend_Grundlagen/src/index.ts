import type { UserRepository } from "./user/types";
import { InMemoryUserRepository } from "./user/user-repository";

const getUserStore = (): UserRepository => {
  if (process.env.NODE_ENV === "development") {
    console.log("Running in development mode");
    return new InMemoryUserRepository();
  }
  throw new Error("No user repository implemented for production");
};
