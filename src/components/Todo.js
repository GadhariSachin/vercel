import React, { useState } from "react";
import TodoFormInput from "./TodoFormInput";
import TodoList from "./TodoList";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import "../todo.css";

function Todo() {
  const [todos, setTodosState] = useState([]);
  const [filterTodos, setFilterTodosState] = useState([]);
  const [activeTasks, setactiveTasksState] = useState([]);
  const [activeTab, setActiveTabState] = useState("all");

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo)) {
      return false;
    } else {
      const newTodo = [todo, ...todos];

      setTodosState(newTodo);
      setFilterTodosState(newTodo);
      setactiveTasksState(newTodo);
    }
  };

  const markTaskAsCompleted = (todoId) => {
    let selectedTask = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodosState(selectedTask);
    setFilterTodosState(selectedTask);

    const activeTasksList = todos.filter((todo) => !todo.isComplete);
    setactiveTasksState(activeTasksList);
  };

  const deleteTodoTask = (todoId) => {
    const tasks = todos.filter((todo) => todo.id !== todoId);
    setTodosState(tasks);
    setFilterTodosState(tasks);

    const activeTasksList = tasks.filter((todo) => !todo.isComplete);
    setactiveTasksState(activeTasksList);
  };

  const showAllTasks = () => {
    const tasks = todos;
    setActiveTabState("all");
    setFilterTodosState(tasks);
  };

  const showCompletedTasks = () => {
    setActiveTabState("complete");
    const tasks = todos.filter((todo) => todo.isComplete);
    setFilterTodosState(tasks);
  };

  const showIncompleteTasks = () => {
    setActiveTabState("incomplete");
    const tasks = todos.filter((todo) => !todo.isComplete);
    setFilterTodosState(tasks);
  };

  const date = new Date();
  const dateNow = `${date.getDate()} / ${date.getMonth() +
    1} / ${date.getFullYear()}`;

  return (
    <Container maxWidth="md">
      <Box
        color="white"
        bgcolor="black"
        p={1}
        boxShadow={3}
        className="todo_taskbar"
      >
        <div className="todo_taskbar_left">
          <h2>{dateNow}</h2>
          <h4>{activeTasks.length} active tasks</h4>
        </div>
        <div className="todo_taskbar_right">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={showAllTasks}
          >
            All
          </button>
          <button
            className={activeTab === "complete" ? "active" : ""}
            onClick={showCompletedTasks}
          >
            Completed Task
          </button>
          <button
            className={activeTab === "incomplete" ? "active" : ""}
            onClick={showIncompleteTasks}
          >
            Incomplete Task
          </button>
        </div>
      </Box>
      <Box color="black" pt={1} pb={5} boxShadow={3}>
        <p>What's todays Task</p>
        <div>
          <TodoFormInput onSubmit={addTodo} />
          <TodoList
            todos={filterTodos}
            isCompleted={markTaskAsCompleted}
            deleteTask={deleteTodoTask}
          />
        </div>
      </Box>
    </Container>
  );
}

export default Todo;
