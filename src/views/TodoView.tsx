import React, { useEffect, useState } from "react";
import InputField from "@components/common/InputField";
import TodoList from "@components/todo/TodoList";
import { ITodoDTO } from "@domain/dto/todo/TodoDTO";
import TodoDi from "@di/TodoDi";

const TodoView = () => {
  const [todoList, setTodoList] = useState<ITodoDTO[]>();

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    const data = await TodoDi.getList();
    setTodoList(data);
  };

  const handleAddTodoListClick = async () => {
    try {
      const data = await TodoDi.addList();
      getTodoList();
    } catch (e) {
      console.log("error에여 제발", e);
    }
  };
  return (
    <div>
      <h3>todo list</h3>
      {/* <InputField /> */}
      <button onClick={handleAddTodoListClick}>아무거나 추가</button>
      {todoList && <TodoList todoList={todoList} />}
    </div>
  );
};

export default TodoView;
