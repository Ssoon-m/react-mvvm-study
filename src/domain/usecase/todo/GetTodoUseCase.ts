import TodoRepository from "@repository/TodoRepository";

export default class GetTodoUseCase {
  private readonly todoRepository: TodoRepository;
  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
  getList() {
    return this.todoRepository.getList();
  }
}
