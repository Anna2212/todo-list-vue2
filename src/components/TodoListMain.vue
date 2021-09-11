<template>
  <div class="hello">
    <h1>Todos</h1>
    <div class="list-wrapper">
      <create-todo/>
      <todo-list/>
    </div>
  </div>
</template>

<script>
  import List from '@/components/List';
  import CreateTodo from '@/components/CreateTodo';

  export default {
    name: 'TodoListMain',
    components: {
      'todo-list': List,
      'create-todo': CreateTodo
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-wrapper {
  width: 50%;
  margin: 0 auto;
}
</style>
