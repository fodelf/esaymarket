import { login } from '@/api/index/login.js'
import { setToken } from '@/utils/auth'
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
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /**
     * @name: login
     * @description: 登录
     */
    login () {
      login(this.form).then((res) => {
        setToken(res.token)
        sessionStorage.setItem('userId', res.userId)
        this.$router.push({
          path: '/'
        })
      }).catch(() => {

      })
    //   this.$router.push({
    //     path: '/'
    //   })
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
