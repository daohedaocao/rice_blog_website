<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/22 10:37-->
<!--#@Author : rice_straw-->
<!--#@File : logInRegister.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>登录注册</h2>-->
  <div class="login_register_container">
    <div class="left"></div>
    <div class="right">
      <el-tabs v-model="activeName" class="login-tabs">
        <!--        登录-->
        <el-tab-pane label="登录" name="first">
          <div class="container">
            <div>
              <div class="form-control">
                <input
                  v-model="login_form.username"
                  type="text"
                  :style="{ borderBottom: login_inputs_err.username }"
                  required
                  @blur="isLoginForm('login_username')"
                  @focus="isLoginFormFocus('login_username')"
                />
                <label>
                  <span style="transition-delay: 0ms">手</span>
                  <span style="transition-delay: 50ms">机</span>
                  <span style="transition-delay: 100ms">号</span>
                  <span style="transition-delay: 150ms">/</span>
                  <span style="transition-delay: 200ms">邮</span>
                  <span style="transition-delay: 250ms">箱</span>
                </label>
                <i style="display: block; color: red; position: absolute; right: 0">
                  {{ login_form_err.username }}
                </i>
              </div>

              <div class="form-control">
                <input
                  v-model="login_form.password"
                  :type="login_input_type"
                  :style="{ borderBottom: login_inputs_err.password }"
                  required
                  @blur="isLoginForm('login_password')"
                  @focus="isLoginFormFocus('login_password')"
                />
                <label v-if="is_pwd_login">
                  <span style="transition-delay: 0ms">密</span>
                  <span style="transition-delay: 50ms">码</span>
                </label>
                <label v-else>
                  <span style="transition-delay: 0ms">验</span>
                  <span style="transition-delay: 50ms">证</span>
                  <span style="transition-delay: 100ms">码</span>
                </label>
                <el-button v-show="is_verify_login" plain class="verify_button" @click="GetVerify2"
                  >获取验证码
                </el-button>
                <el-button v-show="is_verify_login2" plain class="verify_button"
                  >{{ is_verify_num2 }} S
                </el-button>
                <i style="display: block; color: red; position: absolute; right: 0">
                  {{ login_form_err.password }}
                </i>
              </div>

              <!--              <input type="submit" class="btn2" value="登录" @click="loginComeIn" />-->
              <button class="btn2" @click="loginComeIns">登录</button>
              <!--              <button @click="logins">登录</button>-->

              <p class="text">
                没有账号? <a style="cursor: pointer" @click="Toggle">注册</a>
                <a
                  v-if="is_verify_pwd"
                  style="float: right; cursor: pointer"
                  @click="VerifyLogin(true)"
                  >验证码登录</a
                >
                <a v-else style="float: right; cursor: pointer" @click="VerifyLogin(false)"
                  >密码登录</a
                >
              </p>
            </div>
          </div>
          <div class="img_logins">
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
          </div>
          <span class="hint"><router-link to="/">不注册,直接进入！</router-link></span>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <!--          注册-->
          <div class="container">
            <div>
              <div class="form-control">
                <input
                  v-model="register_form.username"
                  type="text"
                  required
                  :style="{ borderBottom: register_input_err.username }"
                  @blur="onBlur('username')"
                  @focus="onFocus('username')"
                />
                <label>
                  <span style="transition-delay: 0ms">用</span>
                  <span style="transition-delay: 50ms">户</span>
                  <span style="transition-delay: 100ms">名</span>
                </label>
                <i style="display: block; color: red; position: absolute; right: 0">
                  {{ register_form_err.username }}
                </i>
              </div>
              <div class="form-control">
                <input
                  v-model="register_form.tel"
                  type="text"
                  required
                  :style="{ borderBottom: register_input_err.tel }"
                  @blur="onBlur('tel')"
                  @focus="onFocus('tel')"
                />
                <label>
                  <span style="transition-delay: 0ms">手</span>
                  <span style="transition-delay: 50ms">机</span>
                  <span style="transition-delay: 100ms">号</span>
                </label>
                <i style="display: block; color: red; position: absolute; right: 0">
                  {{ register_form_err.tel }}
                </i>
              </div>
              <div class="form-control">
                <input
                  v-model="register_form.password"
                  type="password"
                  :style="{ borderBottom: register_input_err.password }"
                  required
                  @blur="onBlur('password')"
                  @focus="onFocus('password')"
                />
                <label>
                  <span style="transition-delay: 0ms">密</span>
                  <span style="transition-delay: 50ms">码</span>
                </label>
                <i style="display: block; color: red; position: absolute; right: 0">
                  {{ register_form_err.password }}
                </i>
              </div>
              <div class="form-control">
                <input
                  v-model="register_form.password2"
                  type="password"
                  :style="{ borderBottom: register_input_err.password2 }"
                  required
                  @blur="onBlur('password2')"
                  @focus="onFocus('password2')"
                />
                <label>
                  <span style="transition-delay: 0ms">确</span>
                  <span style="transition-delay: 50ms">认</span>
                  <span style="transition-delay: 100ms">密</span>
                  <span style="transition-delay: 150ms">码</span>
                </label>
                <i style="display: block; color: red; position: absolute; right: 0">
                  {{ register_form_err.password2 }}
                </i>
              </div>
              <div class="form-control">
                <input
                  v-model="register_form.code"
                  type="text"
                  :style="{ borderBottom: register_input_err.code }"
                  required
                  @blur="onBlur('code')"
                  @focus="onFocus('code')"
                />
                <label>
                  <span style="transition-delay: 0ms">验</span>
                  <span style="transition-delay: 50ms">证</span>
                  <span style="transition-delay: 100ms">码</span>
                </label>
                <i style="display: block; color: red; position: absolute; right: 0">
                  {{ register_form_err.code }}
                </i>
                <el-button v-show="is_verify_state" plain class="verify_button" @click="GetVerify"
                  >获取验证码
                </el-button>
                <el-button v-show="!is_verify_state" plain class="verify_button"
                  >{{ is_verify_num }} S
                </el-button>
              </div>
              <button class="btn" @click="registerButton">注册</button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// import { ElMessage, ElNotification } from 'element-plus'
