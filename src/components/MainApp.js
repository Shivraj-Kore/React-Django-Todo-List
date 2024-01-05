import React, { useEffect, useState } from 'react';

function MainApp() {
    let [list, setList] = useState([]);
    let [newTask, setThisTask] = useState('');

    const getTaskList = async () => {
        try {
            let tasklist = await fetch("http://localhost:8000/task-list");
            let tasks = await tasklist.json();
            console.log(tasks);
            setList(tasks);
        } catch (e) {
            console.log("error", e);
        }
    }

    const handleInputChange = (event) => {
        setThisTask(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newTaskData = {
            title: newTask,
            status: false
        };

        try {
            const response = await fetch("http://localhost:8000/task-create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTaskData)
            });

            const responseData = await response.json();
            console.log(responseData);
            
            // Update the task list after adding a new task
            getTaskList();
        } catch (error) {
            console.error('Error:', error);
        }

        // Clear the input field after submitting
        setThisTask('');
    }

    const handleUpdate = async (id) => {
        
        const newTaskData = {
            title: newTask,
            status: false
        };

        try {
            const response = await fetch(`http://localhost:8000/task-update/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTaskData)
            });

            const responseData = await response.json();
            console.log(responseData);
            
            // Update the task list after adding a new task
            getTaskList();
        } catch (error) {
            console.error('Error:', error);
        }

        // Clear the input field after submitting
        setThisTask('');
    }

    const handleDelete = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:8000/task-delete/${taskId}`, {
                method: 'DELETE'
            });

            const responseData = await response.json();
            console.log(responseData);

            // Update the task list after deleting a task
            getTaskList();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getTaskList();
    }, []);

    const handleStatusCheck = async (id) => {

        try {
            const response = await fetch(`http://localhost:8000/task-status/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: ""
            });

            const responseData = await response.json();
            console.log(responseData);
            
            // Update the task list after adding a new task
            getTaskList();
        } catch (error) {
            console.error('Error:', error);
        }

        // Clear the input field after submitting
        setThisTask('');
    }
    


    return (
        <>
        
            <div className="m-[10rem]">
                <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg">
                    <form className="mb-8" onSubmit={handleSubmit}>
                        <div className="flex items-center">
                            <div className="w-3/4 mr-2">
                                <input
                                    className="w-full py-2 px-4 border border-gray-300 rounded"
                                    id="title"
                                    type="text"
                                    placeholder="Add Task"
                                    value={newTask}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="w-1/4">
                                <button
                                    className="w-full bg-yellow-500 py-2 px-4 rounded text-white"
                                    type="submit"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>

                    <div>
                    <div>

                        {list.map((item, index) => (
                            <div className='flex '>
                                <div className="w-full py-2 px-4 border border-gray-300 rounded mb-2">
                                    <h1 key={index}>
                                    {item.title}
                                    </h1>
                                </div>
                                <button
                                    className="bg-green-500 py-2 px-4 rounded text-white ml-2 mb-2"
                                    type="button"
                                    onClick={() => handleUpdate(item.id)}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 py-2 px-4 rounded text-white ml-2 mb-2"
                                    type="button"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-gray-500 py-2 px-4 rounded text-white ml-2 mb-2"
                                    type="button"
                                    onClick={() => handleStatusCheck(item.id)}
                                >
                                    Status
                                </button>
                            </div>
                        ))}

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainApp;
