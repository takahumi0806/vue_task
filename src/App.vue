<template>
  <div id="app">
    <header>
      <h1>TODOリスト</h1>
      <input  type="radio" name="status" value="すべて" v-model='display'>すべて
      <input  type="radio" name="status" value="作業中" v-model='display'>作業中
      <input  type="radio" name="status" value="完了" v-model='display'>完了
    </header>
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
        <th>   </th>
      </tr>
      <tr v-for="(todo, key) in doSelect(this.display)" :key="key">
        <td>{{todo.id}}</td>
        <td> {{todo.todo}}</td>
        <td><button @click="doStatus(todo.id)">{{todo.status}}</button></td>
        <td><button @click="doDelete(todo.id)">削除</button></td>
      </tr>
    </table>
    <div>
      <h2>新規タスクの追加</h2>
      <input v-model="task">
      <button @click="doAdd(task)">追加</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
      return {
        task: '',
        display:'すべて',
      }
    },
  computed: {
    all() {
      return this.$store.getters.getTodos
    },
    done() {
      return this.$store.getters.getDone('完了')
    },
    working() {
      return this.$store.getters.getDone('作業中')
    },
  },
  methods: {
    doAdd() {
      this.$store.dispatch('doAdd', this.task)
      this.task = '';
    },
    doStatus(id) {
      this.$store.dispatch('doStatus', id)
    },
    doDelete(id) {
      this.$store.dispatch('doDelete', id)
    },
    doSelect: function (status) {
      if(status==="すべて"){
        return this.$store.getters.getTodos
      } else {
        return this.$store.getters.getDone(status)
      }
      
    },
  }
}
</script>