// 请求接口
import { getCode, isQueryPassword, isQueryUser, loginSuccess, registerUser } from '@/api/user'
// vuex
import { useStore } from 'vuex'
// vue-router
import { useRouter } from 'vue-router'
// 表单校验
import validates from '@/Utils/form_validation'
const route = useRouter()
const user_store = useStore()
const activeName = ref('first')
const Toggle = () => {
  activeName.value = 'second'
}
// 登录的密码框判断
const login_input_type = ref('password')
ElNotification({
  title: '温馨提示 ☺',
  message:
    '只要先注册才能登陆哦！注册的手机号可以随意输入,只要符合规则就行,点击获取验证码,后台会返回验证码,输入注册即可！',
  duration: 150000,
  type: 'success',
  position: 'top-left'
})
// 登陆用户对象
const login_form: LoginUser = reactive({
  username: '',
  password: ''
})
// 错误
const login_form_err: LoginUser = reactive({
  username: '',
  password: ''
})
const login_inputs_err: LoginUser = reactive({
  username: '',
  password: ''
})
let is_username_temp = ref(false)
// 登录的判断
// 判断是否开启验证码登录
let is_login_user_temp = false
// 登录验证码
let is_login_code_temp = ref('')
// 验证码验证状态
let is_login_code_state_temp = ref(false)
// 失去焦点
const isLoginForm = (values: string) => {
  if (values === 'login_username') {
    if (login_form.username != '') {
      isQueryUser({ username: '', tel: login_form.username }).then((res: any) => {
        if (res.is_user) {
          login_form_err.username = ''
          login_inputs_err.username = ''
          is_username_temp.value = true
        } else {
          login_form_err.username = '用户名不存在！'
          login_inputs_err.username = '0.06rem solid red'
          is_username_temp.value = false
        }
      })
    } else {
      login_form_err.username = '请输入手机号！'
      login_inputs_err.username = '0.06rem solid red'
    }
  }
  // 判断是否开启验证码登录
  if (!is_login_user_temp) {
    // 没开启
    if (values === 'login_password') {
      if (is_username_temp.value && login_form.password != '') {
        // 密码校验证
        const { username, password } = login_form
        isQueryPassword({ username, password }).then((res: any) => {
          if (res.query_result) {
            login_form_err.password = ''
            login_inputs_err.password = ''
          } else {
            login_form_err.password = '密码错误,请重新输入！'
            login_inputs_err.password = '0.06rem solid red'
          }
        })
      } else {
        login_form_err.password = '请输入密码！'
        login_inputs_err.password = '0.06rem solid red'
      }
    }
  } else {
    // 开启了验证码登录
    if (login_form_err.username == '') {
      if (login_form.password != '' && login_form.password == is_login_code_temp.value) {
        login_form_err.password = ''
        login_inputs_err.password = ''
        is_login_code_state_temp.value = true
      } else {
        login_form_err.password = '验证码错误！'
        login_inputs_err.password = '0.06rem solid red'
        is_login_code_state_temp.value = false
      }
    } else {
      login_form_err.username = '请输入手机号！'
      login_inputs_err.username = '0.06rem solid red'
    }
  }
}
// 获得焦点
const isLoginFormFocus = (value: any) => {
  if (value == 'login_username') {
    login_form_err.username = ''
    login_inputs_err.username = ''
  }
  if (value == 'login_password') {
    login_form_err.password = ''
    login_inputs_err.password = ''
  }
}
// ========================
// 获取验证码
// 验证码登录
const GetVerify2 = () => {
  if (login_form_err.username == '') {
    getCode().then((res: any) => {
      if (res.result == 200) {
        is_login_code_temp.value = res.code
        is_verify_login.value = false
        is_verify_login2.value = true
        const verify_time = setInterval(() => {
          is_verify_num2.value -= 1
          if (is_verify_num2.value === -1) {
            clearInterval(verify_time)
            is_verify_login2.value = false
            is_verify_login.value = true
            is_verify_num2.value = 60
          }
        }, 1000)
        setTimeout(() => {
          ElNotification({
            title: '你的注册验证码,10分钟内有效,请尽快完成注册！',
            message: res.code,
            duration: 20000,
            type: 'success'
          })
        }, 2000)
        setTimeout(() => {
          is_login_code_temp.value = ''
        }, 600000)
      } else {
        login_form_err.username = '请输入手机号！'
        login_inputs_err.username = '0.06rem solid red'
      }
    })
  }
}
// 登录按钮的回调
const loginComeIns = () => {
  // 判断是否开启验证码登录
  if (!is_login_user_temp) {
    // 没开启
    if (
      is_username_temp.value &&
      login_form.username != '' &&
      login_form.password != '' &&
      login_inputs_err.password === ''
    ) {
      // 登录成功
      const { username } = login_form
      loginSuccess({ username }).then((res: any) => {
        user_store.commit('user/setUser', res)
        // 跳转
        route.push('/')
        ElMessage({
          message: '登录成功',
          type: 'success'
        })
      })
    } else {
      ElMessage({
        message: '登录失败！请检查后重试！',
        type: 'error'
      })
    }
  } else {
    // 开启了
    if (is_username_temp.value && login_form.username != '' && is_login_code_state_temp.value) {
      // 登录成功
      ElMessage({
        message: '登录成功',
        type: 'success'
      })
      // 跳转
      route.push('/')
    } else {
      ElMessage({
        message: '登录失败！请检查后重试！',
        type: 'error'
      })
    }
  }
}

