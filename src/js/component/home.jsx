import React, { useState, useEffect } from "react";
import "animate.css";

//include images into your bundle


//create your first component
const Home = () => {
  const [toDo, setToDo] = useState("");
  const [tareas, setTareas] = useState([]);
 
  

  const getInfo = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/miguelmr', {
      method: "GET",
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        if (resp.status === 404){
         console.log("creando nuevo usuario")
         createUser()};//---------error si no hay user!
        return resp.json(); // will try return the exact result as string
        
    })
    .then(data => {
        //here is where your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
            
    });
  };
  const createUser = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/miguelmr', {
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json();        
    })
    .then(data => {
        //here is where your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  };
const updateInfo = () =>{
  fetch('https://assets.breatheco.de/apis/fake/todos/user/miguelmr', {
      method: "PUT",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json();        
    })
    .then(data => {
        //here is where your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  // fetch put que añada los datos al server-----
}
const deleteInfo = () => {
  fetch('https://assets.breatheco.de/apis/fake/todos/user/miguelmr', {
      method: "DELETE",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json();        
    })
    .then(data => {
        //here is where your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  //nuevo bton con fetch DELETE?? para borrar todo y luego fetch GET para traer a front el array vacio?-----
}
  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas(tareas.concat(toDo)); // darle valor introducido al array
    console.log(toDo);
    updateInfo();
    // fetch put que añada los datos al server-----
    setToDo(""); // resetear el valor
  };

  const removeItem = (index) => {
    setTareas((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
      //fetch con PUT??? para actualizar lo borrado
    });
  };

  //nuevo bton con fetch DELETE?? para borrar todo y luego fetch GET para traer a front el array vacio?-----

  useEffect(()=>{     //useEffect con funcion dentro que haga un fetch GET de la info del server----- POST para crear nuevo usuario
    getInfo();
  },[])

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
          /></div>
          <div className="d-flex justify-content-center">
          <button className="mx-2 btn btn-success" type="submit">
            Add task
          </button>
          <button className="btn btn-danger">Delete everything</button></div>
        
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
