import React, { useState } from "react";
import "./index.css";
//import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import db from "../../Database";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
const {modules} = db;

function ModuleList() {
  const { courseId } = useParams();

  const modulesList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
const dispatch = useDispatch();




//  const [modulesList, setModuleList] = useState<any[]>(db.modules);
//  // const modulesList = db.modules.filter((module) => module.course === courseId);
//   const [selectedModule, setSelectedModule] = useState(modulesList[0]);
//   const [module, setModule] = useState({
//     name: "New Module",
//     description: "New Description",
//     course: courseId,
//   });

//   const addModule = (module: any) => {
//     const newModule = { ...module,
//       _id: new Date().getTime().toString() };
//     const newModuleList = [newModule, ...modulesList];
//     setModuleList(newModuleList);
//   };

//   const deleteModule = (moduleId: string) => {
//     const newModuleList = modulesList.filter(
//       (module) => module._id !== moduleId );
//     setModuleList(newModuleList);
//   };

//   const updateModule = (module:any) => {
//     const newModuleList = modulesList.map((m) => {
//       if (m._id === module._id) {
//         return module;
//       } else {
//         return m;
//       }
//     });
//     setModuleList(newModuleList);
//   };

  return (
    <>
<ul className="list-group wd-modules">
                <div>
                    <button type="button" className="button-gray"> Colapse All </button> &nbsp;
                    <button type="button" className="button-gray"> View Progress </button> &nbsp;
                    <select id="publish-all">
                        <option selected value="publish-all" className="button-gray">
                            Publish All</option>
                    </select> &nbsp;
                    <button type="button" className="button-red"> Module </button>
                </div>
            </ul>
      
      <ul className="list-group wd-modules">

      <li className="list-group-item">
        
        <button className="button-red" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add</button> {' '}

        <button className="button-red"  onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
         <hr />


        <input value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>  <hr />
        <textarea value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
          

      </li>
      
        {modulesList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            className="list-group-item">
            <div>


              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>

            

              <FaEllipsisV className="me-2" />
              {module.name} {' '}
              
              <button className="button-gray-small" 
               onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button> {' '}
            <button className="button-gray-small"
               onClick={() => dispatch(setModule(module))}>
              Edit
            </button>


            
            {module._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson :any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>

                    
                  </li>
                  
                ))}
                

              </ul>
              
              
            )}
            
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;