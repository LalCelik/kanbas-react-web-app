import React from "react";
import TodoList from "../../a3/todos/TodoList";
import AddRedux from "../AddRedux";
import TodoForm from "./todos/TodoForm";
import { useSelector } from "react-redux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <TodoList/>
      <AddRedux/>
      <TodoForm/>
    </div>
  );
};

export default ReduxExamples;