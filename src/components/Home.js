import React,{useEffect} from "react";
import { useRecoilState } from "recoil";
import { taskListAtom } from "./data";
import { newTaskAtom } from "./data";
import { useNavigate } from "react-router-dom";

import homeStyle from './styles/Home.module.css';


function Home() {
    const [newTask, setNewTask] = useRecoilState(newTaskAtom);
    const [taskList, setTaskList] = useRecoilState(taskListAtom);

    useEffect(()=> {
        const storedTaskList = JSON.parse(localStorage.getItem('taskList')) || [];
        setTaskList(storedTaskList);
    }, []);
    const navigate=useNavigate();

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTaskList([...taskList, newTask]);
            setNewTask('')
        }

        localStorage.setItem('taskList', JSON.stringify([...taskList, newTask]));
    }

    function handleCheckTasks(){
        navigate('/tasks');
    }

    return (
        <div className={homeStyle.homeContainer}>
            <h1>Home Page</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <div className={homeStyle.buttons}>
            <button onClick={handleAddTask}>Add Task +</button>
            <button onClick={handleCheckTasks}>Check Tasks</button>
            </div>
        </div>
    )
}

export default Home;