import React, { useState, useEffect } from "react"; //create your first component

const Home = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  function addTask() {
      setArray(array.concat({ label: input, done: true }));
      setInput("");
    
  }
  function deleteTask(index) {
    let deleteTask = array[index];
    setArray(array.filter((item) => item != deleteTask));
  }

  // fetch methods
  function bringList() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/andressoibelzon", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }) //trae info en la url pasada como valor
      .then((response) => response.json()) //esta linea convierte la respuesta en un json
      .then((data) => setArray(data)) //esta linea guarda la info transformada en un objeto
      .catch((err) => console.log(err)); //el catch te comunica si algo salió mal
  }
  function newUser() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/andressoibelzon", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify([]), // body data type must match "Content-Type" header
    }) //busca la info en la url pasada como valor
      .then((response) => response.json()) //esta linea convierte la respuesta en un json
      .then((data) => console.log(data)) //esta linea guarda la info transformada en un objeto
      .catch((err) => console.log(err)); //el catch te comunica si algo salió mal
  }
  function sendList() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/andressoibelzon", {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(array), //body data type must match "Content-Type" header
    }) //busca la info en la url pasada como valor
      .then((response) => response.json()) //esta linea convierte la respuesta en un json
      .then((data) => console.log(data)) //esta linea guarda la info transformada en un objeto
      .catch((err) => console.log(err)); //el cat
  }
  function deleteUser() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/andressoibelzon", {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body data type must match "Content-Type" header
    }) //busca la info en la url pasada como valor
      .then((response) => response.json()) //esta linea convierte la respuesta en un json
      .then((data) => console.log(data)) //esta linea guarda la info transformada en un objeto
      .catch((err) => console.log(err)); //el catch te comunica si algo salió mal
  }
  useEffect(() => {
    // newUser();
    bringList();
  }, []);

  useEffect(() => {
    sendList();
    console.log("sending array");
  }, [array]);

  console.log(array);

  return (
    <div className="container d-flex flex-column align-items-center py-3">
      <div className="display-5 text-secondary">todos</div>

      <div className="shadow p-3 mb-5 bg-white rounded my-2 d-flex w-75">
        <input
          type="text"
          className="form-control-plaintext"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={"Add Task"}
        ></input>
        <button
          className="btn btn-primary"
          onClick={addTask}
          disabled={input ? "" : "disabled"}
        >
          +
        </button>
      </div>

      <div className="bg-success w-75">
        <ul className="list-group list-group-flush">
          {array.map((t, index) => (
            <li
              id="lista"
              className="list-group-item list-group-item-action d-flex justify-content-between"
              key={index}
            >
              {t.label}
              <button
                className="btn btn-danger"
                onClick={() => deleteTask(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button>Agregar Usuario</button>
      <button>Eliminar Usuario</button>

    </div>
  );
};

export default Home;
