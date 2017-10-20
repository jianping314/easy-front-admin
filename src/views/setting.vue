<template>
  <div class="page">
     <header>
         <a href="#" class="logo pull-left"><img src="../assets/images/logo-header.png" alt=""></a>
         <p class="pull-left"><span>官网设置</span><span>Official Site Setting</span></p>
         <div class="pull-right">
           <span class="avatar"><img src="../assets/images/demo/avatar.jpg" alt=""></span>
           <span>qian.qing@aliyun.com</span>
           <a href="#" class="icon icon-setting"></a>
           <a href="#" class="icon icon-quit"></a>
         </div>
     </header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="1-1" :open-names="['1']">
           <Submenu name="1">
             <template slot="title">
               <Icon class="icon icon-banner"></Icon>
               轮播图设置
             </template>
             <MenuItem name="1-1">文章管理</MenuItem>
             <MenuItem name="1-2">评论管理</MenuItem>
             <MenuItem name="1-3">举报管理</MenuItem>
           </Submenu>
           <Submenu name="2">
             <template slot="title">
               <Icon class="icon icon-cat"></Icon>
               栏目设置
             </template>
             <MenuItem name="2-1">新增用户</MenuItem>
             <MenuItem name="2-2">活跃用户</MenuItem>
           </Submenu>
           <Submenu name="3">
             <template slot="title">
               <Icon class="icon icon-promotion"></Icon>
               活动页设置
             </template>
             <MenuGroup title="使用">
               <MenuItem name="3-1">新增和启动</MenuItem>
               <MenuItem name="3-2">活跃分析</MenuItem>
               <MenuItem name="3-3">时段分析</MenuItem>
             </MenuGroup>
             <MenuGroup title="留存">
               <MenuItem name="3-4">用户留存</MenuItem>
               <MenuItem name="3-5">流失用户</MenuItem>
             </MenuGroup>
           </Submenu>
          <!-- <Submenu name="4">
             <template slot="title">
               <Icon class="icon icon-promotion"></Icon>
               活动页设置
             </template>
             <MenuGroup title="使用">
               <MenuItem name="4-1">新增和启动</MenuItem>
               <MenuItem name="4-2">活跃分析</MenuItem>
               <MenuItem name="4-3">时段分析</MenuItem>
             </MenuGroup>
             <MenuGroup title="留存">
               <MenuItem name="4-4">用户留存</MenuItem>
               <MenuItem name="4-5">流失用户</MenuItem>
             </MenuGroup>
           </Submenu>-->
         </Menu>
       </div>
       <div class="main-content">
         <div class="main-content-box">
             <h2 class="page-h2">轮播图设置</h2>
             <div class="main-content-top clearfix">
               <Button type="primary" shape="circle" class="pull-left" icon="plus">新增</Button>
               <Input v-model="value4"  icon="search" class="pull-right mar-l-20" placeholder="搜索" style="width: 200px"></Input>
               <Select v-model="model1" class="pull-right" style="width:200px">
                 <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
               </Select>
             </div>
         </div>
         <footer class="clearfix">
            <span class="pull-left">2017 © Easy Front</span>
            <span class="pull-right"><img src="../assets/images/logo-footer.png" alt=""></span>
         </footer>
       </div>
     </div>


  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data () {
      return {
        theme2: 'light',
        value4: '',
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: ''
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
