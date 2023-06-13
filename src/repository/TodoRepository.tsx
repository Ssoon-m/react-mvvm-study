import TodoDTO, { ITodoParams } from "@domain/dto/todo/TodoDTO";
import { Http, type IHttp } from "@infrastructures/http/client";

export default class TodoRepository {
  private readonly client: IHttp;
  public constructor(client: IHttp) {
    this.client = client;
  }
  public async getList() {
    return await this.client
      .get<ITodoParams[]>("/todo/list")
      .then((res) => res.data.map((todo) => new TodoDTO(todo)));
  }
  public async addList({ title, contents }: Omit<ITodoParams, "id">) {
    return this.client
      .post<boolean>("/todo/list", {
        title,
        contents,
      })
      .then((res) => res.data);
  }
}
