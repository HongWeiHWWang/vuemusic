<template lang="html">
  <div>
    <Title :name="this.$route.params.name" :avatar="this.$route.params.avatar"/>
    <List :ting_uid="this.$route.params.ting_uid"/>
  </div>
</template>

<script>
  import Title from "../../components/details/title"
  import List from "../../components/details/list"

  export default {
    name:"details",
    data() {
      return {msg: '初始代模板'}
    },
    components:{
      Title,
      List
    }
  }
</script>

<style lang="css">
  body {

  }
</style>
