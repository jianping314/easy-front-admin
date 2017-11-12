<template>
  <div class="page">
      <ef-header></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="2" :open-names="['1']">
           <MenuItem name="1" @click="jump('#/home/')">
             <i class="icon icon-banner"></i>
             轮播图设置
           </MenuItem>
           <MenuItem name="2">
             <i class="icon icon-cat"></i>
             栏目设置
           </MenuItem>
           <MenuItem name="3">
             <i class="icon icon-promotion"></i>
             活动页设置
           </MenuItem>

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
         <div class="main-content-header">
         <Breadcrumb>
           <BreadcrumbItem to="/">首页</BreadcrumbItem>
           <BreadcrumbItem to="/components/breadcrumb">官网设置</BreadcrumbItem>
           <BreadcrumbItem>栏目设置</BreadcrumbItem>
         </Breadcrumb>
           <h2 class="page-h2">栏目设置</h2>
         </div>
         <div class="main-content-body">
           <Card :bordered="false" dis-hover>
             <div class="main-content-top clearfix">
               <Button type="primary" shape="circle" class="pull-left" icon="plus">新增</Button>
             </div>
           <Table :columns="columns1" :data="data1"></Table>
           <div class="pad-t-24 clearfix">
             <Page :total="100" class="right-text" show-sizer></Page>
           </div>
           </Card>
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
  import efHeader from '../components/header.vue';

  export default {
    components: {
      efHeader: efHeader
      },
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
        model1: '',
        columns1: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '序号',
            width: 100,
            key: 'order'
          },
          {
            title: '名称',
            key: 'name',
            align: 'center',
            render: (h, params) => {
              return h('a', {
                attrs: {
                    href: '#'
                },
                on: {
                  click: () => {
                    this.remove(params.index);
                  }
                }
              }, params.row.name);
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'ghost',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data1: [
          {
            name: '舌尖上的黑猪Banner',
            order: 1001,
            address: '北京市朝阳区芍药居',
            status: '已发布',
            pic: 'http://myunonline-pigplanet.oss-cn-shanghai.aliyuncs.com/zzxq/image/16833841772456304.jpg'
          },
          {
            name: '舌尖上的黑猪Banner1',
            order: 1002,
            address: '北京市海淀区西二旗',
            status: '未发布',
            pic: 'http://myunonline-pigplanet.oss-cn-shanghai.aliyuncs.com/zzxq/image/6339539048417002.jpg'
          },
          {
            name: '舌尖上的黑猪Banner',
            order: 1001,
            address: '北京市朝阳区芍药居',
            status: '已发布',
            pic: 'http://myunonline-pigplanet.oss-cn-shanghai.aliyuncs.com/zzxq/image/16833841772456304.jpg'
          },
          {
            name: '舌尖上的黑猪Banner1',
            order: 1002,
            address: '北京市海淀区西二旗',
            status: '未发布',
            pic: 'http://myunonline-pigplanet.oss-cn-shanghai.aliyuncs.com/zzxq/image/6339539048417002.jpg'
          },
          {
            name: '舌尖上的黑猪Banner',
            order: 1001,
            address: '北京市朝阳区芍药居',
            status: '已发布',
            pic: 'http://myunonline-pigplanet.oss-cn-shanghai.aliyuncs.com/zzxq/image/16833841772456304.jpg'
          },
          {
            name: '舌尖上的黑猪Banner1',
            order: 1002,
            address: '北京市海淀区西二旗',
            status: '未发布',
            pic: 'http://myunonline-pigplanet.oss-cn-shanghai.aliyuncs.com/zzxq/image/6339539048417002.jpg'
          }
        ]
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
