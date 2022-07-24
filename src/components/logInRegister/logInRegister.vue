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
      <el-tabs v-model="activeName" class="login-tabs" @tab-click="handleClick">
        <!--        登录-->
        <el-tab-pane label="登录" name="login">
          <div class="container">
            <form>
              <div class="form-control">
                <input type="text" required />
                <label>
                  <span style="transition-delay: 0ms">手</span>
                  <span style="transition-delay: 50ms">机</span>
                  <span style="transition-delay: 100ms">号</span>
                  <span style="transition-delay: 150ms">/</span>
                  <span style="transition-delay: 200ms">邮</span>
                  <span style="transition-delay: 250ms">箱</span>
                </label>
              </div>

              <div class="form-control">
                <input type="password" required />
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
                <el-button v-show="is_verify_login2" plain class="verify_button" style=""
                  >{{ is_verify_num2 }} S
                </el-button>
              </div>

              <button class="btn">登录</button>

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
            </form>
          </div>
          <div class="img_logins">
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
            <img class="img_login" src="https://i.loli.net/2021/10/02/FOslfCUTY6GN2Xe.jpg" alt="" />
          </div>
          <span class="hint"><router-link to="/">不注册,直接进入！</router-link></span>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <!--          注册-->
          <div class="container">
            <form>
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
                  type="password"
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
                <el-button v-show="!is_verify_state" plain class="verify_button" style=""
                  >{{ is_verify_num }} S
                </el-button>
              </div>
              <button class="btn" @click="registerButton">注册</button>
            </form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
// 请求接口
import { getCode, isQueryUser, registerUser } from '@/api/user'
// vuex
import { useStore } from 'vuex'
// 表单校验
import validates from '@/Utils/form_validation'

const user_store = useStore()
const activeName = ref('login')
const Toggle = () => {
  activeName.value = 'register'
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
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
// 返回 '' 代表验证成功
// 失去焦点
const onBlur = (value: string) => {
  if (value === 'username') {
    register_form_err.username = validates.username(register_form.username)
    if (register_form_err.username != '') {
      register_input_err.username = '0.06rem solid red'
    } else {
      const { username } = register_form
      isQueryUser({ username, tel: '' }).then(res => {
        if (res.isuser) {
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
      isQueryUser({ username: '', tel }).then(res => {
        if (res.isuser) {
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
    register_form.password === register_form.password2
  ) {
    const { username, password, tel } = register_form
    registerUser({ username, password, tel }).then(res => {
      user_store.commit('user/setUser', res)
    })
    ElMessage({
      message: '注册成功！',
      type: 'success'
    })
  }
}

// 获取验证码
let is_verify_state = ref(true)
let is_verify_num = ref(60)
const GetVerify = () => {
  if (register_form.tel != '' && register_form_err.tel == '') {
    getCode().then(res => {
      console.log(res)
      if (res.result === 200) {
        is_verify_login.value = false
        is_verify_state.value = false
        user_code.value = res.code
        setTimeout(() => {
          ElMessage({
            message: res.code,
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
      }
    })
  } else {
    register_form_err.tel = '亲输入正确的手机号！'
  }
}
// login
let is_verify_num2 = ref(60)
let is_verify_login = ref(false)
let is_verify_login2 = ref(false)
let is_pwd_login = ref(true)
let is_verify_pwd = ref(true)
const VerifyLogin = (parameter: boolean) => {
  if (parameter) {
    is_verify_login.value = true
    is_pwd_login.value = false
    is_verify_pwd.value = false
  } else {
    is_verify_login.value = false
    is_pwd_login.value = true
    is_verify_pwd.value = true
  }
}
const GetVerify2 = () => {
  is_verify_login.value = false
  is_verify_login2.value = true
  const verify_time = setInterval(() => {
    is_verify_num2.value -= 1
    if (is_verify_num2.value === -1) {
      clearInterval(verify_time)
      is_verify_login2.value = true
      is_verify_num2.value = 60
    }
  }, 1000)
}
</script>

<style lang="less" scoped>
@import url('./logInRegister.less');
</style>
