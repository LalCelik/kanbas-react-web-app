import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import VariableTypes
  from "./variables/VariableTypes";
import BooleanVariables
from "./variables/BooleanVariables";
import IfElse
from "./conditionals/IfElse";
import TernaryOperator
from "./conditionals/TernaryOperator";
import WorkingWithFunctions
from "./functions/WorkingWithFunctions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import JsonStringify from "./json/JsonStringify";
import House from "./json/House";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
import Add from "../routing/Add";
import PathParameters from "../routing/PathParameters";
import ConditionalOutputIfElse from "../ConditionalOutput/ConditionalOutputIfElse";
import ConditionalOutputInline from "../ConditionalOutput/ConditionalOutputInline";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <JsonStringify/>
          <House/>
          <Destructing/>
          <FunctionDestructing/>
          <Add/>
          <PathParameters/>
       </div>
    );
 }
 export default JavaScript