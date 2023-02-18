import { mount } from "@vue/test-utils";
import TodoListComponentVue from "../src/components/TodoListComponent.vue";
import TodoListViewVue from "../src/components/TodoListView.vue";
import TodoList from "../src/entities/TodoList";
import TodoHttpGateway from "../src/gateways/TodoHttpGateway";
import TodoMemoryGateway from "../src/gateways/TodoMemoryGateway";
import AxiosHttpClient from "../src/infra/AxiosHttpClient";

function sleep (mili: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, mili);
    });
};

test("Deve testar a tela de todo list", async function () {
    const todoList = new TodoList();
    todoList.addItem("a");
    todoList.addItem("b");
    todoList.addItem("c");

    const a = todoList.getItem("a");

    todoList.toggleDone(a);

    const wrapper = mount(TodoListComponentVue, {
        props: {
            todoList
        }
    });
    await sleep(100);
    expect(wrapper.get(".completed").text()).toBe("33%");
});