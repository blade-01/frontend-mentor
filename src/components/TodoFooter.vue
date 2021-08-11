<template>
  <div class="todo-footer">
    <small>Drag and drop to reorder</small>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.todo-footer {
  text-align: center;
  margin: 1.5rem 0 0;
  color: var(--completed-color);
  font-weight: bold;
}
</style>