import { Link } from "react-router-dom";

interface ButtonProps {
  text: string
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
 
}


function Button({text, className, type,onClick}: ButtonProps) {
  return (
    <>
     <button type={type} className={className} onClick={onClick}>{text}</button>     
    </>
  );
};

export default Button;