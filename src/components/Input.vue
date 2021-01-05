<template>
  <div>
    <h2>新規タスクの追加</h2>
    <input v-model='task'>
    <button @click="doAdd(task)">追加</button>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        task: ''
      }
    },
    methods: {
      doAdd() {
        this.$store.dispatch('doAdd', this.task)
        this.task = '';
      },
    }
  } 
</script>