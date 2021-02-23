import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            {/* description of app and how to use it */}
            <h4>A dynamic To Do  app made with Reack for UI and a JSON server for a mock backend.
                Click add button to add a task. Double click a task to toggle a reminder or click the red X 
                to delete the task altogether.
            </h4>
            <br></br>
            {/* link to go back to main page */}
            <Link to='/'>Go back to main page</Link>
        </div>
    )
}

export default About
