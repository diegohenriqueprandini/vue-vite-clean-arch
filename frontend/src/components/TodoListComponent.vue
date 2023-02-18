<script setup lang="ts">
import { ref } from 'vue';

defineProps(
    ["todoList"]
);
const description = ref("");

function cleanData() {
    description.value = "";
}
</script>

<template>
    <div v-if="todoList.items.length === 0">No items</div>
    <span class="completed">{{ todoList.getCompleted() }}%</span>
    <div v-for="item in todoList.items">
        <span v-bind:style="{ 'text-decoration': (item.done) ? 'line-through' : '' }">{{ item.id }} {{ item.description }}</span>
        <button @click="todoList.removeItem(item)">Remove</button>
        <button @click="todoList.toggleDone(item)">Done/Undone</button>
    </div>
    <input type="text" v-model="description" @keyup.enter=" () => { todoList.addItem(description); cleanData(); }" />
</template>

<style scoped>
</style>