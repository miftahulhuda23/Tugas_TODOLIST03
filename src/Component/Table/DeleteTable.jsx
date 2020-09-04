import React from "react";
import axios from "../../../node_modules/axios/dist/axios";

const Delete = (data) => {
  axios
    .delete(`http://localhost:3000/list/${data.id}`)
    .then((response) => {
      alert("data dihapus");
      window.location.reload(true);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Delete;
