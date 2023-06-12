import GetTodoUseCase from "@domain/usecase/todo/GetTodoUseCase";

class TodoViewModel {
  private readonly getTodoUseCase: GetTodoUseCase;
  constructor(getTodoUseCase: GetTodoUseCase) {
    this.getTodoUseCase = getTodoUseCase;
  }

  getList() {
    return this.getTodoUseCase.getList();
  }
  addList() {
    return this.getTodoUseCase.addList();
  }
}

export default TodoViewModel;
