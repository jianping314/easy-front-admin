<template>
     <header>
         <a href="#" class="logo pull-left"><img src="../assets/images/logo-header.png" alt=""></a>
         <p class="pull-left">
           <span>
             <slot>{{title}}</slot>
           </span>
           <span>
             <slot>{{titleEn}}</slot>
           </span>
         </p>
         <div class="pull-right">
           <span class="avatar"><img src="../assets/images/demo/avatar.jpg" alt=""></span>
           <span>qian.qing@aliyun.com</span>
           <a href="#" class="icon icon-setting"></a>
           <a href="#" class="icon icon-quit"></a>
         </div>
     </header>

</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data () {
      return {
      };
    },
    props: {
      title: {
        type: String,
        default: '官网设置'
      },
      titleEn: {
        type: String,
        default: 'Official Site Setting'
      }
    },
    methods: {
      ...mapMutations([
        'UPDATE_CUSTOMER_INFO'
      ]),
      getCustomerInfo () {
        this.UPDATE_CUSTOMER_INFO({});
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
