import React from "react";
import Activity from "./Activity";
import Activities_Data from "../data";

const Activities_List = () => {
  return (
    <div className="activities-list">
      <h1 className="heading">Your Activities</h1>
      <div className="activities-content">
        {Activities_Data.map((activity) => (
          <Activity activity={activity} key={activity.id} />
        ))}
      </div>
    </div>
  );
};

export default Activities_List;
