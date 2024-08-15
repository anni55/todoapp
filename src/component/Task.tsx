'use client';
import Image from "next/image";
import { useState } from "react";
import { text } from "stream/consumers";


type privateProps =
{
    taskName : string,
    taskDesc : string,
    done : boolean,
}
function togalEdit(setAllowEdit:React.Dispatch<React.SetStateAction<boolean>>, allowEdit:boolean)
{
    setAllowEdit(!allowEdit);
}

function Task({taskName, taskDesc, done}:privateProps)
{
    let [allowEdit, setAllowEdit] = useState(true);
    let [newtaskName, setNewtaskName] = useState('');
    let [newTaskDesc, setNewTaskDesc] = useState('');

    return(
        <div className={`p-2 ${done ? 'bg-green-300' : 'bg-slate-300'} rounded-xl mb-3 taskCompleted`}>
            <div className="flex justify-between ">
                <textarea onKeyUp={(e)=>{setNewtaskName(e.target.value)}} className={`w-4/5 rounded-xl px-2 p-2 h-11 resize-none outline-none text-black bg-transparent ${!allowEdit && 'bg-slate-200'}`} readOnly = {allowEdit}>{taskName}</textarea>
                <div>
                    {/* <button onClick={()=>{taskCompleted(taskName)}} className="w-8 aspect-square object-cover m-2 -translate-y-3 border-2 border-black p-1 rounded">{done && <Image className="" src={require('../img/done.png')} alt="some random text"/>}</button>
                    <button onClick={()=>{{allowEdit ? togalEdit(setAllowEdit, allowEdit) : edit(setAllowEdit, allowEdit, newtaskName, newTaskDesc)}}} ><Image className="w-7 h-full object-cover m-2" src={require(`../img/${allowEdit ? 'pngwing.com (1).png': 'save.png'}`)} alt="some random text"/></button>
                    <button onClick={()=>{delet(taskName)}}><Image className="w-7 h-full object-cover m-2" src={require('../img/delet.png')} alt="some random text"/></button> */}
                </div>
            </div>
            <textarea onKeyUp={(e)=>{setNewTaskDesc(e.target.value)}} className={`h-28 w-full p-2 rounded-md text-black resize-none bg-transparent outline-none ${!allowEdit && 'bg-slate-200'}`} readOnly = {allowEdit}>{taskDesc}</textarea>
        </div>
    )
}


function edit(setAllowEdit:React.Dispatch<React.SetStateAction<boolean>>, allowEdit:boolean, newtaskName:String, newTaskDesc:String)
{
    let newData = 
    {
        taskName: newtaskName,
        taskDesc: newTaskDesc,
        done: false,
    }
    console.log(newData);
    setAllowEdit(!allowEdit);
}
function delet(taskName:String)
{
    alert(taskName);
}
function taskCompleted(taskName:String)
{
    alert(taskName);
}

export default Task;