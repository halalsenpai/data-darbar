import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteInfo } from "../../../actions/CreateDataAction";
import { useDispatch } from "react-redux";

const Info = ({ info, selectAll }) => {
  const { id, name, phone, email } = info;

  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            checked={selectAll}
          />
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
          <span className="material-icons text-primary edit-delete">edit</span>
        </Link>

        <span
          className="material-icons text-danger edit-delete"
          onClick={() => dispatch(deleteInfo(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Info;
