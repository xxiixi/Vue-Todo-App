<template>
  <main>
    <div class="container">
      <h1>xxiixi Todo-list</h1>
      <!-- Add todo -->
      <div class="input-add">
        <input type="text" name="todo" />
        <button>
          <i class="plus"></i>
        </button>
      </div>
      <!-- filters -->
      <div class="filters">
        <span class="filter active">All</span>
        <span class="filter">Finished</span>
        <span class="filter">Not Start</span>
      </div>
      <div class="todo-list">
        <div class="todo-item">
          <!-- 用 label 包裹后，点击里边任何一个元素都能触发 checkbox 的事件 -->
          <label>
            <input type="checkbox" />
            Todo 1
            <!-- 自定义的复选按钮 -->
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 2
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 3
            <span class="check-button"></span>
          </label>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
