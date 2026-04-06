import React from "react";
import type { UserRepository } from "../types";

type UserListProps = {
  userStore: UserRepository;
};

const UserList: React.FC<UserListProps> = ({ userStore }) => {
  const [users] = React.useState(userStore.getAllUsers());
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};
