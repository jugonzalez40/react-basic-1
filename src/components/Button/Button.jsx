import React from "react";
import PropTypes from "prop-types";
import "./Button.scss"

const Button = ({ color, text, onClick }) => {

  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn">
          {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
