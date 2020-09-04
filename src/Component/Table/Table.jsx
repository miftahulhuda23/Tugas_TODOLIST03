import React from "react";
import Delete from "./DeleteTable";
import Update from "./EditTable";
import "../../App.css";

const Table = (props) => {
  const { list } = props;
  const findList = list.map((data, index) => {
    return (
      <tr key={index}>
        <th scope="row" className="list-data">
          {index + 1}.
        </th>
        <td className="isilist list-data">{data.List}</td>
        <td>
          <button className="btn btn-danger" onClick={() => Delete(data)}>
            Delete
          </button>
          &nbsp;
          <button className="btn btn-primary" onClick={() => Update(data)}>
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container pl-3 conTable">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="no">
              No.
            </th>
            <th scope="col" className="list">
              Daftar List
            </th>
            <th scope="col" className="action">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{findList}</tbody>
      </table>
    </div>
  );
};

export default Table;
