import React, { useContext } from "react";
import { TodoWrapper } from "../styles/Todo";
import { ActionButton } from "../styles/Button";
import { FetchContext } from "../contexts/FetchContext";

const Todo = (props) => {
  const fetchContext = useContext(FetchContext);
  const authAxios = fetchContext.authAxios;
  const { _id, title, description, isComplete } = props.activity;
  const { setError, setSuccessMessage } = props;

  const deleteTodo = () => {
    try {
      authAxios.delete(`/activities/${_id}`).then((response) => {
        const { data } = response;
        setSuccessMessage(data.message);
        setError("");
      });
    } catch (error) {
      const { data } = error.response;
      setSuccessMessage("data.message");
      setError(data.message);
    }
  };

  const saveEdited = () => {
    try {
      authAxios.put(`/activities/complete/${_id}`).then((response) => {
        const { data } = response;
        setSuccessMessage(data.message);
        setError("");
      });
    } catch (error) {
      const { data } = error.response;
      setSuccessMessage("data.message");
      setError(data.message);
    }
  };

  return (
    <TodoWrapper>
      <div className="task">
        <div className="c-cb">
          <input
            id="todo-2"
            type="checkbox"
            disabled
            checked={`${isComplete}` === "true"}
          />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="actions">
        <div className="actions-button">
          <ActionButton
            primary
            onClick={saveEdited}
            disabled={`${isComplete}` === "true"}
          >
            complete
          </ActionButton>
        </div>
        <div className="actions-button" onClick={deleteTodo}>
          <ActionButton>delete</ActionButton>
        </div>
      </div>
    </TodoWrapper>
  );
};

export default Todo;
