<template>
  <Todo />
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>
@import './assets/css/themes.css';
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  background: var(--body-bg);
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.5s ease;
}
button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.container {
  width: 90%;
  margin: auto;
  overflow: hidden;
}
@media screen and (min-width: 700px) {
  .container {
    width: 500px;
  }
}
</style>
