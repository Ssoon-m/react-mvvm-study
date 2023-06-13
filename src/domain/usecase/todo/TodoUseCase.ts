import { ITodoDTO } from "@domain/dto/todo/TodoDTO";
import TodoRepository from "@repository/TodoRepository";

export default class TodoUseCase {
  private readonly todoRepository: TodoRepository;
  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  getList() {
    return this.todoRepository.getList();
  }
  addList({ title, contents }: Omit<ITodoDTO, "id">) {
    return this.todoRepository.addList({ title, contents });
  }
}
