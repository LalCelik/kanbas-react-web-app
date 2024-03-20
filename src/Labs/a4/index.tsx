import React from "react";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ChildStateComponent from "./ParentStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import { useSelector } from "react-redux";
import { LabState } from "../store";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return(
    <>
      <h1>Assignment 4</h1>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello}/>
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ChildStateComponent/>
      <ParentStateComponent/>
      <ReduxExamples/>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Assignment4;