import React, { useState } from "react";
import axios from "axios";
const ActivityForm = ({ activities, setActivities }) => {
  const [error, setError] = useState("");
  const addButtonHandler = async (e) => {
    e.preventDefault();
    const activity = document.getElementById("topic").value;
    const description = document.getElementById("description").value;

    if (activity.length === 0 || description.length === 0) {
      setError("Activity is empty!");
    } else {
      setError("");
      const req = await axios.post(
        "http://localhost:5000/api/add-activity",
        {
          data: {
            activity,
            description,
          },
        },
        { headers: { "x-access-token": localStorage.getItem("token") } }
      );
      setActivities(req.data.data);
      document.getElementById("add-activity").reset();
    }
  };

  return (
    <div className="activity">
      <form autoComplete="off" id="add-activity" onSubmit={addButtonHandler}>
        <input id="topic" className="topic" name="topic" type="text" />
        <div className="error">{error}</div>
        <textarea
          id="description"
          className="description textarea"
          name="description"
          rows="3"
        />
        <div className="button-div">
          <button onClick={addButtonHandler} className="button-12">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivityForm;
