<template>
  <div class="todo">
    <div class="todo-head">
      <div class="container">
        <todo-header />
      </div>
    </div>
    <div class="todo-body">
      <div class="container">
        <todo-form @add-todo="addTodo" :todos="todos" />
        <todo-list
          :todos="todos"
          @del-todo="deleteTodo"
          @clear-todo="clearCompleted"
          @show-completed="showCompleted"
          @show-all="showAll"
          @show-active="showActive"
          @mark-todo="markCompleted"
          @store-drag="storeDrag"
        />
        <todo-footer />
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoFooter from "@/components/TodoFooter.vue";
export default {
  name: "Todo",
  components: {
    TodoHeader,
    TodoList,
    TodoForm,
    TodoFooter,
  },
  data() {
    return {
      todos: [
        {
          id: 0,
          content: "Complete Todo App on Frontend Mentor",
          completed: true,
        },
        {
          id: 1,
          content: "Complete online JavaScript course",
          completed: true,
        },
        {
          id: 2,
          content: "Jog around the park 3x",
          completed: false,
        },
        {
          id: 3,
          content: "10 minutes meditation",
          completed: false,
        },
        {
          id: 4,
          content: "Read for 1 hour",
          completed: false,
        },
        {
          id: 5,
          content: "Pick up groceries",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      if (!todo) {
        return;
      }
      this.todos = [...this.todos, todo];
      todo = "";
      this.saveTodos();
    },
    markCompleted(todo) {
      this.saveTodos(todo);
    },
    storeDrag(drag) {
      this.saveTodos(drag);
    },
    saveTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this.saveTodos();
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => todo.completed == !true);
      this.saveTodos();
    },
    showCompleted() {
      this.todos = JSON.parse(localStorage.getItem("todos")).filter(
        (todo) => todo.completed == true);
    },
    showAll() {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    },
    showActive() {
      this.todos = JSON.parse(localStorage.getItem("todos")).filter(
        (todo) => todo.completed == false);
    },
  },
  mounted() {
    this.todos = [...this.todos];
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
};
</script>

<style scoped>
.todo {
  position: relative;
}
.todo-head {
  background: var(--mobile-header-bg);
  height: 30vh;
  width: 100%;
}
.todo-body {
  position: absolute;
  top: 55%;
  left: 0%;
  width: 100%;
}
@media screen and (min-width: 1000px) {
  .todo-head {
    background: var(--desktop-header-bg);
    height: 35vh;
    width: 100%;
  }
  .todo-body {
    top: 50%;
  }
}
</style>