// ===============================================================================
// 注册user信息对象
const register_form: User = reactive({
  username: '',
  password: '',
  password2: '',
  tel: '',
  code: ''
})
const register_form_err: User = reactive({
  username: '',
  password: '',
  password2: '',
  tel: '',
  code: ''
})
const register_input_err: User = reactive({
  username: '',
  password: '',
  password2: '',
  tel: '',
  code: ''
})
// 验证码
let user_code = ref('')
let user_code_state = ref(false)
// 返回 '' 代表验证成功
// 失去焦点
const onBlur = (value: string) => {
  if (value === 'username') {
    register_form_err.username = validates.username(register_form.username)
    if (register_form_err.username != '') {
      register_input_err.username = '0.06rem solid red'
    } else {
      const { username } = register_form
      isQueryUser({ username, tel: '' }).then((res: any) => {
        if (res.is_user) {
          register_form_err.username = '该用户名已注册！'
        } else {
          register_form_err.username = ''
        }
      })
    }
  }
  if (value === 'password') {
    register_form_err.password = validates.password(register_form.password)
    if (register_form_err.password != '') {
      register_input_err.password = '0.06rem solid red'
    }
  }
  if (value === 'password2') {
    if (register_form.password != register_form.password2) {
      register_form_err.password2 = '两次输入的密码不一致！'
      register_input_err.password2 = '0.06rem solid red'
    } else if (register_form.password === register_form.password2) {
      register_input_err.password2 = ''
      register_form_err.password2 = ''
    }
  }
  if (value === 'tel') {
    register_form_err.tel = validates.tel(register_form.tel)
    if (register_form_err.tel != '') {
      register_input_err.tel = '0.06rem solid red'
    } else {
      const { tel } = register_form
      isQueryUser({ username: '', tel }).then((res: any) => {
        if (res.is_user) {
          register_form_err.tel = '该手机号已注册！'
        } else {
          register_form_err.tel = ''
        }
      })
    }
  }
  if (value === 'code') {
    register_form_err.code = validates.code(register_form.code)
    if (register_form_err.code != '') {
      register_input_err.code = '0.06rem solid red'
    } else {
      if (register_form.code != user_code.value) {
        register_form_err.code = '验证码错误！'
      } else {
        register_form_err.code = ''
        user_code_state.value = true
      }
    }
  }
}
// 获得焦点
const onFocus = (value: any) => {
  if (value === 'username') {
    register_input_err.username = ''
    register_form_err.username = ''
  }
  if (value === 'password') {
    register_input_err.password = ''
    register_form_err.password = ''
  }
  if (value === 'password2') {
    register_input_err.password2 = ''
    register_form_err.password2 = ''
  }
  if (value === 'tel') {
    register_input_err.tel = ''
    register_form_err.tel = ''
  }
  if (value === 'code') {
    register_input_err.code = ''
    register_form_err.code = ''
  }
}

