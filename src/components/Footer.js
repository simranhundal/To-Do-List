import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      {/* link to how to use */}
      <p>Simran Hundal</p>
      <Link to="./about">How to use</Link>
    </footer>
  );
};

export default Footer;
