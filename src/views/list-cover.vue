<template>
  <div class="page">
      <ef-header title="列表页" titleEn="Goods Management"></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="2" :open-names="['1']">
           <MenuItem name="1" @click="jump('#/home/')">
             <i class="icon icon-banner"></i>
             查询表格
           </MenuItem>
           <MenuItem name="2">
             <i class="icon icon-cat"></i>
             搜索列表页
           </MenuItem>
         </Menu>
       </div>
       <div class="main-content">
         <div class="main-content-box">
           <div class="main-content-header">
             <Breadcrumb>
               <BreadcrumbItem to="/">首页</BreadcrumbItem>
               <BreadcrumbItem to="/components/breadcrumb">列表页</BreadcrumbItem>
               <BreadcrumbItem>搜索列表</BreadcrumbItem>
             </Breadcrumb>
             <h2 class="page-h2">搜索列表</h2>
             <div class="list-search-box">
               <Input  placeholder="请输入" size="large">
                <span slot="append">搜索</span>
               </Input>
             </div>
           </div>

           <div class="main-content-body">
             <Card :bordered="false" dis-hover class="profile-card">
                <div class="form-row flexbox-normal">
                  <div class="label">所属类目：</div>
                  <div class="content">
                    <div class="tag-select" :class="listShow? 'tag-select-show':''">
                      <Tag checkable color="blue">全部</Tag>
                      <Tag checkable color="blue">类目一</Tag>
                      <Tag checkable color="blue">类目二</Tag>
                      <Tag checkable color="blue">类目三</Tag>
                      <Tag checkable color="blue">类目四</Tag>
                      <Tag checkable color="blue">类目五</Tag>
                      <Tag checkable color="blue">类目六</Tag>
                      <Tag checkable color="blue">类目七</Tag>
                      <Tag checkable color="blue">类目七</Tag>
                      <Tag checkable color="blue">类目七</Tag>
                      <Tag checkable color="blue">类目七</Tag>
                      <Tag checkable color="blue">类目七</Tag>
                      <Tag checkable color="blue">类目七</Tag>
                      <Tag checkable color="blue">类目三</Tag>
                      <Tag checkable color="blue">类目四</Tag>
                      <Tag checkable color="blue">类目五</Tag>
                      <a href="#" :class="listShow? 'hide':''" @click="listShowHandle">展开 <Icon type="chevron-down"></Icon></a>
                      <a href="#" :class="listShow? '':'hide'" @click="listShowHandle">收起 <Icon type="chevron-up"></Icon></a>
                    </div>
                  </div>
                </div>
               <div class="form-row flexbox-normal">
                 <div class="label">其他选项：</div>
                 <div class="content">
                   <Form :label-width="80" >
                   <Row :gutter="16">
                     <Col :span="8">
                       <FormItem label="作者:" class="mar-0">
                         <Select v-model="model1" >
                           <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                         </Select>
                       </FormItem>

                     </Col>
                     <Col :span="8">
                     <FormItem label="好评度:" class="mar-0">
                       <Select v-model="model1" >
                         <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                       </Select>
                     </FormItem>

                     </Col>
                   </Row>
                   </Form>
                 </div>
               </div>
             </Card>

             <Row type="flex" justify="center" align="top" :gutter="24">
               <Col :span="6">
                   <div class="list-cover-card">
                     <div class="card-cover img-auto">
                       <img src="https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png" alt="">
                     </div>
                     <div class="card-body">
                       <div class="card-content">
                         <h3>标题标题标题</h3>
                         <p>生命就像一盒巧克力，结果往往出人意料</p>
                       </div>
                       <div class="card-meta">
                         <span class="gray-text font-12">4 小时前</span>
                       </div>
                     </div>
                   </div>
               </Col>
               <Col :span="6">
               <div class="list-cover-card">
                 <div class="card-cover img-auto">
                   <img src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" alt="">
                 </div>
                 <div class="card-body">
                   <div class="card-content">
                     <h3>标题标题标题</h3>
                     <p>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</p>
                   </div>
                   <div class="card-meta">
                     <span class="gray-text font-12">4 小时前</span>
                   </div>
                 </div>
               </div>
               </Col>
               <Col :span="6">
               <div class="list-cover-card">
                 <div class="card-cover img-auto">
                   <img src="https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png" alt="">
                 </div>
                 <div class="card-body">
                   <div class="card-content">
                     <h3>标题标题标题</h3>
                     <p>生命就像一盒巧克力，结果往往出人意料</p>
                   </div>
                   <div class="card-meta">
                     <span class="gray-text font-12">4 小时前</span>
                   </div>
                 </div>
               </div>
               </Col>
               <Col :span="6">
               <div class="list-cover-card">
                 <div class="card-cover img-auto">
                   <img src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" alt="">
                 </div>
                 <div class="card-body">
                   <div class="card-content">
                     <h3>标题标题标题</h3>
                     <p>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</p>
                   </div>
                   <div class="card-meta">
                     <span class="gray-text font-12">4 小时前</span>
                   </div>
                 </div>
               </div>
               </Col>
               <Col :span="6">
               <div class="list-cover-card">
                 <div class="card-cover img-auto">
                   <img src="https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png" alt="">
                 </div>
                 <div class="card-body">
                   <div class="card-content">
                     <h3>标题标题标题</h3>
                     <p>生命就像一盒巧克力，结果往往出人意料</p>
                   </div>
                   <div class="card-meta">
                     <span class="gray-text font-12">4 小时前</span>
                   </div>
                 </div>
               </div>
               </Col>
               <Col :span="6">
               <div class="list-cover-card">
                 <div class="card-cover img-auto">
                   <img src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" alt="">
                 </div>
                 <div class="card-body">
                   <div class="card-content">
                     <h3>标题标题标题</h3>
                     <p>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</p>
                   </div>
                   <div class="card-meta">
                     <span class="gray-text font-12">4 小时前</span>
                   </div>
                 </div>
               </div>
               </Col>
               <Col :span="6">
               <div class="list-cover-card">
                 <div class="card-cover img-auto">
                   <img src="https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png" alt="">
                 </div>
                 <div class="card-body">
                   <div class="card-content">
                     <h3>标题标题标题</h3>
                     <p>生命就像一盒巧克力，结果往往出人意料</p>
                   </div>
                   <div class="card-meta">
                     <span class="gray-text font-12">4 小时前</span>
                   </div>
                 </div>
               </div>
               </Col>
               <Col :span="6">
               <div class="list-cover-card">
                 <div class="card-cover img-auto">
                   <img src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png" alt="">
                 </div>
                 <div class="card-body">
                   <div class="card-content">
                     <h3>标题标题标题</h3>
                     <p>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</p>
                   </div>
                   <div class="card-meta">
                     <span class="gray-text font-12">4 小时前</span>
                   </div>
                 </div>
               </div>
               </Col>
             </Row>

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
        listShow: false,
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
      },
      listShowHandle() {
        this.listShow = !this.listShow;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
