<template>
  <div class="todo-list">
    <!-- 2. 然后使用 v-for 遍历列表，渲染 todo-list-item，我们通过 todo-item 属性把 todo 的信息传递给 todo-list-item： -->
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  // 1. 使用 props 属性接收父组件传递进来的 todo 列表数据：
  props: ["todos"],
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
