import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Activity from "./Activity";
import ActivityForm from "./ActivityForm";
import axios from "axios";
import jwt from "jsonwebtoken";

const ActivitiesList = () => {
  const history = useHistory();

  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const activitiesData = await axios.post(
        "http://localhost:5000/api/activities",
        {},
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      setActivities(activitiesData.data.data);
    } catch (e) {
      console.log(e);
      setError("You're unauthorized");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        console.log("Invalid Token");
        history.replace("/login");
      } else {
        fetchData();
      }
    } else {
      console.log("Not authenticated");
      history.replace("/login");
    }
  }, [history]);

  const logoutHandler = (e) => {
    localStorage.removeItem("token");
    history.go(0);
  };

  return (
    <div className="activities-list">
      <div className="nav-activities">
        <h1 className="heading">Your Activities</h1>
        <button onClick={logoutHandler} className="logout-button">
          Logout
        </button>
      </div>
      <div className="error-activities">{error}</div>
      <div className="activities-content">
        {activities.map((activity) => (
          <Activity activity={activity} key={activity._id} />
        ))}
      <ActivityForm activities={activities} setActivities={setActivities}/>
      </div>
    </div>
  );
};

export default ActivitiesList;
