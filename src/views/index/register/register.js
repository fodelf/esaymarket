/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-27 11:17:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 17:48:55
 */
export default {
  name: 'Register',
  data () {
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    /**
     * @name: goLogin
     * @description: 立即登录
     */
    goLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    /**
     * @name: register
     * @description: 注册
     */
    register () {

    }
  }
}