// 注册按钮回调
const registerButton = () => {
  if (
    validates.username(register_form.username) === '' &&
    validates.password(register_form.password) === '' &&
    validates.tel(register_form.tel) == '' &&
    register_form.password === register_form.password2 &&
    user_code_state.value &&
    register_form_err.tel == '' &&
    register_form_err.username == ''
  ) {
    const { username, password, tel } = register_form
    registerUser({ username, password, tel }).then((res: any) => {
      user_store.commit('user/setUser', res)
    })

    // 跳转
    route.push('/')
    ElMessage({
      message: '注册成功！',
      type: 'success'
    })
    user_code_state.value = false
    user_code.value = ''
    register_form.username = ''
    register_form.password = ''
    register_form.password2 = ''
    register_form.tel = ''
    register_form.code = ''
  } else {
    ElMessage({
      message: '用户名或手机号已注册或输入的信息有误！请检查后重试！注册失败！',
      type: 'error'
    })
  }
}

// 获取验证码
let is_verify_state = ref(true)
let is_verify_num = ref(60)
const GetVerify = () => {
  if (register_form.tel != '' && register_form_err.tel == '') {
    getCode().then((res: any) => {
      if (res.result === 200) {
        is_verify_login.value = false
        is_verify_state.value = false
        user_code.value = res.code
        setTimeout(() => {
          ElNotification({
            title: '你的注册验证码,10分钟内有效,请尽快完成注册！',
            message: res.code,
            duration: 20000,
            type: 'success'
          })
        }, 2000)
        const verify_time = setInterval(() => {
          is_verify_num.value -= 1
          if (is_verify_num.value === -1) {
            clearInterval(verify_time)
            is_verify_state.value = true
            is_verify_num.value = 60
          }
        }, 1000)
        setTimeout(() => {
          user_code.value = ''
        }, 600000)
      }
    })
  } else {
    register_form_err.tel = '亲,请输入正确的手机号！'
  }
}
// login
let is_verify_num2 = ref(60)
let is_verify_login = ref(false)
let is_verify_login2 = ref(false)
let is_pwd_login = ref(true)
let is_verify_pwd = ref(true)
// 验证码登录
const VerifyLogin = (parameter: boolean) => {
  if (parameter) {
    // 验证码登录
    login_input_type.value = 'text'
    is_login_user_temp = true
    is_verify_login.value = true
    is_pwd_login.value = false
    is_verify_pwd.value = false
    login_form.password = ''
  } else {
    // 密码登录
    login_input_type.value = 'password'
    is_login_user_temp = false
    is_verify_login.value = false
    is_pwd_login.value = true
    is_verify_pwd.value = true
    login_form.password = ''
  }
}
</script>

<style lang="less" scoped>
@import url('./logInRegister.less');
</style>
