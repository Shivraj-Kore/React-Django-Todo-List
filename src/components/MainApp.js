import React from "react";

function MainApp(){
    return(
        <>
            <div className="container">
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
                            </div>
                        </form>


                    </div>
                    <div id="list-wrapper">

                    </div>
                </div>
            </div>
        </>
    );
}


let flexstyle = {flex:6}
let flexstyle2 = {flex:1}

export default MainApp;