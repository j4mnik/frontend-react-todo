import Card from "./Card";
import Dropdown from "./Dropdown";
import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function TaskList() {
    const [taskList, setTaskList] = useState([]);
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("regular");
    const [itemList, setItemList] = useState(null);

    function fetchData() {
        fetch("http://localhost:8000/api/get-tasks/?done=false")
            .then((res) => res.json())
            .then((json) => {
                setTaskList(JSON.parse(JSON.stringify(json['data'])));
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (taskList.length > 0) {
            setItemList(taskList.map((task) => <Card onChange={handleChange} key={task.id} id={task.id} name={task.name}
                                                     priority={task.importance} createdAt={task.created_at}/>));
        } else {
            setItemList(<h1 className="font-semibold text-center p-5 dark:text-gray-400">You have no any tasks to
                do.</h1>)
        }

    }, [taskList]);

    function addTask() {
        if (title !== '') {
            axios
                .post("http://localhost:8000/api/add-task/", {"taskName": title, "priority": priority})
                .finally(() => {
                    fetchData();
                    setTitle('');
                })
        }
    }

    function handleChange() {
        fetchData();
    }

    return (
        <div className="flex flex-col">
            <div
                className="inline-flex align-middle justify-between w-screen p-4 border-b dark:bg-[#242526] dark:border-[#3A3B3C]">
                <Link to="/home">
                    <h1 className="text-xl text-gray-900 font-semibold sm:mx-4 py-2 dark:text-white">Todo App</h1>
                </Link>
                <Dropdown/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="mt-8 py-4 m-4 border rounded-lg dark:bg-[#242526] dark:border-[#3A3B3C]">
                    <div className="mx-4">
                        <h1 className="text-lg font-medium dark:text-white">Add your new task</h1>
                        <div className="mt-2 sm:inline-flex">
                            <input onChange={event => setTitle(event.target.value)} value={title}
                                   className="m-1 mr-4 ml-0 mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#3A3B3C] dark:text-white dark:border-[#3A3B3C]"
                                   placeholder="Eat a breakfast"
                            />
                            <select
                                onChange={event => setPriority(event.target.value)}
                                className="m-1 mr-4 ml-0 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  dark:bg-[#3A3B3C] dark:text-white dark:border-[#3A3B3C]">
                                <option value="regular">Regular</option>
                                <option value="have_to">Have to!</option>
                                <option value="can_wait">Can wait</option>
                            </select>
                            <button
                                onClick={() => addTask()}
                                className="m-1 ml-0 mb-4 p-2 bg-indigo-600 rounded-lg text-white font-semibold text-sm hover:bg-indigo-700">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex content-center justify-center mt-8 mx-4">
                <div className="w-screen md:w-1/2 bg-gray-50 rounded-lg max-h-screen shadow-md  dark:bg-[#242526]">
                    <div className="rounded-lg p-4 bg-gradient-to-r from-indigo-500 to-blue-500">
                        <h1 className="text-white text-lg font-bold">Taskboard</h1>
                    </div>
                    <div className="custom-scrollbar my-6">
                        <div className="overflow-y-auto max-h-80 rounded-lg px-4">
                            {itemList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList;