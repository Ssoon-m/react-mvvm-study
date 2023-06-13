import { Http } from "@infrastructures/http/client";
import TodoRepository from "@repository/TodoRepository";
import TodoUseCase from "@domain/usecase/todo/GetTodoUseCase";
import TodoViewModel from "@viewModel/TodoViewModel";

const todoRepository = new TodoRepository(new Http());
const todoUseCase = new TodoUseCase(todoRepository);
const TodoDi = new TodoViewModel(todoUseCase);
export default TodoDi;
