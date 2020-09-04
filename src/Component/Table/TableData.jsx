import React, { useState, useEffect } from "react";
import axios from "../../../node_modules/axios/dist/axios";
import Table from "./Table";

const API = () => {
  const [list, setList] = useState([]);
  const fetchTable = () => {
    axios
      .get("http://localhost:3000/list")
      .then((response) => {
        const data = response.data;
        setList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTable();
  }, []);

  return (
    <div>
      <Table list={list} />
    </div>
  );
};

export default API;
