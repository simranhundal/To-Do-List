import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showForm }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* when not on main page hide button */}
      {location.pathname === "/" && (
        // if form is not present make green add button else a red close button
        <Button
          color={showForm ? "red" : "green"}
          text={showForm ? "Close Form" : "Add Item"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "To Do List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
