<script setup lang="ts">
import { ref, reactive, onMounted, computed, inject } from 'vue';
import TodoGateway from '../gateways/TodoGateway';
import TodoList from '../entities/TodoList';
import TodoListComponent from './TodoListComponent.vue';
import Item from '../entities/Item';

const todoGateway = inject("todoGateway") as TodoGateway;

const data: any = reactive({ todoList: new TodoList() });

onMounted(async () => {
    const todoList = await todoGateway.getTodoList();

    todoList.register("addItem", async (item: Item) => {
        await todoGateway.addItem(item);
    });

    todoList.register("removeItem", async (item: Item) => {
        await todoGateway.removeItem(item.id);
    });

    todoList.register("toggleDone", async (item: Item) => {
        await todoGateway.updateItem(item);
    });

    data.todoList = todoList;
});
</script>

<template>
    <TodoListComponent :todo-list="data.todoList"></TodoListComponent>
</template>

<style scoped>
</style>