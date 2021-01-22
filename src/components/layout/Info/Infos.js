import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAllInfo,
  deleteAllInfo,
  selectAllInfo,
} from "../../../actions/CreateDataAction";
import Info from "./Info";

const Infos = () => {
  const dispatch = useDispatch();

  const [selectAll, setselectAll] = useState(false);

  const infos = useSelector((state) => state.infos.infos);
  const selectedInfos = useSelector((state) => state.infos.selectedInfos);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllInfo(infos.map((data) => data.id)));
    } else {
      dispatch(clearAllInfo());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedInfos.length > 0 ? (
        <button
          className="btn btn-danger float-right my-3"
          onClick={() => dispatch(deleteAllInfo())}
        >
          Delete All
        </button>
      ) : null}
      <table className="table table-dark shadow ">
        {" "}
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setselectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {infos.map((infos) => (
            <Info info={infos} key={infos.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Infos;
