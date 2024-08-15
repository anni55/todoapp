'use client';

import { desc } from "drizzle-orm";
import { useState } from "react";

function AddTask()
{
    let [name,setName] = useState('');
    let [desc,setDesc] = useState('');

    return(
        <div className="w-full flex justify-center my-24">
            <p className="absolute text-2xl -m-14 text-right">add new task</p>
            <form className="w-3/5 flex flex-col">
                <div>
                    <input className="text-black w-4/5 h-10 p-3 rounded-3xl"  onKeyUp={(e)=>{setName(e.target.value)}} type="text" placeholder="Add tasks" required />
                    <button className="w-2/12 mx-3 h-10 rounded-3xl bg-white text-slate-950"  onClick={()=>{addNewTask(name,desc)}} type="button">Add Task</button>
                </div>
                <textarea className="text-black h-28 resize-none rounded-xl p-2 my-2"  onKeyUp={(e)=>{setDesc(e.target.value)}} placeholder="Add discription about task" required ></textarea>
            </form>
        </div>
    );
}

function addNewTask(name, desc)
{
    let newTask = 
    {
        taskName: name,
        taskDesc: desc,
        done: false,
    }
    console.log(newTask);
}

export default AddTask;