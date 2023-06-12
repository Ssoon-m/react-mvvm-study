import { ITodoDTO } from "@domain/dto/todo/TodoDTO";
import { Http, type IHttp } from "@infrastructures/http/client";

export default class TodoRepository {
  private readonly client: IHttp;
  public constructor(client: IHttp) {
    this.client = client;
  }
  public async getList(): Promise<ITodoDTO[]> {
    return this.client.get<ITodoDTO[]>("/todo/list").then((res) => res.data);
  }
  public async addList(): Promise<ITodoDTO[]> {
    return this.client.post<ITodoDTO[]>("/todo/list").then((res) => res.data);
  }
}
