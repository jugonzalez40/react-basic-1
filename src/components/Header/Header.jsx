import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";

const Header = ({ title, onShowAddTask, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "DarkSalmon" : "DodgerBlue"}
        text={showAdd ? "Close" : "Add"}
        onClick={onShowAddTask}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string,
  onShowAddTask: PropTypes.func,
  showAdd: PropTypes.bool
};

export default Header;
