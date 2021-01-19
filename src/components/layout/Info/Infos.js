import React from "react";
import { useSelector } from "react-redux";
import Info from "./Info";

const Infos = () => {
  const info = useSelector((state) => state.infos.infos);

  return (
    <table className="table table-dark shadow ">
      {" "}
      <thead>
        <tr>
          <th>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label"></label>
            </div>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {info.map((info) => (
          <Info info={info} key={info.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Infos;
