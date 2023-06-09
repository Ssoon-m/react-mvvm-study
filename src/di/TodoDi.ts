import Http from "@infrastructures/http/client";
import TodoRepository from "@repository/TodoRepository";
import GetTodoUseCase from "@domain/usecase/todo/GetTodoUseCase";
import TodoViewModel from "@viewModel/TodoViewModel";

const todoRepository = new TodoRepository(new Http());
const getTodoUseCase = new GetTodoUseCase(todoRepository);
const TodoDi = new TodoViewModel(getTodoUseCase);
export default TodoDi;
