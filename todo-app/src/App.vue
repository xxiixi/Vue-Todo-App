<template>
  <main>
    <div class="container">
      <h1>xxiixi Todo-list</h1>
      <!-- 4. 然后，通过@add-todo 监听 todo-add 组件的事件，使用 addTodo 这个函数处理事件。再给 todo-add 组件传递一个 tid 属性，用于生成新的 todo 的 id，这里简单的就是数组的长度。 -->
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>
// 1. 如果我们直接在里边使用一个普通变量定义数据的话，那么后边更新数据，组件是不会刷新的，那么该怎么定义呢？Vue3 中提供了两个新的 Api，分别是 ref 和 reactive，用它们包装后的数据，在修改之后就可以引起组件刷新了，它们的区别是，ref 适合包装基本类型数据或简单的数据，reactive 则用于包装复杂的对象数据。我们这里使用 ref 包装一个空的数组，作为默认 todo 列表的数据：
import { ref } from "vue";

import TodoAdd from "./components/TodoAdd.vue";
import TodoList from "./components/TodoList.vue";
import TodoFilter from "./components/TodoFilter.vue";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    TodoAdd,
    TodoList,
    TodoFilter,
  },
  setup() {
    const todos = ref([]);
    // 2. 然后，再定义一个添加 todo 函数，它通过事件接收一个 todo 参数，保存了 todo 的信息，然后把它追加到 todo 列表中：
    const addTodo = (todo) => {
      todos.value.push(todo);
    };
    const filter = ref("all");
    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed);
        case "todo":
          return todos.value.filter((todo) => !todo.completed);
        default:
          return todos.value;
      }
    });

    // 3. 为了在 template 中使用数据和函数，我们需要在 setup 中，以对象的形式返回它们：
    return {
      todos,
      filter,
      addTodo,
      filteredTodos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
