<script setup lang="ts">
import { ref, reactive, onMounted, computed, inject } from 'vue';
import TodoGateway from '../gateways/TodoGateway';
import TodoList from '../entities/TodoList';

const todoGateway = inject("todoGateway") as TodoGateway;

const data: any = reactive({ todoList: new TodoList() });
const description = ref("");

// await todoGateway.addItem(item);
// await todoGateway.removeItem(item.id);
// await todoGateway.updateItem(item);

// onMounted(async () => {
//     data.todos = await todoGateway.getItens();
// });
</script>

<template>
    <div v-if="data.todoList.itens.length === 0">No itens</div>
    <span class="completed">{{ data.todoList.getCompleted() }}%</span>
    <div v-for="item in data.todoList.itens">
        <span v-bind:style="{ 'text-decoration': (item.done) ? 'line-through' : '' }">{{ item.id }} {{ item.description }}</span>
        <button @click="data.todoList.removeItem(item)">Remove</button>
        <button @click="data.todoList.toggleDone(item)">Done/Undone</button>
    </div>
    <input type="text" v-model="description" @keyup.enter="data.todoList.addItem(description)" />    
</template>

<style scoped>
</style>