<template>
  <div class="todo-form">
    <form @submit.prevent="addTodo">
      <div class="circle"></div>
      <input type="text" placeholder="Create a new todo..." v-model="todoContent" />
    </form>
    <div class="alert" ref="errs">{{err}}</div>
  </div>
</template>

<script>
import uuid from 'uuid'
export default {
  name: 'TodoForm',
  emits: ['add-todo'],
  props: ['todos'],
  data() {
    return {
      todoContent: '',
      err: '',
    }
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: uuid.v4(),
        content: this.todoContent,
        completed: false,
      }
      if (this.todoContent !== "") {
        this.$emit('add-todo', newTodo);
        this.showAlert('Todo Created!', 'success');
      } else {
        this.showAlert("Can't create empty todo", 'err');
      }
      this.todoContent = '';
    },
    showAlert(mssg, className) {
      this.err = mssg;
      this.$refs.errs.classList.add(className);
      setTimeout(() => {
        this.$refs.errs.classList.remove(className);
        this.err = '';
      }, 2000);
    }
  },
}
</script>

<style scoped>
.todo-form form {
  position: relative;
}
.todo-form form .circle {
  width: 20px;
  height: 20px;
  background: none;
  border: solid 1px var(--border);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
}
.todo-form form input {
  outline: none;
  border: solid 1px var(--border);
  display: block;
  width: 100%;
  padding: 1rem 2.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  background: var(--card-bg);
  color: var(--card-color);
  cursor: pointer;
}
.todo-form form:hover .circle {
  border: dashed 1px var(--border);
}
.todo-form form input:focus {
  border: dashed 1px var(--border);
}
.todo-form form input::placeholder {
  color: var(--completed-color);
  font-weight: bold;
}
.alert {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff;
  border-radius: 0 0 5px 5px;
  transition: all 0.5s ease-in-out;
  font-size: 12px;
  padding: 0.5rem 1rem;
}
.err {
  background: var(--check-bg);
  top: 0;
  border-bottom: solid 1px rgb(270, 70, 49);
}
.success {
  background: var(--check-bg);
  top: 0;
  border-bottom: 1px solid rgb(2, 209, 74);
}
</style>