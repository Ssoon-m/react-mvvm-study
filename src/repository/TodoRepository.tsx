import { TodoEntity } from "@entity/todo/TodoEntity";
import Http from "@infrastructures/http/client";

export default class TodoRepository {
  private readonly client: Http;
  public constructor(client: Http) {
    this.client = client;
  }
  public async getList(): Promise<TodoEntity[]> {
    return this.client.get<TodoEntity[]>("/todo/list").then((res) => res.data);
  }
}
