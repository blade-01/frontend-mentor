<template>
  <div class="todo-header">
    <h1>todo</h1>
    <div class="icons">
      <input type="checkbox" id='theme-switch' class='theme-switch' v-model="lightMode" @click="toggleTheme"/>
        <label for='theme-switch'>
          <span v-if="lightMode === true">
             <img alt="logo" src="../assets/img/icon-moon.svg" width="25">
          </span>
          <span v-else>
            <img alt="logo" src="../assets/img/icon-sun.svg" width="25">
          </span>
        </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      lightMode: false,
    }
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("light");
    }
  }
}
</script>

<style scoped>
.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--header-color);
  padding: 4rem 0;
}
.todo-header h1 {
  text-transform: uppercase;
  letter-spacing: 0.8rem;
  font-weight: bolder;
}
.todo-header input.theme-switch {
  display: none;
}
.todo-header input.theme-switch + label {
  cursor: pointer;
}
.todo-header input.theme-switch:not(:checked) + label:hover {
  cursor: pointer;
}
.todo-header input.theme-switch + label:active,
.todo-header input.theme-switch:checked + label {
  cursor: pointer;
}
</style>