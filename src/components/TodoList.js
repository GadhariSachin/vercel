import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoList(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      margin: "auto",
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();

  const handleToggle = (todoId) => {
    props.isCompleted(todoId);
  };

  const handleDeleteEvent = (todoId) => {
    props.deleteTask(todoId);
  };

  return (
    <List className={classes.root} style={{ maxWidth: "495px" }}>
      {props.todos.map((todo, index) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            role={undefined}
            dense
            button
            onClick={() => handleToggle(todo.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                checked={todo.isComplete}
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={todo.text}
              style={todo.isComplete ? { textDecoration: "line-through" } : {}}
            />
            <ListItemSecondaryAction onClick={() => handleDeleteEvent(todo.id)}>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default TodoList;
