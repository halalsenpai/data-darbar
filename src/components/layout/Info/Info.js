import React from "react";
import Avatar from "react-avatar";

const Info = ({ info }) => {
  const { name, phone, email } = info;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="35px" round />
        {name}
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="actions">
        <a href="#">
          <span className="material-icons text-primary">edit</span>
          <span className="material-icons text-danger">remove_circle</span>
        </a>
      </td>
    </tr>
  );
};

export default Info;
