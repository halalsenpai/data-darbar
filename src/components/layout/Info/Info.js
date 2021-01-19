import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Info = ({ info }) => {
  const { id, name, phone, email } = info;
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
        <Link to={`/EditData/${id}`}>
          <span className="material-icons text-primary">edit</span>
        </Link>
        <Link>
          <span className="material-icons text-danger">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
};

export default Info;
