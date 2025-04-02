import { Link } from "react-router-dom";

function Button({ to, text, className }) {
  return (
    <>
        <Link to={to}>
        <button className={className}>{text}</button>
        </Link>
    </>
  );
};

export default Button;