<template>
  <div>
    <table>
      <Table/>
      <tr v-for="(item, key) in message" :key="key">
        <td>{{item.id}}</td>
        <td> {{item.item}}</td>
        <td><button @click="doStatus(item.id)">{{item.status}}</button></td>
        <td><button @click="doDelete(item.id)">削除</button></td>
      </tr>
      </table>
      <Input/>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Table from '../components/Table.vue'
export default {
  components: {
    Input,
    Table
  },
  data: function () {
    return {
      task: ''
    }
  },
  computed: {
    message() {
      return this.$store.getters.getMessage
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
    }
  }
}
</script>
