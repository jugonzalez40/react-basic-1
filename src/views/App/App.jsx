import "./App.scss";
import Header from "../../components/Header/Header";
import Tasks from "../../components/Tasks/Tasks";
import AddTask from "../../components/AddTask/AddTask";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "../../components/About/About";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = async ({ id }) => {
    await fetch(`http://localhost:5009/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    setShowAddTask(false);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header
            title="Task Tracker"
            showAdd={showAddTask}
            onShowAddTask={() => setShowAddTask(!showAddTask)}
          />

          <Route
            path="/"
            exact
            render={(props) => (
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} onDelete={deleteTask} />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            )}
          />

          <Route path='/about' component={About} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
