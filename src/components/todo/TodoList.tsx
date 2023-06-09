import React from "react";
import TodoItem from "./TodoItem";
import { TodoEntity } from "@entity/todo/TodoEntity";

interface Props {
  todoList: TodoEntity[];
}

const TodoList = ({ todoList }: Props) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} contents={todo.contents} />
      ))}
    </ul>
  );
};

export default TodoList;
