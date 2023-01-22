import React, { useState, useEffect } from "react"; //create your first component

const Home = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  function addTask(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      setArray(array.concat({ label: input, done: true }));
      setInput("");
    }
  }
  function deleteTask(index) {
    let deleteTask = array[index];
    setArray(array.filter((item) => item != deleteTask));
  }

  // fetch methods
  function bringList() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/solracort", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }) //trae info en la url pasada como valor
      .then((response) => response.json()) //esta linea convierte la respuesta en un json
      .then((data) => setArray(data)) //esta linea guarda la info transformada en un objeto
      .catch((err) => console.log(err)); //el catch te comunica si algo salió mal
  }
  function newUser() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/solracort", {
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
    fetch("https://assets.breatheco.de/apis/fake/todos/user/solracort", {
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
    fetch("https://assets.breatheco.de/apis/fake/todos/user/solracort", {
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


useEffect(()=>{
    sendList()
    console.log("sending array");
},[array])


  console.log(array);



  return (
    <div className="container">
      <h1>todos</h1>
      <ul id="myList">
        <li className="justify-content-between">
          <input
            onKeyDown={addTask}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Introduzca una tarea"
          ></input>
        </li>
        {array.map((item, index) => (
          <li key={index}>
            {item.label} <button onClick={() => deleteTask(index)}>x</button>
          </li>
        ))}
      </ul>
      <p>{array.length} items left</p>
    </div>
  );
};

export default Home;
