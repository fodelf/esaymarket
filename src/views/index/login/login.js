/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-27 19:10:55
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-27 20:27:41
 */
import { login } from '@/api/index/login.js'
import { setToken } from '@/utils/auth'
import md5 from 'js-md5'
export default {
  name: 'Login',
  data () {
    // 这里存放数据
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    /**
     * @name: login
     * @description: 登录
     */
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          var param = {
            userName: this.ruleForm.userName,
            password: md5(this.ruleForm.password)
          }
          login(param)
            .then(res => {
              setToken(res.token)
              sessionStorage.setItem('userId', res.userId)
              sessionStorage.setItem('userName', this.ruleForm.userName)
              this.$router.push({
                path: '/'
              })
            })
            .catch(() => {})
        } else {
          return false
        }
      })
    },
    /**
     * @name: goRegister
     * @description: 立即注册
     */
    goRegister () {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
