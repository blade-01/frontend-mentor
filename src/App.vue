<template :class="{theme:theme}">
  <Todo />
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  },
  // mounted() {
  //   // set page title
  //   document.title = 'Multiple Themes in Vue.js';

  //   // set 'app-background' class to body tag
  //   let bodyElement = document.body;
  //   bodyElement.classList.add("app-background");

  //   // check for active theme
  //   let htmlElement = document.documentElement;
  //   let theme = localStorage.getItem("theme");

  //   if (theme === 'light') {
  //     htmlElement.setAttribute('theme', 'dark')
  //     this.lightMode = true
  //   } else {
  //     htmlElement.setAttribute('theme', 'light');
  //     this.lightMode = false
  //   }
  // },
  // watch: {
  //   lightMode() {
  //     // add/remove class to/from html tag
  //     let htmlElement = document.documentElement;
  //     if (this.lightMode) {
  //       localStorage.setItem("theme", 'light');
  //       htmlElement.setAttribute('theme', 'light');
  //     } else {
  //       localStorage.setItem("theme", 'dark');
  //       htmlElement.setAttribute('theme', 'dark');
  //     }
  //   }
  // }
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
