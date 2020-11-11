import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";
import axios from "axios";

const TodoList = (props) => {
  const [activities, setActivities] = useState([]);
  const { setError, setSuccessMessage } = props;

  useEffect(() => {
    const fetchActivities = async () => {
      await axios
        .get(process.env.REACT_APP_API_AUTHENTICATED_URL + "/activities/")
        .then((response) => {
          const { data } = response;
          setActivities(data.activities);
          setError("");
        })
        .catch((error) => {
          const { data } = error.response;
          setError(data.message);
          setActivities([]);
        });
    };

    fetchActivities();
  }, []);

  return (
    <div>
      {activities.length === 0 ? (
        <div>No todo item yet</div>
      ) : (
        <div>
          {activities.map((activity) => {
            return (
              <Todo
                key={activity._id}
                activity={activity}
                setError={setError}
                setSuccessMessage={setSuccessMessage}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
