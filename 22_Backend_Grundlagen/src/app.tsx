import { UserList } from "./user/components/user-list";
import type { UserRepository } from "./user/types";
import { InMemoryUserRepository } from "./user/user-repository";
import userData from "./user/test-users.json";

const getUserStore = (): UserRepository => {
  if (process.env.NODE_ENV === "development") {
    console.log("Running in development mode");
    return new InMemoryUserRepository(userData);
  }
  throw new Error("No user repository implemented for production");
};

export default function App() {
  return (
    <div>
      <h1>Test App</h1>
      <UserList userStore={getUserStore()} />
    </div>
  );
}
