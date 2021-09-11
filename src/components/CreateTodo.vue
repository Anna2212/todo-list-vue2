<template>
  <div class="create-todo">
    <div class="input-wrapper">
      <label for="todo">Todo:</label>
      <input id="todo" v-model="todo" type="text" class="input-todo">
    </div>

    <button class="save-button" @click="saveTodo">Save</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import VUEX_MODULES from '@/store/vuex.modules';
  import VUEX_NAMESPACES from '@/store/vuex.namespaces';

  export default {
    name: 'CreateTodo',

    data: () => ({
      todo: null
    }),

    methods: {
      ...mapActions(VUEX_MODULES.LIST, {
        todoSave: VUEX_NAMESPACES.LIST.SAVE_TODO
      }),
      getRandomInt(max) {
        return Math.floor(Math.random() * max);
      },
      async saveTodo() {
        let todo = {
          title: this.todo,
          completed: false,
          userId: this.getRandomInt(10)
        }
        await this.todoSave(todo)
        this.todo = null
      }
    }
  }
</script>

<style scoped>
  .create-todo {
    display: flex;
    justify-content: space-between;
  }
  .input-wrapper {
    display: flex;
    width: 95%;
  }
  .input-todo {
    width: 100%;
    margin-left: 5px;
  }
  .save-button {
    width: 70px;
    cursor: pointer;
    background: #005c64;
    border: 1px solid #005c64;
    border-radius: 5px;
    color: white;
    margin: 0 0 0 10px;
    padding: 5px;
  }
  .save-button:hover {
    background: #018d99;
    border: 1px solid #018d99;
  }
</style>
