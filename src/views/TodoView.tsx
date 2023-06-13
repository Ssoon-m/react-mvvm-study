import React, { useEffect, useState } from "react";
import InputField from "@components/common/InputField";
import TodoList from "@components/todo/TodoList";
import TodoDi from "@di/TodoDi";
import {
  useGetTodoQuery,
  usePostTodoQuery,
} from "src/hooks/query/useTodoQuery";

const TodoView = () => {
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });

  const { data } = useGetTodoQuery(TodoDi);
  const { mutate } = usePostTodoQuery(TodoDi);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTodoListClick = async () => {
    mutate(inputs);
  };

  return (
    <div>
      <h3>todo list</h3>
      <InputField
        name="title"
        value={inputs.title}
        onChange={handleInputChange}
        placeholder="title"
      />
      <InputField
        name="contents"
        value={inputs.contents}
        onChange={handleInputChange}
        placeholder="contents"
      />
      <button onClick={handleAddTodoListClick}>추가</button>
      {data && <TodoList todoList={data} />}
    </div>
  );
};

export default TodoView;
