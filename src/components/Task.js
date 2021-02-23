import { FaTimes } from "react-icons/fa";
function Task({ task, onDelete, onToggle }) {
  return (
    // adding green reminder bar is task remind attribute is set
    // on double click call ontoggle function
    <div
      className={`task ${task.remind ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        {/* red x for ondelete function */}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
