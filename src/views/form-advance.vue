<template>
  <div class="page">
      <ef-header title="表单页" titleEn="Goods Management"></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="3" :open-names="['1']">
           <MenuItem name="1" @click="jump('#/home/')">
             <i class="icon icon-banner"></i>
             基础表单
           </MenuItem>
           <MenuItem name="2">
             <i class="icon icon-cat"></i>
             分步表单
           </MenuItem>
           <MenuItem name="3">
             <i class="icon icon-promotion"></i>
             高级表单
           </MenuItem>
         </Menu>
       </div>
       <div class="main-content main-content-bottom-btn">
         <div class="main-content-box">
           <div class="main-content-header">
             <Breadcrumb>
               <BreadcrumbItem to="/">首页</BreadcrumbItem>
               <BreadcrumbItem to="/components/breadcrumb">表单页</BreadcrumbItem>
               <BreadcrumbItem>高级表单</BreadcrumbItem>
             </Breadcrumb>
             <h2 class="page-h2">高级表单</h2>
             <p class="pad-b-20 gray-text">
               高级表单常见于一次性输入和提交大批量数据的场景。</p>
           </div>
           <div class="main-content-body">
             <Card :bordered="false" dis-hover >
              <p slot="title">仓库管理</p>
               <Form  label-position="top">
              <Row :gutter="24">
                <Col :span="8">
                  <FormItem label="仓库名">
                    <Input ></Input>
                  </FormItem>
                </Col>
                <Col :span="8">
                <FormItem label="仓库域名">
                  <Input v-model="value12">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                  </Input>
                </FormItem>
                </Col>
                <Col :span="8">
                <FormItem label="仓库管理员">
                  <Select v-model="model1" >
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>

                 <Row :gutter="24">
                   <Col :span="8">
                   <FormItem label="审批人">
                     <Select v-model="model1" >
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </FormItem>
                   </Col>
                   <Col :span="8">
                   <FormItem label="生效日期">
                     <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 100%"></DatePicker>
                   </FormItem>
                   </Col>
                   <Col :span="8">
                   <FormItem label="仓库类型">
                     <Select v-model="model1" >
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </FormItem>
                   </Col>
                 </Row>

               </Form>

             </Card>

             <Card :bordered="false" dis-hover >
               <p slot="title">任务管理</p>
               <Form  label-position="top">
                 <Row :gutter="24">
                   <Col :span="8">
                   <FormItem label="任务名">
                     <Input ></Input>
                   </FormItem>
                   </Col>
                   <Col :span="8">
                   <FormItem label="任务描述">
                     <Input ></Input>
                   </FormItem>
                   </Col>
                   <Col :span="8">
                   <FormItem label="执行人">
                     <Select v-model="model1" >
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </FormItem>
                   </Col>
                 </Row>

                 <Row :gutter="24">
                   <Col :span="8">
                   <FormItem label="责任人">
                     <Select v-model="model1" >
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </FormItem>
                   </Col>
                   <Col :span="8">
                   <FormItem label="生效日期">
                     <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 100%"></DatePicker>
                   </FormItem>
                   </Col>
                   <Col :span="8">
                   <FormItem label="任务类型">
                     <Select v-model="model1" >
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </FormItem>
                   </Col>
                 </Row>
               </Form>

             </Card>

             <Card :bordered="false" dis-hover >
               <p slot="title">成员管理</p>
               <Table :columns="columns1" :data="data1"></Table>
               <div class="pad-t-24">
                 <Button type="dashed" long>+ 新增成员</Button>
               </div>
             </Card>
           </div>
         </div>
         <footer class="clearfix">
            <span class="pull-left">2017 © Easy Front</span>
            <span class="pull-right"><img src="../assets/images/logo-footer.png" alt=""></span>
         </footer>
         <div class="bottom-btn">
           <Button type="primary" class="pull-right">提交</Button>
         </div>
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
        current: 0,
        value11: '',
        value12: '',
        value13: '',
        select1: 'http',
        select2: 'com',
        select3: 'day',
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
      next () {
        if (this.current === 2) {
          this.current = 0;
        } else {
          this.current += 1;
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
