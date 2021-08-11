<template class="todo-list">
  <div class="todo-list">
    <draggable :list="todos" item-key="name"  ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="dragging = false" @drag="checkMove" @drop="checkMove">
      <template #item="{ element }">
        <div class="todo-list-item">
          <p class="box" :class="{isComplete: element.completed}">
          <input :checked="element.completed" type="checkbox" name="complete" :id="element.id" @change="$emit('mark-todo')" v-model="element.completed">
          <span class="check"></span>
          <label :for="element.id">{{element.content}}</label>
          </p>
          <button @click="$emit('del-todo', todo)"><img class="close" src="../assets/img/icon-cross.svg" alt="" /></button>
        </div>
      </template>
    </draggable>
    <div class="todo-list-item bottom-item">
      <small>{{ todos.length ? todos.length : 'No'}} items left</small>
      <button @click="$emit('clear-todo')">Clear Completed</button>
    </div>
  </div>
  <todo-filter @show-completed="$emit('show-completed')" @show-all="$emit('show-all')" @show-active="$emit('show-active')"/>
</template>

<script>
import draggable from 'vuedraggable';
import TodoFilter from '@/components/TodoFilter.vue'

export default {
  name: 'TodoList',
  props: ['todos'],
  emits: ['del-todo', 'clear-todo', 'show-completed', 'show-active', 'show-all', 'mark-todo', 'store-drag'],
  components: {TodoFilter, draggable},
  data() {
    return {
      enabled: true,
      dragging: false
    };
  },
  methods: {
    checkMove(drag) {
      // const draggedItem = e.draggedContext.futureIndex;
      this.$emit('store-drag', drag)
    }
  }
}
</script>

<style scoped>
.todo-list {
  background: var(--card-bg);
  border-radius: 5px;
}
.todo-list .todo-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  border-bottom: solid 1px var(--border);
  color: var(--card-color);
  position: relative;
}
.todo-list .todo-list-item .box {
  display: flex;
  align-items: center;
  user-select: none;
}
.todo-list .todo-list-item input, 
.todo-list .todo-list-item label {
  cursor: pointer;
}
.todo-list .todo-list-item label {
  position: absolute;
  z-index: 10;
  padding-left: 50px;
  margin-right: 2rem;
}
.todo-list .todo-list-item input {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.todo-list .todo-list-item input:checked ~ .check {
  background: var(--check-bg);
}
.todo-list .todo-list-item input:checked ~ .check::after {
  opacity: 1;
  transform: scale(1);
}
.check {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 100px;
  border: 1px solid var(--border);
  border-image-slice: 1;
  transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
}
.check::after {
  content: '';
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 4;
  position: absolute;
  transform: scale(0);
  background-size: 50%;
  background-image: url('../assets/img/icon-check.svg');
  background-repeat: no-repeat;
  background-position: center;
  transition-delay: 0.2s !important;
  transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
}
.isComplete label {
  text-decoration: line-through;
  color: var(--completed-color);
}
.todo-list .todo-list-item .close {
  width: 12px;
  cursor: pointer;
}
.todo-list .bottom-item button,
.todo-list .bottom-item small{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--completed-color);
  font-weight: bold;
}
.todo-list .bottom-item {
  padding: 1rem;
  border-bottom: none;
}
@media screen and (min-width: 700px) {
  .todo-list {
    border-radius: 5px 5px 0 0;
  }
  .todo-list .todo-list-item:last-child {
    border-bottom: solid 1px var(--border);
  }
}
</style>