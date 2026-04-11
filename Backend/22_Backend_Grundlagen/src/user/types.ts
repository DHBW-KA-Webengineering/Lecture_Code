export type User = {
  id: number;
  name: string;
  email: string;
};

export interface UserRepository {
  getAllUsers(): User[];
  getUserById(id: number): User | undefined;
  addUser(user: User): void;
  updateUser(user: User): void;
  deleteUser(id: number): void;
}
