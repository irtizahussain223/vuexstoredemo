export class Todo {
  id = 0;
  name = "";

  constructor(data: object) {
    Object.assign(this, data);
  }
}
