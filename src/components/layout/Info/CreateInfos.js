import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInfo } from "../../../actions/CreateDataAction";
import cuid from "cuid";
import { useHistory } from "react-router-dom";

const CreateInfos = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    id: cuid(),
    name: "",
    email: "",
    phone: "",
  });
  const { name, email, phone } = data;

  const CreateData = (e) => {
    e.preventDefault();

    dispatch(addInfo(data));
    history.push("/");
  };

  function handleChange(e) {
    console.log(e.target.name);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header bg-primary text-light">Add Data</div>
      <div className="card-body">
        <form onSubmit={(e) => CreateData(e)}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter your name"
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter your email"
              type="email"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              name="phone"
              required
              placeholder="Enter your phone number"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateInfos;
