<template>
  <div class="page">
      <ef-header title="表单页" titleEn="Goods Management"></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="2" :open-names="['1']">
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
               <BreadcrumbItem>分步表单</BreadcrumbItem>
             </Breadcrumb>
             <h2 class="page-h2">分步表单</h2>
             <p class="pad-b-20 gray-text">将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
           </div>

           <div class="main-content-body">
             <Card :bordered="false" dis-hover class="form-step-card">
               <div class="form-step-wrap">
                 <Steps :current="current">
                   <Step title="填写转账信息"></Step>
                   <Step title="确认转账信息"></Step>
                   <Step title="完成"></Step>
                 </Steps>
               </div>

               <div class="form-basic-wrap pad-t-34" :class="current===0? 'show':'hide'">
                 <Form :label-width="100">
                   <FormItem label="付款账户:">
                     <Select v-model="model1" >
                       <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                     </Select>
                   </FormItem>
                   <FormItem label="收款账户:">
                     <Input v-model="value12">
                       <Select v-model="select1" slot="prepend" style="width: 80px">
                         <Option value="http">http://</Option>
                         <Option value="https">https://</Option>
                       </Select>
                     </Input>
                   </FormItem>
                   <FormItem label="收款人姓名:">
                     <Input  placeholder="Enter something..."></Input>
                   </FormItem>
                   <FormItem label="转账金额:">
                     <Input >
                     <span slot="prepend">￥</span>
                     </Input>
                   </FormItem>
                   <FormItem label="">
                     <Button type="primary" @click="next">下一步</Button>
                   </FormItem>
                 </Form>
                 <div class="form-rules">
                   <h3 class="pad-b-20">说明</h3>
                   <h4>转账到支付宝账户</h4>
                   <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                 </div>
               </div>

               <div class="form-basic-wrap pad-t-34" :class="current===1? 'show':'hide'">
                 <Alert  show-icon closable>
                   确认转账后，资金将直接打入对方账户，无法退回。
                 </Alert>

                 <Form :label-width="100" class="pad-t-24">
                   <FormItem label="付款账户：">
                     ant-design@alipay.com
                   </FormItem>
                   <FormItem label="收款账户：">
                     test@example.com
                   </FormItem>
                   <FormItem label="转账金额：">
                     <span class="font-24">500</span> （伍佰元整）
                   </FormItem>
                  <FormItem label="支付密码：" class="border-t-1 pad-t-24">
                     <Input style="width: 50%"  placeholder="Enter something..."></Input>
                  </FormItem>
                  <FormItem label="">
                    <Button type="primary" @click="next">提交</Button>
                    <Button type="ghost" @click="next">上一步</Button>
                  </FormItem>
                </Form>

               </div>

               <div class="form-basic-wrap pad-t-34" :class="current===2? 'show':'hide'">
                  <div class="center-text form-step-result">
                    <Icon type="ios-checkmark"></Icon>
                    <h2>操作成功</h2>
                    <p class="gray-text">预计两小时内到账</p>
                  </div>

                 <Form :label-width="100" class="form-step-sum">
                   <FormItem label="付款账户：">
                     ant-design@alipay.com
                   </FormItem>
                   <FormItem label="收款账户：">
                     test@example.com
                   </FormItem>
                   <FormItem label="转账金额：">
                     <span class="font-24">500</span> （伍佰元整）
                   </FormItem>
                 </Form>
                 <p class="center-text pad-tb-20">
                   <Button type="primary" @click="next">再转一笔</Button>
                   <Button type="ghost" @click="next">查看账单</Button>
                 </p>

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
