import { ITodoParams } from "@domain/dto/todo/TodoDTO";
import TodoUseCase from "@domain/usecase/todo/TodoUseCase";
import { useQuery } from "@tanstack/react-query";

class TodoViewModel {
  private readonly TodoUseCase: TodoUseCase;
  constructor(TodoUseCase: TodoUseCase) {
    this.TodoUseCase = TodoUseCase;
  }

  async getList() {
    return await this.TodoUseCase.getList();
  }
  addList({ title, contents }: Omit<ITodoParams, "id">) {
    return this.TodoUseCase.addList({ title, contents });
  }
}

export default TodoViewModel;
