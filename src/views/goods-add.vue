<template>
  <div class="page">
      <ef-header title="商品管理" titleEn="Goods Management"></ef-header>

     <div class="main-wrap">
       <div class="nav-wrap">
         <Menu :theme="theme2" width="200px" active-name="1" :open-names="['1']">
           <MenuItem name="1" @click="jump('#/home/')">
             <i class="icon icon-goods"></i>
             商品列表
           </MenuItem>
           <MenuItem name="2" @click="jump('#/home/')">
             <i class="icon icon-category"></i>
             商品分类设置
           </MenuItem>
           <MenuItem name="3" @click="jump('#/home/')">
             <i class="icon icon-units"></i>
             商品单位设置
           </MenuItem>
         </Menu>
       </div>
       <div class="main-content">
         <div class="main-content-header">
         <Breadcrumb>
           <BreadcrumbItem to="/">首页</BreadcrumbItem>
           <BreadcrumbItem to="/components/breadcrumb">商品管理</BreadcrumbItem>
           <BreadcrumbItem>新增商品</BreadcrumbItem>
         </Breadcrumb>
           <h2 class="page-h2">新增商品
             <div class="page-submit">
               <Button type="primary">保存</Button>
               <Button>取消</Button>
             </div>
           </h2>
         </div>


         <div class="main-content-body">
           <Card :bordered="false" dis-hover>
             <p slot="title">基础信息</p>
           <Form :model="formTop" label-position="top" >
             <Row :gutter="16">
               <Col span="8">
                 <FormItem label="商品名称" >
                   <Input  value=""></Input>
                 </FormItem>
               </Col>
               <Col span="8">
                  <FormItem label="商品分类" >
                    <Select v-model="model1" placeholder="分类" >
                      <Option v-for="item in cityList"  :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </FormItem>
               </Col>
               <Col span="8">
                 <FormItem label="计量单位" >
               <Select v-model="model1" placeholder="单位" >
                 <Option v-for="item in cityList"  :value="item.value" :key="item.value">{{ item.label }}</Option>
               </Select>
             </FormItem>
               </Col>
             </Row>
             <Row :gutter="16">
               <Col span="8">
               <FormItem label="商品价格" >
                 <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
               </FormItem>
               </Col>
             </Row>
           </Form>
           </Card>

           <Card :bordered="false" dis-hover>
             <p slot="title">商品规格</p>
             <Button slot="extra" type="ghost"  shape="text"><Icon type="plus"></Icon> 新增</Button>

           <Table :columns="columns1" :data="data1"></Table>
           </Card>

           <Card :bordered="false" dis-hover>
             <p slot="title"> 商品图片 <span class="gray-text font-14">最多20张，默认第一张图片作为主图，可以拖动图片调整</span></p>
           <div class="goods-upload-list" v-for="item in uploadList">
             <template v-if="item.status === 'finished'">
               <img :src="item.url">
               <div class="goods-upload-list-cover">
                 <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                 <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
               </div>
             </template>
             <template v-else>
               <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
             </template>
           </div>
           <Upload
             ref="upload"
             :show-upload-list="false"
             :default-file-list="defaultList"
             :format="['jpg','jpeg','png']"
             :max-size="2048"
             multiple
             type="drag"
             action="//jsonplaceholder.typicode.com/posts/"
             style="display: inline-block;width:148px;">
             <div style="width: 148px;height:148px;line-height: 148px;">
               <Icon type="camera" size="40"></Icon>
             </div>
           </Upload>
           <Modal title="查看图片" v-model="visible">
             <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
           </Modal>
           </Card>

             <Card :bordered="false" dis-hover>
               <p slot="title">商品详情</p>
           <textarea id="articleEditor"></textarea>

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
  import tinymce from 'tinymce';

  export default {
    components: {
      efHeader: efHeader
      },
    data () {
      return {
        theme2: 'light',
        value4: '',
        value1: 1,
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        imgName: '',
        visible: false,
        uploadList: [],
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
    },
    mounted () {
      tinymce.init({
        selector: '#articleEditor',
        branding: false,
        elementpath: false,
        height: 600,
        language: 'zh_CN.GB2312',
        menubar: 'edit insert view format table tools',
        theme: 'modern',
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
          'searchreplace visualblocks visualchars code fullscreen fullpage',
          'insertdatetime media nonbreaking save table contextmenu directionality',
          'emoticons paste textcolor colorpicker textpattern imagetools codesample'
        ],
        toolbar1: ' newnote print fullscreen preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
        autosave_interval: '20s',
        image_advtab: true,
        table_default_styles: {
          width: '100%',
          borderCollapse: 'collapse'
        }
      });
    },
    destroyed () {
      tinymce.get('articleEditor').destroy();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
