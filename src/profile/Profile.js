import Dropdown from "../taskList/Dropdown";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ProfileCard from "./ProfileCard";
import Modal from 'react-modal';
import axios from "axios";


function Profile() {
    const [taskList, setTaskList] = useState([]);
    const [historyList, setHistoryList] = useState([]);
    const [totalTaskCount, setTotalTaskCount] = useState(null);
    const [doneTasks, setDoneTaskCount] = useState(null);
    const [toDoTasks, setToDoTaskCount] = useState(null);
    const [itemList, setItemList] = useState([]);
    const [historyItems, setHistoryItems] = useState([]);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function fetchHistory(limit = 5) {
        fetch("http://localhost:8000/api/get-tasks/?done=true")
            .then((res) => res.json())
            .then((json) => {
                let taskList = JSON.parse(JSON.stringify(json['data']))
                setTaskList(taskList.slice(0, limit))
                setHistoryList(taskList)
            });
    }

    function isDone(value) {
        return value.is_done === true;
    }

    function isToDo(value) {
        return value.is_done === false;
    }


    function fetchAllTasks() {
        fetch("http://localhost:8000/api/get-tasks/")
            .then((res) => res.json())
            .then((json) => {
                let allTasks = JSON.parse(JSON.stringify(json['data']));
                let doneTasks = allTasks.filter(isDone)
                let toDoTasks = allTasks.filter(isToDo)


                setDoneTaskCount(doneTasks.length);
                setToDoTaskCount(toDoTasks.length);
                setTotalTaskCount(allTasks.length);
            });

    }

    useEffect(() => {
        fetchHistory();
        fetchAllTasks();
    }, []);

    useEffect(() => {
        if (taskList.length > 0) {
            setItemList(taskList.map((task) => <ProfileCard onChange={handleChange} key={task.id} id={task.id}
                                                            name={task.name}
                                                            priority={task.importance} createdAt={task.created_at}/>));
        } else {
            setItemList(<h1 className="font-semibold text-gray-600 text-center p-5 dark:text-gray-400">No tasks</h1>)
        }

        if (historyList.length > 0) {
            setHistoryItems(historyList.map((task) => <ProfileCard onChange={handleChange} key={task.id} id={task.id}
                                                                   name={task.name}
                                                                   priority={task.importance}
                                                                   createdAt={task.created_at}/>));
        } else {
            setHistoryItems(<h1 className="font-semibold text-center p-5 dark:text-gray-400">You have no any tasks in
                history.</h1>)
        }

    }, [taskList, historyList]);

    function handleChange() {
        fetchHistory();
    }

    function deleteAllTasks() {
        axios.post("http://localhost:8000/api/delete-all-tasks/")
            .finally(() => {
                fetchHistory();
                fetchAllTasks();
            })
    }


    return (
        <div className="bg-gray-50 w-full h-screen dark:bg-[#18191A]">
            <div
                className="inline-flex align-middle justify-between w-screen p-4 bg-white border-b dark:bg-[#242526] dark:border-[#3A3B3C]">
                <Link to="/home">
                    <h1 className="text-xl text-gray-900 hover:text-indigo-900 font-semibold sm:mx-4 py-2 dark:text-white">Todo
                        App</h1>
                </Link>
                <Dropdown/>
            </div>
            <div className="p-4 py-6 text-3xl font-bold text-gray-900 border-b dark:text-white dark:border-[#3A3B3C]">
                <h1 className="sm:mx-4 ">Profile</h1>
            </div>
            <div className="md:grid grid-cols-2 justify-center p-4">
                <div className="bg-white p-4 rounded-lg shadow-md m-4 dark:bg-[#3A3B3C]">
                    <div className="py-2">
                        <h1 className="font-medium text-indigo-900 text-2xl dark:text-indigo-300">Stats</h1>
                    </div>
                    <div className="flex flex-col justify-between my-4 text-black dark:text-white">
                        <div className="flex font-semibold">
                            <h1 className="mr-2">Total tasks: </h1>
                            <h1>{totalTaskCount}</h1>
                        </div>
                        <div className="flex">
                            <h1 className="mr-2">Active tasks: </h1>
                            <h1>{toDoTasks}</h1>
                        </div>
                        <div className="flex">
                            <h1 className="mr-2">Finished tasks: </h1>
                            <h1>{doneTasks}</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md m-4 dark:bg-[#3A3B3C] dark:text-white">
                    <div className="py-2">
                        <h1 className="font-medium text-indigo-900 text-2xl dark:text-indigo-300">History</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="justify-between my-4">
                            <div
                                className="flex justify-around font-semibold text-black pb-2 mb-4 border-b dark:text-white">
                                <h1 className="mx-1">Task name</h1>
                                <h1 className="mx-1">Priority</h1>
                                <h1 className="mx-1">Finish date</h1>
                            </div>
                            <div className="justify-around font-light">
                                {itemList}
                            </div>
                            <div className="mt-4 grid justify-items-center">
                                <button
                                    onClick={openModal}
                                    className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black dark:bg-[#242526] dark:text-[#E4E6EB] dark:border-0">
                                    Show all finished tasks
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    className="bg-white border shadow-sm rounded-xl md:translate-y-1/2 m-auto md:w-1/2 dark:bg-[#3A3B3C] dark:border-0"
                >
                    <div className="flex p-4">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your all history</h1>
                    </div>
                    <div className="flex justify-around font-semibold text-black pb-2 mb-2 border-b dark:text-white">
                        <h1 className="mx-1">Task name</h1>
                        <h1 className="mx-1">Priority</h1>
                        <h1 className="mx-1">Finish date</h1>
                    </div>
                    <div className="px-4 dark:text-white">
                        {historyItems}
                    </div>
                    <div className="flex flex-row-reverse bg-gray-100 p-4 mt-6 rounded-b-md dark:bg-[#242526]">
                        <button
                            className="text-white bg-indigo-600 px-4 py-2 ml-4 text-md rounded-md font-normal hover:bg-indigo-700"
                            onClick={() => deleteAllTasks()}>Clear all history
                        </button>
                        <button
                            className="px-2 font-normal text-gray-600 hover:text-black dark:text-white"
                            onClick={closeModal}>Close
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    )

}

export default Profile;