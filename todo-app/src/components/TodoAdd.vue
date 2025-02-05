<template>
  <!-- Add todo -->
  <div class="input-add">
    <!-- 1. 在 todo-add 组件中，首先需要一个 v-model，用于同步用户输入的 todo 内容，这里还是在 setup 函数中，定义一个 ref，默认值为空，然后返回它，传递给 input 的 v-model 属性： -->
    <input type="text" v-model="todoContent" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoAdd",
  props: {
    tid: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const todoContent = ref("");

    const emitAddTodo = () => {
      const todo = {
        id: props.tid,
        content: todoContent.value,
        completed: false,
      };
      context.emit("add-todo", todo);
      todoContent.value = "";
    };

    return {
      todoContent,
      emitAddTodo,
    }; // Removed the extra comma here
  },
};
</script>

<style>
/* 添加框 */
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}

.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}

.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;
  color: white;
  position: absolute;
  right: 0px;

  cursor: pointer;
}

/* 通过纯css实现加号 */
.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
