<template>
  <div class="page">
      <ef-header title="订单管理" titleEn="Order Management"></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="1" :open-names="['1']">
           <MenuItem name="1" @click="jump('#/home/')">
             <i class="icon icon-order"></i>
             订单列表
           </MenuItem>
         </Menu>
       </div>
       <div class="main-content">
         <div class="main-content-header">
         <Breadcrumb>
           <BreadcrumbItem to="/">首页</BreadcrumbItem>
           <BreadcrumbItem to="/components/breadcrumb">订单管理</BreadcrumbItem>
           <BreadcrumbItem>订单详情</BreadcrumbItem>
         </Breadcrumb>
           <h2 class="page-h2">订单详情
             <div class="page-submit">
               <Button>返回</Button>
             </div>
           </h2>
         </div>


         <div class="main-content-body">
           <Card :bordered="false" dis-hover>
           <Tabs value="name1">
             <TabPane label="订单详情" name="name1">

               <div class="flexbox order-info">
                 <div>
                   <p class="center-text">
                     <span class="gray-text">订单状态</span>
                     <span class="font-20 display-block red-text">待付款</span>
                   </p>
                 </div>
                 <div>
                   <p class="center-text">
                     <span class="gray-text">订单号</span>
                     <span class="font-20 display-block">1033427</span>
                   </p>
                 </div>
                 <div>
                   <p class="center-text">
                     <span class="gray-text">订单编码</span>
                     <span class="font-20 display-block">O201708023</span>
                   </p>
                 </div>
                 <div>
                   <p class="center-text">
                     <span class="gray-text">订单金额</span>
                     <span class="font-20 display-block red-text">￥29.8</span>
                   </p>
                 </div>
                 <div class="center-text">
                   <Button type="warning" shape="circle">取消订单</Button>
                 </div>
               </div>

               <Table :columns="columns1" :data="data1"></Table>
               <div class="pad-t-14 clearfix">
                 <Page :total="100" class="right-text" show-sizer></Page>
               </div>

               <Row :gutter="16" class="pad-t-34">
                 <Col span="8">
                   <Card>
                     <p slot="title">收货信息</p>
                     <p>收货人: 蕙兰测试</p>
                     <p>联系方式: 13600000001</p>
                     <p>收货地址: 浙江省-嘉兴市-南湖区 测试地址</p>
                   </Card>
                 </Col>
                 <Col span="8">
                 <Card>
                   <p slot="title">发货时间</p>

                 </Card>
                 </Col>
                 <Col span="8">
                 <Card>
                   <p slot="title">备注说明</p>
                   <a href="#" slot="extra" @click.prevent="changeLimit">
                     <Icon type="plus"></Icon>
                     添加备注
                   </a>
                   <p class="">
                     备注备注备注备注备注备注备注  备注备注备注备注备注备注备注
                     备注备注备注备注备注备注备注   备注备注备注备注备注备注备注备注备注 <a href="#">查看全部</a>
                   </p>
                 </Card>
                 </Col>
               </Row>


             </TabPane>
             <TabPane label="物流信息" name="name2">标签二的内容</TabPane>
             <TabPane label="操作日志" name="name3">标签三的内容</TabPane>
           </Tabs>





</Card>
         </div>
         <footer class="clearfix">
            <span class="pull-left">2017 © Easy Front</span>
            <span class="pull-right"><img src="../assets/images/logo-footer.png" alt=""></span>
         </footer>
       </div>
     </div>

    <Modal
      v-model="modal1"
      title="商品列表"
      width="70"
      @on-ok="确定"
      @on-cancel="取消">

      <div class="right-text">
        <Form :model="formTop" inline class="circle-input">
          <FormItem label="" >
            <Input  placeholder="商品编码"></Input>
          </FormItem>
          <FormItem label="" >
            <Input  placeholder="商品名称"></Input>
          </FormItem>
          <Button type="primary" shape="circle"><Icon type="ios-search-strong"></Icon> 搜索</Button>
        </Form>
      </div>

      <Table :columns="columns1" :data="data1"></Table>
      <div class="pad-t-14 clearfix">
        <Page :total="100" class="right-text" show-sizer></Page>
      </div>

    </Modal>

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
        advanceSearch: false,
        formTop: {
          input1: '',
          input2: '',
          input3: ''
        },
        label: (h) => {
          return h('div', [
            h('span', '全部客户'),
            h('Badge', {
              props: {
                count: 3,
                className: 'mar-l-6'
              }
            })
          ]);
        },
        label1: (h) => {
          return h('div', [
            h('span', '启用客户'),
            h('span', '(20)')
          ]);
        },
        label2: (h) => {
          return h('div', [
            h('span', '禁用客户'),
            h('span', '')
          ]);
        },
        modal1: false,
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
