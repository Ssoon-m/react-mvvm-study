import { TodoEntity } from "@entity/todo/TodoEntity";
import { Http, type IHttp } from "@infrastructures/http/client";

export default class TodoRepository {
  private readonly client: IHttp;
  public constructor(client: IHttp) {
    this.client = client;
  }
  public async getList(): Promise<TodoEntity[]> {
    return this.client.get<TodoEntity[]>("/todo/list").then((res) => res.data);
  }
}
