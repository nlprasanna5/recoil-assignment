import React from "react";
import { useRecoilValue } from "recoil";
import { taskListAtom } from "./data";
import { useNavigate } from "react-router-dom";
import taskStyle from './styles/Tasks.module.css';

function Tasks() {
    const taskList = useRecoilValue(taskListAtom);
    const navigate = useNavigate();

    return (
        <div className={taskStyle.taskContainer}>
            <h1>Tasks to do !!</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
            <ul className={taskStyle.lists}>
                {
                    taskList.map((task, index) => {
                        return (
                            <li key={index}>
                                {task}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Tasks;