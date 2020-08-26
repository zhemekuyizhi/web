<template>
  <div id="app">
    <!-- <router-link to = "/home" >首页</router-link> -->
    <!-- <router-link to = "/about">关于</router-link> -->
    <!-- <router-view></router-view>   -->

<!--     <router-link to = "/home" tag = "button">首页</router-link>
    <router-link to = "/about" tag = "button" replace>关于</router-link>
    <router-view></router-view> -->

    <h2>我是组件</h2>
<!--     <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>
    <router-view></router-view> -->

<!--     <router-link to = "/home" tag = "button">首页</router-link>
    <router-link to = "/about" tag = "button">关于</router-link>
    <router-link to = "/user/zhangsan" >用户</router-link>
    <router-link :to = "'/user/'+userId" >用户</router-link>
    <h2>{{userId}}</h2>
    <router-view></router-view> -->
    
    <router-link to = "/home" >首页</router-link>
    <router-link to = "/about">关于</router-link>
    <router-link :to = "'/user/'+userId" >用户</router-link>
    <router-link :to ="{path:'/profile',query:{name:'why',age:18,height:1.88}}">文档</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style scoped>
.router-link-active{
  color:blue
}
</style>
<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'zhangsan'
    }
  },
  computed:{
    userId(){
      this.$route.params.userId
    }
  },
  methods:{
    homeclick(){
      this.$router.push('/home')
    },
    aboutclick(){
      this.$router.push('/about')
    }
  }
}
</script>


