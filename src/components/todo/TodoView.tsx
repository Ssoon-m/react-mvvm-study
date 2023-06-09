import React, { useEffect, useState } from "react";
import InputField from "../common/InputField";
import TodoList from "./TodoList";
import { TodoEntity } from "@entity/todo/TodoEntity";
import TodoDi from "@di/TodoDi";

const TodoView = () => {
  const [todoList, setTodoList] = useState<TodoEntity[]>();

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    const data = await TodoDi.getList();
    setTodoList(data);
  };

  return (
    <div>
      <h3>todo list</h3>
      <InputField />
      {todoList && <TodoList todoList={todoList} />}
    </div>
  );
};

export default TodoView;
