import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/db";
import { todos } from "~/db/schema";

export const todoRouter = createTRPCRouter({
  submitTodo: publicProcedure
    .input(z.object({ name: z.string() }))
    .input(z.object({ description: z.string() }))
    .mutation( async ({ input }) => {
      const newTodo = await db
        .insert(todos)
        .values({
          name: input.name,
          description: input.description,
        })
        .returning();

      console.log(newTodo);
    }),

  getTodos: publicProcedure.query(async ()=>{
      return await db.select().from(todos);
    }),
});
