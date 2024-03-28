import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

function Todolist(props) {
    const [task, setTasks] = useState([])
    const [newJob, setNewJobs] = useState("");
    const [id, setId] = useState(1);
    const [indexEdit, setIndexEdit] = useState(null);
    const [jobEdit, setJobEdit] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newJob) {
            setId(id + 1);
            const newTask = {
                id: id,
                job: newJob,
                status: false
            }
            setTasks([...task, newTask]);
            setNewJobs("");
        }
    }
    const deleted = (id) => {

        const hello = task.filter(item => item.id != id);

        setTasks(hello);
    }
    const edit = (job, index) => {
        setIndexEdit(index);
        setJobEdit(job);
    }
    const updated = () => {
        const newTasks = [...task];
        newTasks[indexEdit].job = jobEdit;
        setTasks(newTasks);
        setIndexEdit(null);
    }
    const handleCheck = (index) => {
        const newTasks = [...task];
        newTasks[index].status = true;
        setTasks(newTasks);
        setIndexEdit(null);
    }
    return (
        <>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit}>
                    <input value={newJob} onChange={(e) => setNewJobs(e.target.value)} className='p-2 border border-emerald-600 rounded' type="text" placeholder='Enter your job...' />
                    <button className='p-2 ms-2 bg-green-700 rounded text-zinc-50'>Add Task</button>
                </form>
            </div>
            {
                task.map((item, index) => (
                    <div className='p-2 bg-black text-zinc-50 flex justify-between items-center m-2 rounded'>
                        <div className=''>
                            {index}
                        </div>
                        {index == indexEdit ? (
                            <input type="text" onChange={(e) => setJobEdit(e.target.value)} value={jobEdit} className='text-gray-600' />
                        ) : (
                            
                                item.status ? (<div className='line-through'>
                                    {item.job} (completion)
                                </div>) : (<div className=''>
                                    {item.job}
                                </div>)                        
                        )
                        }
                        <div className='button'>
                            {
                                index == indexEdit ? (
                                    <>
                                        <button onClick={updated} className='bg-green-500 text-white p-2 rounded mr-2'><i class="fa-solid fa-circle-plus"></i></button>
                                        <button onClick={() => setIndexEdit(null)} className='bg-gray-500 p-2 rounded'><i class="fa-solid fa-xmark"></i></button>
                                    </>

                                ) : (
                                    <>
                                        <button onClick={() => edit(item.job, index)} className='p-2 bg-blue-400 rounded'><i class="fa-solid fa-pen-to-square"></i></button>
                                        <button onClick={() => deleted(item.id)} className='p-2 bg-red-500 ms-2 rounded'><i class="fa-solid fa-trash"></i></button>
                                       {
                                        item.status ? ("") : (<button onClick={() => handleCheck(index)} className='p-2 bg-green-500 ms-2 rounded'><i class="fa-regular fa-circle-check"></i></button> )
                                       }
                                    </>
                                )
                            }

                        </div >
                    </div >
                ))
            }

        </>
    );
}

export default Todolist;