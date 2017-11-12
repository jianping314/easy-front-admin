<template>
  <div class="home">
     <header>
       <div class="w1110">
         <a href="#" class="logo"><img src="../assets/images/logo.png" alt=""></a>
         <div class="pull-right">

           <Badge count="2" class="header-alert">
             <!--<a href="#" class="icon icon-alert" @click="popupDown"></a>
             <div class="drop-down" :class="[hide, visualHidden]">
               <div class="ivu-poptip-arrow"></div>

             </div>-->

             <Poptip placement="bottom" width="336">
               <a href="#" class="icon icon-alert"></a>
               <div class="api" slot="content">
                 <Tabs value="name1" type="card" class="header-alert-tab">
                   <TabPane label="通知（2）" name="name1">
                     <ul class="list list-split">
                       <li class="list-item">
                         <div class="list-item-meta flexbox">
                           <div class="list-item-meta-avatar">
                             <span class="avatar">
                               <img src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png">
                             </span>
                           </div>
                           <div class="list-item-meta-content">
                             <h4 class="list-item-meta-title">
                               <div class="title">你收到了 14 份新周报
                                 <div class="extra"></div>
                               </div>
                             </h4>
                             <div class="list-item-meta-description"><div>
                               <div class="description"></div>
                               <div class="datetime">3 个月前</div>
                             </div>
                             </div>
                           </div>
                         </div>
                       </li>
                       <li class="list-item">
                         <div class="list-item-meta flexbox">
                           <div class="list-item-meta-avatar">
                             <span class="avatar">
                               <img src="https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png">
                             </span>
                           </div>
                           <div class="list-item-meta-content">
                             <h4 class="list-item-meta-title">
                               <div class="title">左侧图标用于区分不同的类型
                                 <div class="extra"></div>
                               </div>
                             </h4>
                             <div class="list-item-meta-description"><div>
                               <div class="description"></div>
                               <div class="datetime">3 个月前</div>
                             </div>
                             </div>
                           </div>
                         </div>
                       </li>
                       <li class="list-item">
                         <div class="list-item-meta flexbox">
                           <div class="list-item-meta-avatar">
                             <span class="avatar">
                               <img src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png">
                             </span>
                           </div>
                           <div class="list-item-meta-content">
                             <h4 class="list-item-meta-title">
                               <div class="title">你推荐的 曲妮妮 已通过第三轮面试
                                 <div class="extra"></div>
                               </div>
                             </h4>
                             <div class="list-item-meta-description"><div>
                               <div class="description"></div>
                               <div class="datetime">3 个月前</div>
                             </div>
                             </div>
                           </div>
                         </div>
                       </li>
                     </ul>
                     <div class="clear">清除通知</div>

                     <div class="notFound hide">
                       <img src="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg" alt="not found">
                       <div>你已查看所有通知</div>
                     </div>
                   </TabPane>
                   <TabPane label="消息" name="name2">
                     <div class="notFound">
                       <img src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg" alt="not found">
                       <div>您已读完所有消息</div>
                     </div>
                   </TabPane>
                   <TabPane label="代办" name="name3">
                     <div class="notFound">
                       <img src="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg" alt="not found">
                       <div>你已完成所有待办</div>
                     </div>
                   </TabPane>
                 </Tabs>
               </div>
             </Poptip>
           </Badge>

           <Dropdown trigger="click" placement="bottom-end">
             <a href="javascript:void(0)">
               <span class="avatar"><img src="../assets/images/demo/avatar.jpg" alt=""></span>
               <span>qian.qing@aliyun.com</span>
               <Icon type="arrow-down-b"></Icon>
             </a>
             <DropdownMenu slot="list" class="user-dropdown">
               <DropdownItem><i class="icon icon-setting"></i> 个人设置</DropdownItem>
               <DropdownItem divided><i class="icon icon-quit"></i> 退出登录</DropdownItem>
             </DropdownMenu>
           </Dropdown>
         </div>
       </div>
     </header>

     <div class="home-content w1110 clearfix">
       <ul class="home-list clearfix pull-left">
         <li>
           <a href="#" class="home-list-basic">
             <span class="home-list-icon"></span>
             <div class="home-list-enter">
               <div class="home-list-title">
                 <h3 class="gray-text">Base Setting</h3>
                 <h4>基础设置</h4>
               </div>
               <p class="home-list-hover"><span>进入平台</span> <Icon type="ios-arrow-right"></Icon></p>
             </div>
           </a>
         </li>
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
        hide: 'hide',
        visualHidden: 'visualHidden'
      };
    },
    methods: {
      ...mapMutations([
        'UPDATE_CUSTOMER_INFO'
      ]),
      getCustomerInfo () {
        this.UPDATE_CUSTOMER_INFO({});
      },
      popupDown() {
        if (this.hide) {
          this.hide = '';
          setTimeout(() => {
            this.visualHidden = '';
          }, 100);
        } else {
          this.visualHidden = 'visualHidden';
          setTimeout(() => {
            this.hide = 'hide';
          }, 500);
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
