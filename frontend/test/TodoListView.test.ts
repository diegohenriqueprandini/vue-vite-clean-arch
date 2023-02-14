import { mount } from "@vue/test-utils";
import TodoListViewVue from "../src/components/TodoListView.vue";
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

test.skip("Deve testar a tela de todo list", async function () {
    // const httpClient = new AxiosHttpClient()
    // const todoGateway = new TodoHttpGateway(httpClient, "http://localhost:3000");
    const todoGateway = new TodoMemoryGateway();
    const wrapper = mount(TodoListViewVue, {
        global: {
            provide: {
                todoGateway
            }
        }
    });
    await sleep(100);
    console.log(wrapper.html());
    expect(wrapper.get(".completed").text()).toBe("33%");
});