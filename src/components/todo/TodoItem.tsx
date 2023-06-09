import React from "react";

export interface TodoItemProps {
  title: string;
  contents: string;
}

const TodoItem = ({ title, contents }: TodoItemProps) => {
  return (
    <li>
      {title} / {contents}
    </li>
  );
};

export default TodoItem;
