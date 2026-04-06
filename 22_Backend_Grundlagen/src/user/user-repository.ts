import type { UserRepository, User } from "./types";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }
  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(user: User): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

export class DBUserRepository implements UserRepository {
  getAllUsers(): User[] {
    throw new Error("Method not implemented.");
  }
  getUserById(id: number): User | undefined {
    throw new Error("Method not implemented.");
  }
  addUser(user: User): void {
    throw new Error("Method not implemented.");
  }
  updateUser(user: User): void {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: number): void {
    throw new Error("Method not implemented.");
  }
}
