import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  return (
    <div className="todo">
      <p className="text-todo">{props.text}</p>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
