/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-08-27 11:17:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-08-24 17:48:55
 */
import { register } from '@/api/index/login.js'
import md5 from 'js-md5'
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
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          let param = {
            username: this.ruleForm.userName,
            password: md5(this.ruleForm.password)
          }
          register(param).then((res) => {
            console.log('注册成功')
            this.$router.push({
              path: '/login'
            })
          }).catch(() => {

          })
        } else {
          return false
        }
      })
    }
  }
}
