<template>
  <div class="page">
      <ef-header title="表单页" titleEn="Goods Management"></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="1" :open-names="['1']">
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
       <div class="main-content">
         <div class="main-content-box">
           <div class="main-content-header">
             <Breadcrumb>
               <BreadcrumbItem to="/">首页</BreadcrumbItem>
               <BreadcrumbItem to="/components/breadcrumb">表单页</BreadcrumbItem>
               <BreadcrumbItem>基础表单</BreadcrumbItem>
             </Breadcrumb>
             <h2 class="page-h2">基础表单</h2>
             <p class="pad-b-20 gray-text">表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</p>
           </div>

           <div class="main-content-body">
             <Card :bordered="false" dis-hover>
                <div class="form-basic-wrap">
                  <Form :label-width="100">
                    <FormItem label="标题:">
                      <Input  placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="起止日期:">
                      <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 100%"></DatePicker>
                    </FormItem>
                    <FormItem label="目标描述:">
                      <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="衡量标准:">
                      <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="客户（选填）:">
                      <Input  placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="目标公开:">
                      <RadioGroup v-model="animal">
                        <Radio label="金斑蝶"></Radio>
                        <Radio label="爪哇犀牛"></Radio>
                        <Radio label="印度黑羚"></Radio>
                      </RadioGroup>
                      <p class="gray-text">客户、邀评人默认被分享</p>
                    </FormItem>
                    <FormItem label="">
                      <Button type="primary">提交</Button>
                      <Button type="ghost">保存</Button>
                    </FormItem>
                  </Form>
                </div>


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
            key: 'order'
          },
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '轮播图',
            key: 'pic',
            width: '480',
            className: 'img-inside',
            align: 'center',
            render: (h, params) => {
              return h('img', {
                attrs: {
                  src: params.row.pic,
                  alt: '',
                  width: '433px',
                  height: '147px'
                }
              });
            }
          },
          {
            title: '状态',
            key: 'status',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('tag', {
                  props: {
                    type: 'border',
                    color: params.row.status === '已发布' ? 'blue' : ' '
                  }
                }, params.row.status)
              ]);
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
