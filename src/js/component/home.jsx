import React, { useState } from "react";
import "animate.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { name } from "file-loader";

//create your first component
const Home = () => {
  const [toDo, setToDo] = useState("");
  const [tareas, setTareas] = useState([]);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas(tareas.concat(toDo)); // darle valor introducido al array
    console.log(toDo);
    // añadir ese valor a la lista
    setToDo(""); // resetear el valor
  };

  const removeItem = (index) => {
    setTareas((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  return (
    <div
      className="container my-5 d-flex justify-content-center rounded"
      id="todobox"
    >
      <form action="" onSubmit={handleSubmit} id="form">
        <h1 className="mx-auto p-2 text-center">To Do List</h1>

        <div className="my-2">
          <input
            type="text"
            placeholder="Write a task!"
            onChange={(e) => {
              setToDo(e.target.value);
            }}
          />
          <button className="mx-2 btn btn-success" type="submit">
            Add task
          </button>
        </div>
        <hr />
        <div>
          <ul>
            {tareas
              ? tareas.map((tarea, index) => (
                  <li
                    key={index}
                    className="animate__animated animate__bounceIn d-flex justify-content-between"
                  >
                    {tarea}
                    <button
                      id="removeButton"
                      type="button"
                      onClick={() => removeItem(index)}
                    >
                      <i
                        className="fa-solid fa-x"
                        style={{ color: "#e22828" }}
                      ></i>
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Home;
