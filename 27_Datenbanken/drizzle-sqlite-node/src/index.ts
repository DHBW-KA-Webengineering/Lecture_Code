import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./db/schema";

const main = async () => {
  const db = drizzle(process.env.DB_FILE_NAME!, { schema });
  // await db.insert(schema.user).values({ name: "Alice", github_username: "alice" });
  // await db.insert(schema.user).values({ name: "Bob", github_username: "bob" });
  // await db.insert(schema.group).values({ name: "Admins" });
  // await db.insert(schema.group).values({ name: "Users" });
  // await db.insert(schema.userGroup).values({ user_id: 1, group_id: 1 });
  // await db.insert(schema.userGroup).values({ user_id: 2, group_id: 2 });
  // await db.insert(schema.post).values({ title: "Hello", content: "World", author: 1 });
  // await db.insert(schema.post).values({ title: "Bye", content: "World", author: 2 });
  // await db.insert(schema.githubAccount).values({ username: "alice" });

  const results = await db.query.user.findFirst({
    with: {
      githubAccount: true,
      posts: true,
      userGroups: {
        with: {
          group: true,
        },
      },
    },
  });
  console.log(results);
};

main();
