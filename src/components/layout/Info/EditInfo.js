import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfo,
  addInfo,
  updateInfo,
} from "../../../actions/CreateDataAction";
import cuid from "cuid";
import { useHistory, useParams } from "react-router-dom";

const EditInfo = () => {
  let { id } = useParams();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.infos.info);
  console.log(getData);

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
    // console.log(e.target.name);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  //UseEffect
  useEffect(() => {
    if (getData != null) {
      setData(getData);
    }
    dispatch(getInfo(id));
  }, [getData]);

  const UpdateData = (e) => {
    e.preventDefault();

    const updated_data = Object.assign(getData, {
      name: name,
      email: email,
      phone: phone,
    });
    console.log(updated_data);
    dispatch(updateInfo(updated_data));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header bg-primary text-light">Add Data</div>
      <div className="card-body">
        <form onSubmit={(e) => UpdateData(e)}>
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
              type="text"
              name="phone"
              required
              placeholder="Enter your phone number"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditInfo;
