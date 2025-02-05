<template>
  <!-- filters -->
  <div class="filters">
    <span class="filter active">All</span>
    <span class="filter">Finished</span>
    <span class="filter">Not Start</span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
};
</script>

<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>
