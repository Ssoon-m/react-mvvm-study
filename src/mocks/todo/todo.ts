import { rest } from "msw";
import { ITodoDTO } from "@domain/dto/todo/TodoDTO";

const todoList: ITodoDTO[] = [
  { id: 1, title: "할일1", contents: "내용1" },
  { id: 2, title: "할일2", contents: "내용2" },
  { id: 3, title: "할일3", contents: "내용3" },
  { id: 4, title: "할일4", contents: "내용4" },
];

let currentId = 4;

const getList = rest.get(/\/todo\/list$/, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoList));
});
const addList = rest.post(/\/todo\/list$/, (req, res, ctx) => {
  const { title, contents } = req.body as Omit<ITodoDTO, "id">;
  todoList.push({
    id: ++currentId,
    title,
    contents,
  });
  return res(ctx.status(200), ctx.json({ errorMessage: "error" }));
});

export { getList, addList };
