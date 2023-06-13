export interface ITodoParams {
  id: number;
  title: string;
  contents: string;
}
export interface ITodoDTO {
  readonly id: number;
  readonly title: string;
  readonly contents: string;
}

class TodoDTO implements ITodoDTO {
  readonly id: number;
  readonly title: string;
  readonly contents: string;

  constructor(params: ITodoParams) {
    this.id = params.id;
    this.title = params.title;
    this.contents = params.contents;
  }
}

export default TodoDTO;
