import TodoList from "../src/entities/TodoList";

test("Deve testar a todo list", function () {
    const todolist = new TodoList();
    expect(todolist.getCompleted()).toBe(0);

    todolist.addItem("a");
    todolist.addItem("b");
    todolist.addItem("c");
    expect(todolist.getCompleted()).toBe(0);

    const a = todolist.getItem("a");
    const b = todolist.getItem("b");
    const c = todolist.getItem("c");
    todolist.toggleDone(a);
    todolist.toggleDone(b);
    todolist.toggleDone(c);
    expect(todolist.getCompleted()).toBe(100);

    todolist.toggleDone(a);
    todolist.toggleDone(b);
    expect(todolist.getCompleted()).toBe(33);

    todolist.removeItem(a);
    expect(todolist.getCompleted()).toBe(50);
});