<template>
  <div id="app">
    <header>
      <h1>TODOリスト</h1>
      <input  type="radio" name="status" value="すべて" v-model='display'>すべて
      <input  type="radio" name="status" value="作業中" v-model='display'>作業中
      <input  type="radio" name="status" value="完了" v-model='display'>完了
    </header>
    <table v-if="this.display=='すべて'">
      <Table/>
      <tr v-for="(todo, key) in all" :key="key">
        <td>{{todo.id}}</td>
        <td> {{todo.todo}}</td>
        <td><button @click="doStatus(todo.id)">{{todo.status}}</button></td>
        <td><button @click="doDelete(todo.id)">削除</button></td>
      </tr>
    </table>

    <table v-else-if="this.display=='作業中'">
      <Table/>
      <tr v-for="(todo, key) in working" :key="key">
        <td>{{todo.id}}</td>
        <td> {{todo.todo}}</td>
        <td><button @click="doStatus(todo.id)">{{todo.status}}</button></td>
        <td><button @click="doDelete(todo.id)">削除</button></td>
      </tr>
    </table>

    <table v-else-if="this.display=='完了'">
      <Table/>
      <tr v-for="(todo, key) in done" :key="key">
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
import Table from './components/Table.vue'
export default {
  components: {
    Table
  },
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
    }
  }
}
</script>
