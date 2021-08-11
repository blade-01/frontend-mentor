<template>
  <div class="todo-filter" @click="toggleActive">
    <button @click="$emit('show-all')">All</button>
    <button @click="$emit('show-active')">Active</button>
    <button @click="$emit('show-completed')">Completed</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  emits: ['show-completed', 'show-all', 'show-active'],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.todo-filter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 5px;
  margin-top: 1rem;
}
.todo-filter button {
  color: var(--completed-color);
  font-weight: bold;
}
/* .todo-filter button:hover,
.todo-filter button:active {
  color: var(--card-color);
} */
.todo-filter z.isActive {
  color: var(--blue-bright);
}
@media screen and (min-width: 700px) {
  .todo-filter {
    border-radius: 0 0 5px 5px;
    margin-top: 0;
  }
}
</style>