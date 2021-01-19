import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo, addInfo } from "../../../actions/CreateDataAction";
import cuid from "cuid";
import { useHistory, useParams } from "react-router-dom";

const EditInfo = () => {
  let { id } = useParams();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.infos.infos.info);

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

  //UseEffect
  useEffect(() => {
    dispatch(getInfo(id));
  }, []);

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

export default EditInfo;
