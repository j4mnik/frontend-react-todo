import {Routes, Route} from "react-router-dom";
import TaskList from "./taskList/TaskList";
import Login from "./Login"
import Profile from "./profile/Profile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<TaskList/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;
