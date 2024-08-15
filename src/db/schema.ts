import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }),
    description: varchar('description', { length: 100 }),
    complted: boolean('complted').default(false),
  });