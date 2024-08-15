import Link from "next/link";
import { useState } from "react";

import { LatestPost } from "~/app/_components/post";
import { HydrateClient } from "~/trpc/server";
import { api } from "~/trpc/server";
import tasksList from "~/data";
import AddTask from "~/component/AddTask";
import Task from "~/component/Task";

export default async function Home()
{
  const getTodos = api.todo.getTodos.useQuery();
  const submitTodo = api.todo.submitTodo.useMutation({
    onSuccess:()=>{ getTodos.refetch() }
  });
  // void api.post.getLatest.prefetch();


  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        
      <AddTask />
      <div className="w-full min-h-full flex flex-col">
          
          <div className="flex justify-center">
              <p className="absolute text-2xl -m-14 text-right">List of all tasks</p>
              <div className="w-3/5">
              
                  {tasksList.map((task)=>{ return <Task taskName={task.taskName} taskDesc={task.taskDesc} done={task.done} /> })}
              
              </div>
          </div>
      </div>

      </main>
    </HydrateClient>
  );
}
