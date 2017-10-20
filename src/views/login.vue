<template>
  <div class="login flexbox">
     <div class="login-box">
        <h1 class="center-text"><img src="../assets/images/logo.png" alt=""></h1>
        <div class="login-content">
          <div class="login-graphic img-auto pull-left">
            <img src="../assets/images/login.png" alt="">
          </div>
          <div class="login-form pull-right flexbox">
            <Form ref="formInline" :rules="ruleInline" >
              <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="账号">
                <Icon class="icon icon-user" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon class="icon icon-password" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <Checkbox v-model="checked">记住密码</Checkbox>
              <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')" size="large" long>登录</Button>
              </FormItem>
            </Form>
          </div>
        </div>
     </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        checked: true,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
