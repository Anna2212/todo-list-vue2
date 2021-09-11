<template>
  <div id="app">
    <TodoListMain/>
  </div>
</template>

<script>
  import TodoListMain from './components/TodoListMain.vue'

  export default {
    name: 'App',
    components: {
      TodoListMain
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
