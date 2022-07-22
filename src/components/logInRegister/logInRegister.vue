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
                  >获取验证码</el-button
                >
                <el-button v-show="is_verify_login2" plain class="verify_button" style=""
                  >{{ is_verify_num2 }} S</el-button
                >
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
          <div class="container">
            <form>
              <div class="form-control">
                <input type="text" required />
                <label>
                  <span style="transition-delay: 0ms">用</span>
                  <span style="transition-delay: 50ms">户</span>
                  <span style="transition-delay: 100ms">名</span>
                </label>
              </div>
              <div class="form-control">
                <input type="text" required />
                <label>
                  <span style="transition-delay: 0ms">手</span>
                  <span style="transition-delay: 50ms">机</span>
                  <span style="transition-delay: 100ms">号</span>
                </label>
              </div>
              <div class="form-control">
                <input type="text" required />
                <label>
                  <span style="transition-delay: 0ms">密</span>
                  <span style="transition-delay: 50ms">码</span>
                </label>
              </div>
              <div class="form-control">
                <input type="password" required />
                <label>
                  <span style="transition-delay: 0ms">确</span>
                  <span style="transition-delay: 50ms">认</span>
                  <span style="transition-delay: 100ms">密</span>
                  <span style="transition-delay: 150ms">码</span>
                </label>
              </div>
              <div class="form-control">
                <input type="password" required />
                <label>
                  <span style="transition-delay: 0ms">验</span>
                  <span style="transition-delay: 50ms">证</span>
                  <span style="transition-delay: 100ms">码</span>
                </label>
                <el-button v-show="is_verify_state" plain class="verify_button" @click="GetVerify"
                  >获取验证码</el-button
                >
                <el-button v-show="!is_verify_state" plain class="verify_button" style=""
                  >{{ is_verify_num }} S</el-button
                >
              </div>

              <button class="btn">注册</button>
            </form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('login')
const Toggle = () => {
  activeName.value = 'register'
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// 获取验证码
let is_verify_state = ref(true)
let is_verify_num = ref(60)
const GetVerify = () => {
  is_verify_login.value = false
  is_verify_state.value = false
  const verify_time = setInterval(() => {
    is_verify_num.value -= 1
    if (is_verify_num.value === -1) {
      clearInterval(verify_time)
      is_verify_state.value = true
      is_verify_num.value = 60
    }
  }, 1000)
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
