import { useState } from "react";
const AddTask = ({ onAdd }) => {
  //states for feilds of the form
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remind, setRemind] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // make sure text field is filled in
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, remind });

    setText("");
    setDay("");
    setRemind(false);
  };
  return (
    <form className="add-from" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        {/* each time the value is changed update the state */}
        <input  type="text" placeholder="add a task"    value={text}
          onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className="form-control">
        <label>Day</label>
        {/* each time the value is changed update the state */}
        <input  type="text" placeholder="add a day" value={day}
        onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control forn-control-check">
        <label>Reminder</label>
        {/* whenever toggle is changed also change the state */}
        <input  type="checkbox" value={remind} 
        onChange={(e) => setRemind(e.currentTarget.checked)} 
        checked={remind}/>
      </div>

      <input type="submit" value="Submit Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask
