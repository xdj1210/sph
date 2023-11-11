<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import List from './list'
import Recommend from './recommend'
import Rank from './rank'
import Like from './like'
import Floor from './floor'
import Brand from './brand'
  export default {
    name:'Home',
    components:{
      List,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>

<style scoped>
  
</style>