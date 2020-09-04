import React from "react";
import axios from "../../../node_modules/axios/dist/axios";

const Update = (data) => {
  const List = prompt("update list", data.List);

  const NewData = {
    List,
  };

  axios.put(`http://localhost:3000/list/${data.id}`, NewData);
  window.location.reload(true);
};

export default Update;
