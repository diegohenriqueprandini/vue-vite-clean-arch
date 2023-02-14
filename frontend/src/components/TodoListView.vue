<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import axios from "axios";

    const data: any = reactive({ todos: [] });
    const description = ref("");

    async function addItem(itemDescription: string) {
        if (!itemDescription) return;
        if (data.todos.some((item: any) => item.description === itemDescription)) return;
        if (data.todos.filter((item: any) => !item.done).length > 4) return;
        const item = { id: uuid(), description: itemDescription, done: false };
        data.todos.push(item);
        description.value = "";
        await axios.post("http://localhost:3000/todos", item);
    }

    async function removeItem(item: any) {
        data.todos.splice(data.todos.indexOf(item), 1);
        await axios.delete(`http://localhost:3000/todos/${item.id}`);
    }

    async function toggleDone(item: any) {
        item.done = !item.done
        await axios.put(`http://localhost:3000/todos/${item.id}`, item);
    }

    const completed = computed(() => {
        const total = data.todos.length;
        if (total === 0)
            return 0;
        const done = data.todos.filter((todo: any) => todo.done).length;
        return Math.round((done/total) * 100);
    });

    onMounted(async () => {
        const response = await axios.get("http://localhost:3000/todos")
        data.todos = response.data;
    });

    function uuid() {
        return Math.floor(Math.random() * 1000);
    }
</script>

<template>
    <div v-if="data.todos.length === 0">No itens</div>
    <span class="completed">{{ completed }}%</span>
    <div v-for="item in data.todos">
        <span v-bind:style="{ 'text-decoration': (item.done) ? 'line-through' : '' }">{{ item.id }} {{ item.description }}</span>
        <button @click="removeItem(item)">Remove</button>
        <button @click="toggleDone(item)">Done/Undone</button>
    </div>
    <input type="text" v-model="description" @keyup.enter="addItem(description)" />    
</template>

<style scoped>
</style>