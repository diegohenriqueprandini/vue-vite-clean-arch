import { mount } from "@vue/test-utils";
import TodoListViewVue from "../src/components/TodoListView.vue";

function sleep (mili: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, mili);
    });
};

test("Deve testar a tela de todo list", async function () {
    const wrapper = mount(TodoListViewVue, {
    });
    await sleep(100);
    console.log(wrapper.html());
    expect(wrapper.get(".completed").text()).toBe("33%");
});