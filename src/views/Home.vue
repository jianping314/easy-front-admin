<template>
  <div class="home">
     <header>
       <div class="w1110">
         <a href="#" class="logo"><img src="../assets/images/logo.png" alt=""></a>
         <div class="pull-right">
           <span class="avatar"><img src="../assets/images/demo/avatar.jpg" alt=""></span>
           <span>qian.qing@aliyun.com</span>
           <a href="#" class="icon icon-setting"></a>
           <a href="#" class="icon icon-quit"></a>
         </div>
       </div>
     </header>

     <div class="home-content w1110 clearfix">
       <ul class="home-list clearfix pull-left">
         <li>
           <a href="#" class="home-list-setting">
             <span class="home-list-icon"></span>
             <div class="home-list-enter">
               <div class="home-list-title">
                 <h3 class="gray-text">Official Site Setting</h3>
                 <h4>官网设置</h4>
               </div>
               <p class="home-list-hover"><span>进入平台</span> <Icon type="ios-arrow-right"></Icon></p>
             </div>
           </a>
         </li>
         <li>
           <a href="#" class="home-list-crm">
             <span class="home-list-icon"></span>
             <div class="home-list-enter">
               <div class="home-list-title">
                 <h3 class="gray-text">Customer Management</h3>
                 <h4>客户管理</h4>
               </div>
               <p class="home-list-hover"><span>进入平台</span> <Icon type="ios-arrow-right"></Icon></p>
             </div>
           </a>
         </li>
         <li>
           <a href="#" class="home-list-goods">
             <span class="home-list-icon"></span>
             <div class="home-list-enter">
               <div class="home-list-title">
                 <h3 class="gray-text">Goods Management</h3>
                 <h4>商品管理</h4>
               </div>
               <p class="home-list-hover"><span>进入平台</span> <Icon type="ios-arrow-right"></Icon></p>
             </div>
           </a>
         </li>
         <li>
           <a href="#" class="home-list-order">
             <span class="home-list-icon"></span>
             <div class="home-list-enter">
               <div class="home-list-title">
                 <h3 class="gray-text">Order Management</h3>
                 <h4>订单管理</h4>
               </div>
               <p class="home-list-hover"><span>进入平台</span> <Icon type="ios-arrow-right"></Icon></p>
             </div>
           </a>
         </li>
       </ul>

       <div class="pull-right center-text">
         <a href="#" class="icon icon-edit gray-text"></a>
         <div class="home-user-box">
           <span class="avatar"><img src="../assets/images/demo/avatar.jpg" alt=""></span>
           <p>qian.qing@aliyun.com</p>
         </div>
         <h3 class="divider"><span>近期登入</span></h3>
         <p>2017-08-28 22:21:37</p>
         <p>IP：1.202.33.106</p>
       </div>

     </div>

     <footer>
       <div class="w1110">
         2017 © Easy Front
       </div>
     </footer>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data () {
      return {
      };
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
