<template>
  <div class="todo-list">
    <todo-list-item v-for="n in 3" :key="n" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
