import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TodoRepository from "@repository/TodoRepository";
import { Http } from "@infrastructures/http/client";
import { ITodoDTO } from "@domain/dto/todo/TodoDTO";
import TodoViewModel from "@viewModel/TodoViewModel";

// const client = new Http();
// const todoRepository = new TodoRepository(client);

const extractKey = { all: ["todo"] };

export const useGetTodoQuery = (callback: TodoViewModel) => {
  return useQuery({
    queryKey: extractKey.all,
    queryFn: () => callback.getList(),
  });
};

export const usePostTodoQuery = (callback: TodoViewModel) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ title, contents }: Omit<ITodoDTO, "id">) =>
      callback.addList({ title, contents }),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: extractKey.all }),
  });
};

useGetTodoQuery.extractKey = extractKey;
usePostTodoQuery.extractKey = extractKey;
