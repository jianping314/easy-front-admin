<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
  html,body{ height: 100%;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>
