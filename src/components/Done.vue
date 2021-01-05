<template>
  <div class="edit-form">
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
        <th>   </th>
      </tr>
      <tr v-for='(item, key) in done' :key="key">
        <td>{{item.id}}</td>
        <td> {{item.item}}</td>
        <td><button @click='doStatus(item.id)'>{{item.status}}</button></td>
        <td><button @click='doDelete(item.id)'>削除</button></td>
      </tr>
    </table>
    <Input/>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
export default {
  name: 'EditForm',
  components: {
    Input
  },
  data: function () {
    return {
      task: ''
    }
  },
  computed: {
    done() {
      return this.$store.getters.getDone('完了')
    },
  },
  methods: {
    doStatus(id) {
      this.$store.dispatch('doStatus', id)
    },
    doDelete(id) {
      this.$store.dispatch('doDelete', id)
    }
  }
}
</script>
