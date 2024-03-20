import JavaScript from "./JavaScript";
import Classes from "./css/Classes";
import PathParameters from "./routing/PathParameters";
import Styles from "./css/Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";
function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
 return (
   <div className="container">
     <h1>Assignment 3</h1>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
     <Styles/>
     <PathParameters/>
     <JavaScript/>
     <Classes/>
     <ConditionalOutput/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
    <TodoItem/>
    <TodoList/>
   </div>
 );
}

export default Assignment3; //I added this need to check