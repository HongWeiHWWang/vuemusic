<template lang="html">
  <div class="index">
    <ul>
      <li>
        <router-link to="/home">
          首页
          <!--<img src="../assets/logo-ea5.png" alt="">-->
        </router-link>
      </li>
      <li>
        <router-link to="/artists">
          歌手
        </router-link>
      </li>
      <li>
        <router-link to="/listcate">
          榜单
        </router-link>
      </li>
      <li>
        <router-link to="/ucenter">
          我的
        </router-link>
      </li>
      <li>
        <router-link to="/search">
          搜索
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {msg: '初始代模板'}
    }
  }
</script>

<style scoped>
  .index box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 154px;
    background: #ff2308;
    -webkit-background-size: cover;
    background-size: cover;
    z-index: 100;
    overflow: hidden;
  }

  .index img{
    width: 26px;
    height: 26px;
  }

  .index ul{
    display: flex;
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
  }

  .index ul li {
    flex: 1;
    text-align: center;
  }

  .index ul li a{
    font-size: 16px;
    color: #999;
  }
</style>
