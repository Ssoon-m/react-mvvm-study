import React from "react";
import TodoItem from "./TodoItem";
import { ITodoParams } from "@domain/dto/todo/TodoDTO";

interface Props {
  todoList: ITodoParams[];
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
