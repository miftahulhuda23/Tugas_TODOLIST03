import React from "react";
import { useForm } from "react-hook-form";
import axios from "../../../node_modules/axios/dist/axios";
import "../../App.css";

const Form = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/list", data)
      .then((response) => {
        // alert("data berhasil masuk");
        window.location.reload(true);
      })
      .catch((error) => {
        alert("error post");
      });
  };

  return (
    <div className="container input">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form"
            placeholder="Create Your List..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            ref={register}
            name="List"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" id="button-addon2">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
