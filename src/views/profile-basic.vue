<template>
  <div class="page">
      <ef-header title="表单页" titleEn="Goods Management"></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="1" :open-names="['1']">
           <MenuItem name="1" @click="jump('#/home/')">
             <i class="icon icon-banner"></i>
             基础详情页
           </MenuItem>
           <MenuItem name="2">
             <i class="icon icon-cat"></i>
             高级详情页
           </MenuItem>
         </Menu>
       </div>
       <div class="main-content">
         <div class="main-content-box">
           <div class="main-content-header">
             <Breadcrumb>
               <BreadcrumbItem to="/">首页</BreadcrumbItem>
               <BreadcrumbItem to="/components/breadcrumb">详情页</BreadcrumbItem>
               <BreadcrumbItem>基础详情页</BreadcrumbItem>
             </Breadcrumb>
             <h2 class="page-h2">基础详情页</h2>
           </div>

           <div class="main-content-body">
             <Card :bordered="false" dis-hover class="profile-card">
               <h3 class="pad-b-20">退款申请</h3>
               <Row :gutter="24"  class="pad-b-20">
                 <Col :span="8">
                 <div class="term">取货单号</div><div class="detail">1000000000</div>
                 </Col>
                 <Col :span="8">
                 <div class="term">状态</div><div class="detail">已取货</div>
                 </Col>
                 <Col :span="8">
                 <div class="term">销售单号</div><div class="detail">1234123421</div>
                 </Col>
               </Row>
               <Row :gutter="24"  class="pad-b-20">
                 <Col :span="8">
                 <div class="term">子订单</div><div class="detail">3214321432</div>
                 </Col>
               </Row>
               <h3 class="pad-tb-20 border-t-1">用户信息</h3>
               <Row :gutter="24"  class="pad-b-20">
                 <Col :span="8">
                 <div class="term">用户姓名</div><div class="detail">付小小</div>
                 </Col>
                 <Col :span="8">
                 <div class="term">联系电话</div><div class="detail">18100000000</div>
                 </Col>
                 <Col :span="8">
                 <div class="term">常用快递</div><div class="detail">菜鸟仓储</div>
                 </Col>
               </Row>
               <Row :gutter="24"  class="pad-b-20">
                 <Col :span="8">
                 <div class="term">取货地址</div><div class="detail">浙江省杭州市西湖区万塘路18号</div>
                 </Col>
                 <Col :span="8">
                 <div class="term">备注</div><div class="detail">无</div>
                 </Col>
               </Row>

               <h3 class="pad-tb-20 border-t-1">退货商品</h3>
               <Table :columns="columns1" :data="data1"></Table>

               <h3 class="pad-tb-20 border-t-1">退货进度</h3>
               <Table :columns="columns1" :data="data1"></Table>
             </Card>

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
