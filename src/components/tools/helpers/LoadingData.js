import React from "react";
import { Grid } from "semantic-ui-react";
import { ClimbingBoxLoader } from "react-spinners";

const LoadingData = ({ data, Component, quantityInLine }) => {
  const emptyData = <p>There are not data yet ! </p>;

  const pendingData = (
    <ClimbingBoxLoader color={"#36D7B7"} loading={true} size={20} />
  );

  const errorFetchData = (error) => {
    return (
      <div className="ui tertiary inverted segment">
        <p>{error}</p>
      </div>
    );
  };

  const dataList = (data) =>
    data.map((item) => <Component key={item._id} data={item}></Component>);

  const fetchingData = (data) => {
    if (data.isPending) {
      return pendingData;
    } else if (data.isRejected.status) {
      return errorFetchData(data.isRejected.message);
    } else if (data.isFilled) {
      if (data.data.length === 0) {
        return emptyData;
      } else {
        return dataList(data.data);
      }
    }
  };

  return (
    <Grid stackable columns={quantityInLine}>
      {fetchingData(data)}
    </Grid>
  );
};

export default LoadingData;
