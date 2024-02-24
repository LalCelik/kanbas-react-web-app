import Spreading from "../json/Spreading";
import TemplateLiterals from "../string/TemplateLiterals";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";

function WorkingWithArrays () {
var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];
return (
    <>
     <h3>Working With Arrays</h3>
     numberArray1 = {numberArray1}<br />
     stringArray1 = {stringArray1}<br />
     variableArray1 = {variableArray1}<br />
     <ArrayIndexAndLength/>
     <AddingAndRemovingDataToFromArrays/>
     <ForLoops/>
     <MapFunction/>
     <FindFunction/>
     <FilterFunction/>
     <TemplateLiterals/>
     <Spreading/>
    </>
   )
}

export default WorkingWithArrays
