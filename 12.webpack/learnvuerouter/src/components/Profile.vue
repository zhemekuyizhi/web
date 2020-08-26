<template>
 <div>
     <p>我是文档呵呵呵呵</p>
     <h2>{{$route.query.name}}</h2>
     <h2>{{$route.query.age}}</h2>
     <h2>{{$route.query.height}}</h2>
 </div>
</template>

<script>
export default {
  name: '', 
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>
