import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Form from "../src/Component/Form/Form";
import API from "../src/Component/Table/TableData";

function App() {
  return (
    <div className="App">
      <h1 className="judul">MY TODO LIST</h1>
      <Form />
      <br />
      <API />
    </div>
  );
}

export default App;
