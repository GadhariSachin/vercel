import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";

function TodoFormInput(props) {
  const classes = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const [todoTask, setTodoTaskState] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: todoTask,
      isComplete: false,
    });

    setTodoTaskState("");
  };

  const handleChange = (e) => {
    setTodoTaskState(e.target.value);
  };

  const buttonCustomStyle = {
    margin: "6px",
  };

  const textFieldCustomStyle = {
    width: "350px",
  };

  return (
    <div>
      <form
        className="{classes.root}"
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Enter New task"
          value={todoTask}
          onChange={handleChange}
          style={textFieldCustomStyle}
        />
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          style={buttonCustomStyle}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default TodoFormInput;
