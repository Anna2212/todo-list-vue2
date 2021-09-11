<template>
  <div class="list">
    <ul>
      <li v-for="(todo) in todoList" :key="`todo-${todo.id}`" class="list-todo-item">
        <span :class="{ 'todo-complete': todo.completed }">{{todo.title}}</span>

        <div class="action-wrapper">
          <button v-if="!todo.completed" class="success-button" @click="updateTodo(todo)">Complete</button>
          <button v-if="todo.completed" class="restore-button" @click="updateTodo(todo)">Restore</button>
          <button class="delete-button" @click="deleteTodo(todo)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import VUEX_MODULES from '@/store/vuex.modules';
  import VUEX_NAMESPACES from '@/store/vuex.namespaces';
  export default {
    name: 'List',

    computed: {
      ...mapGetters(VUEX_MODULES.LIST, {
        todoList: VUEX_NAMESPACES.LIST.GET_TODOS
      })
    },

    async created() {
      await this.getList()
    },

    methods: {
      ...mapActions(VUEX_MODULES.LIST, {
        getList: VUEX_NAMESPACES.LIST.GET_TODOS,
        todoUpdate: VUEX_NAMESPACES.LIST.UPDATE_TODO,
        todoDelete: VUEX_NAMESPACES.LIST.DELETE_TODO
      }),
      async updateTodo(todo) {
        const payload = {
          ...todo,
          completed: !todo.completed
        }
        await this.todoUpdate(payload)
      },
      async deleteTodo(todo) {
        await this.todoDelete(todo.id)
      }
    }
  }
</script>

<style scoped>
  ul {
    padding-left: 0;
  }
  .list-todo-item {
    text-align: left;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }
  .todo-complete {
    text-decoration: line-through;
  }
  .action-wrapper {
    display: flex;
  }
  .success-button {
    width: 70px;
    cursor: pointer;
    background: darkgreen;
    border: 1px solid darkgreen;
    border-radius: 5px;
    color: white;
    margin: 0 10px 0 0;
    padding: 5px;
  }
  .success-button:hover {
    background: #018a01;
    border: 1px solid #018a01;
  }
  .restore-button {
    width: 70px;
    cursor: pointer;
    background: darkblue;
    border: 1px solid darkblue;
    border-radius: 5px;
    color: white;
    margin: 0 10px 0 0;
    padding: 5px;
  }
  .restore-button:hover {
    cursor: pointer;
    background: #0202b1;
    border: 1px solid #0202b1;
    border-radius: 5px;
    color: white;
  }
  .delete-button {
    width: 70px;
    cursor: pointer;
    background: darkred;
    border: 1px solid darkred;
    border-radius: 5px;
    color: white;
    padding: 5px;
  }
  .delete-button:hover {
    background: #a90101;
    border: 1px solid #a90101;
  }
</style>
