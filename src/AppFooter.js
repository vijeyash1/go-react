import React from "react";
import "./AppFooter.css";
export default function AppFooter(props) {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <hr />
      <p className="footer">
        Copyright &copy; {currentYear} Vijesh Ltd {props.name}
      </p>
    </div>
  );
}
