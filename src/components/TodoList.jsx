import React, { useState, useEffect, useContext } from "react";
import Todo from "../components/Todo";
import { FetchContext } from "../contexts/FetchContext";

const TodoList = (props) => {
  const fetchContext = useContext(FetchContext);
  const authAxios = fetchContext.authAxios;
  const [activities, setActivities] = useState([]);
  const { setError, setSuccessMessage } = props;

  useEffect(() => {
    const fetchActivities = async () => {
      await authAxios
        .get("/activities/")
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
