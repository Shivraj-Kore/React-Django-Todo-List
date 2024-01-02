import React from "react";

function MainApp() {
    return (
        <>
<<<<<<< Updated upstream
            <div className="min-h-screen flex items-center justify-center ">
                <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg">
                    <form className="mb-8">
                        <div className="flex items-center">
                            <div className="w-3/4 mr-2">
                                <input
                                    className="w-full py-2 px-4 border border-gray-300 rounded"
                                    id="title"
                                    type="text"
                                    placeholder="Add Task"
                                />
=======
            <div className="container" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1,
                width: '100%',
                height: '100%',
            }}  >
                <div id="task-container">
                    <div id="form-wrapper">
                        <form id="form">
                            <div className="flex-wrapper">
                                <div style={flexstyle}>
                                    <input className="form-control" id="title" type="text" placeholder="Add Task"/>
                                </div>
                                <div style={flexstyle2}>
                                    <input className="btn btn-warning" type="submit" name="Add" id="submit" />
                                </div>
>>>>>>> Stashed changes
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

                    <div id="list-wrapper">
                        {/* Add any additional styles for the task list container */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainApp;
