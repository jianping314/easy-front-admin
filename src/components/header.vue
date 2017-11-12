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
           <Badge count="2" class="header-alert">
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
