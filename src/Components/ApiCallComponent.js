import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResponse } from "../actions/demoAction";

function ApiCallComponent() {
  const [response, updateResponse] = useState([]);
  const [isLoading, updateLoading] = useState(false);

  //we need to use useDispatch,because we are unable to use this.props.dispatch method
  const dispatch = useDispatch();
  //componentDidMouad
  useEffect(() => {
    dispatch(getResponse());
  }, []);

  //like mapStateToProps
  const isRequesting = useSelector((state) => state.Demo.isRequest);
  const successData = useSelector((state) => state.Demo.demoApiData);
  // const failureData = useSelector((state) => state.Demo.apiFailureState);

  //componentDidUpdate
  useEffect(() => {
    updateResponse(successData);
    updateLoading(isRequesting);
  }, [isRequesting, successData]);

  const getTableData = (response) => {
    return response.map((user, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td> <td>{user.title}</td>
        </tr>
      );
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center                                                                                                                                         ",
      }}
      className='divScroll'
    >
      <table>
        <tr>
          <th>No</th>
          <th>Title</th>
        </tr>
        <tbody>{isLoading ? "Loading..." : getTableData(response)}</tbody>
      </table>
    </div>
  );
}
export default ApiCallComponent;
