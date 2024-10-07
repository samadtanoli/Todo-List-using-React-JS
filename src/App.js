import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const addTodo = () => {
    if (!text) {
      return alert("Field must be filled!");
    }

    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = text;
      setList(updatedList);
      setEditIndex(null); 
    } else {
      setList([...list, text]);
    }

    setText(""); 
  };

  const deleteTodo = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const editTodo = (index) => {
    setText(list[index]); 
    setEditIndex(index); 
  };

  return (
    <div className="App">
      <div>
        <h1>To-Do List</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>Delete</button>{" "}
            <button onClick={() => editTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
