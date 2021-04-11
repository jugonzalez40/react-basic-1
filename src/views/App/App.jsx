import "./App.scss";
import Header from "../../components/Header/Header";
import Tasks from "../../components/Tasks/Tasks";
import AddTask from "../../components/AddTask/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 12,
      text: "Amar a María de mi vida",
      day: "Todo el día ",
    },
    {
      id: 13,
      text: "Estudiar React",
      day: "En las noches antes de acostarme",
    },
    {
      id: 14,
      text: "Estudiar fantasmas",
      day: "En las noches depues de react",
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = ({ id }) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    setTasks([...tasks, { id, ...task }]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header
          title="Task Tracker"
          showAdd={showAddTask}
          onShowAddTask={() => setShowAddTask(!showAddTask)}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
