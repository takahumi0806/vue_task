<template>
  <div id="app">
    <header>
      <h1>TODOリスト</h1>
      <input  type="radio" name="status" value="すべて" v-model='select'>すべて
      <input  type="radio" name="status" value="作業中" v-model='select'>作業中
      <input  type="radio" name="status" value="完了" v-model='select'>完了
    </header>
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
        <th>   </th>
      </tr>
      <tr v-for="(todo, key) in doSelect(this.select)" :key="key">
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
      select:'すべて',
    }
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
