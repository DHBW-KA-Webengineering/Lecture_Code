import { relations } from "drizzle-orm";
import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text(),
  github_username: text().unique(),
});

export const group = sqliteTable("group", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text(),
});

export const userGroup = sqliteTable("user_group", {
  user_id: int().references(() => user.id),
  group_id: int().references(() => group.id),
});

export const post = sqliteTable("post", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text(),
  content: text(),
  author: int(),
});

export const githubAccount = sqliteTable("github_account", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().unique(),
});

export const userRelations = relations(user, ({ many, one }) => ({
  posts: many(post),
  userGroups: many(userGroup),
  githubAccount: one(githubAccount, {
    fields: [user.github_username],
    references: [githubAccount.username],
  }),
}));

export const postRelations = relations(post, ({ one }) => ({
  author: one(user, { fields: [post.author], references: [user.id] }),
}));

export const groupRelations = relations(group, ({ many }) => ({
  userGroups: many(userGroup),
}));

export const userGroupRelations = relations(userGroup, ({ one }) => ({
  group: one(group, { fields: [userGroup.group_id], references: [group.id] }),
  user: one(user, { fields: [userGroup.user_id], references: [user.id] }),
}));
