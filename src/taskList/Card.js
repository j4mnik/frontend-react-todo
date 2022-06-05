import axios from "axios";

const priorities = {
    "regular": "Regular",
    "have_to": "Have to!",
    "can_wait": "Can wait",
}

const colors = {
    "regular": "bg-blue-500/80",
    "have_to": "bg-red-500/80",
    "can_wait": "bg-emerald-500/80",
}


function Card(props) {

    function deleteTask() {
        axios
            .post("http://localhost:8000/api/delete-task/", {"taskId": props.id})
            .finally(() => {
                props.onChange();
            })
    }

    const dateFormat = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

        let day = days[d.getDay()]
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();


        return `${day} ${date} ${month}`

    }


    return (
        <div className="flex flex-col-2 backdrop-blur-md rounded-lg p-5 bg-white shadow-md mb-2 justify-between dark:bg-[#3A3B3C] dark:text-[#e4e6e5]">
            <div>
                <div className="font-normal text-xl mb-2">
                    <h1>{props.name}</h1>
                </div>
                <div className={`w-min my-1.5 rounded-2xl ${colors[props.priority]}`}>
                    <h1 className="whitespace-nowrap px-2 py-1 text-sm font-normal">{priorities[props.priority]}</h1>
                </div>
                <div className="flex font-normal">
                    <h1 className="mr-2 text-gray-500 dark:text-[#b0b3b8]">Start date</h1>
                    <h1>{dateFormat(new Date(props.createdAt))} </h1>
                </div>
            </div>
            <div className="flex items-start md:items-end">
                <button
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => deleteTask()}>
                    Done
                </button>
            </div>
        </div>
    )
}

export default Card;