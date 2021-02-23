import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  //state to show tasks and form
  const [showForm, setForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  //on load get all taks from DB
  useEffect(() => {
    const inittasks = async () => {
      const taskslist = await getTasks();
      setTasks(taskslist);
    };

    inittasks();
  }, []);

  //get tasks from server
  const getTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };
  //get single task from server
  const getTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    //adding task to state
    setTasks([...tasks, data]);
  };

  //delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    //delete task from state
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle remind
  const toggleRemind = async (id) => {
    //getting task
    const toggle = await getTask(id);
    //updating task remind variable
    const updatetask = { ...toggle, remind: !toggle.remind };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatetask),
    });
    const data = await res.json();
    //togle display for task in state
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remind: data.remind } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        {/* header to have form and button to display form */}
        <Header onAdd={() => setForm(!showForm)} showForm={showForm} />
        {/* hide button when there is  */}
        {showForm && <AddTask onAdd={addTask} />}
        {/* only display tasks when on base page */}
        <Route  path="/"  exact render={(props) => (
            <>
              {/* only display when there are more than on task otherwise display 'no tasks' */}
              {tasks.length > 0 ? 
              (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemind} />) : 
              (  "List currently empty")}
              <Footer />
            </>
        )}/>
        {/* display about page when clicked in footer */}
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
