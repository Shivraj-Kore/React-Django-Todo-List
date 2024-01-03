import React from "react";

class MainApp extends React.Component{
    constructor(props) {
            super(props);
            this.state = {
                todoList: [],
                activeItem: {
                    id: null,
                    title: "",
                    completed: false,
                },
                editing: false,
            };
            this.fetchTasks = this.fetchTasks.bind(this);

        componentDidMount(); {
            this.fetchTasks();
        }

        fetchTasks(); {
            console.log("Fetching");
        }

        return (
            <>
                <div className="min-h-screen flex items-center justify-center ">
                    <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg">
                        <form className="mb-8">
                            <div className="flex items-center">
                                <div className="w-3/4 mr-2">
                                    <input
                                        className="w-full py-2 px-4 border border-gray-300 rounded"
                                        id="title"
                                        type="text"
                                        placeholder="Add Task" />
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
}

export default MainApp;
