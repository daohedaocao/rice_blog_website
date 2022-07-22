<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/21 16:30-->
<!--#@Author : rice_straw-->
<!--#@File : MyHome.vue-->
<!--#@Software:WebStorm-->

<template>
  <div class="my_home_container">
    <div class="my_home_top">
      <div class="my_home_left">
        <img src="https://i.loli.net/2021/10/02/qw4hnWHFl3I9SEu.jpg" alt="" />
      </div>
      <div class="my_home_right">
        <h3>稻和稻草</h3>
        <span>
          <edit-one theme="outline" class="my_home_icon" size="16" fill="#080808" />
          个人介绍:用一句话介绍自己吧~
        </span>
        <p>
          <calendar theme="outline" class="my_home_icon" size="16" fill="#080808" />
          创建日期:2022-7-21
        </p>
      </div>
    </div>
    <div class="my_home_el_tabs">
      <el-tabs :tab-position="tabPosition" class="demo-tabs">
        <el-tab-pane label="详细信息">
          <el-tabs :tab-position="tabPosition2" class="demo-tabs2">
            <el-tab-pane label="我的文章">
              <ArticleList v-for="item in 3" :key="item"></ArticleList>
            </el-tab-pane>
            <el-tab-pane label="我的收藏">
              <ArticleList v-for="item in 1" :key="item"></ArticleList>
            </el-tab-pane>
            <el-tab-pane label="我的点赞">
              <ArticleList v-for="item in 2" :key="item"></ArticleList>
            </el-tab-pane>
            <el-tab-pane label="画廊贡献">Role</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="个人资料">
          <!--        用户名，用户id，性别，个人介绍，出生日期，所在地区-->
          <el-form :model="form" label-width="120px" class="user_info_form">
            <el-form-item label="用户名">
              <el-input v-model="form.name" :disabled="disabled_state" />
            </el-form-item>
            <el-form-item label="用户id"> 5656 </el-form-item>
            <el-form-item label="所在城市">
              <el-cascader
                v-model="city_value"
                placeholder="请选择"
                :options="city_options"
                :props="city_props"
                filterable
                :disabled="disabled_state"
              />
            </el-form-item>
            <el-form-item label="出生日期">
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  :disabled="disabled_state"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio-group v-model="form.resource">
                <el-radio label="男" :disabled="disabled_state" />
                <el-radio label="女" :disabled="disabled_state" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="个人简介">
              <el-input v-model="form.desc" :disabled="disabled_state" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="modifyData">修改资料</el-button>
              <el-button v-show="!disabled_state" type="primary" @click="confirmTheChanges"
                >确认修改</el-button
              >
              <el-button v-show="!disabled_state" type="primary" @click="Cancel">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="账号设置">
          <!--          手机号，密码 ,邮箱，注销账号 -->
          <div class="account_settings">
            <p>
              <span>1323323</span>
              <el-button type="primary">修改</el-button>
            </p>
            <p>
              <span>*******</span>
              <el-button type="primary">修改</el-button>
            </p>
            <p>
              <span>23266@qq.com</span>
              <el-button type="primary">修改</el-button>
            </p>
            <p>
              <span>注销</span>
              <el-button type="primary">注销</el-button>
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入icon
import { EditOne, Calendar } from '@icon-park/vue-next'
import { ref, reactive } from 'vue'
import ArticleList from '@/components/ArticleList/ArticleList.vue'
// 城市数据
import CityCode from '@/components/MyHome/CityCode.json'
// 导航
const tabPosition = ref('left')
const tabPosition2 = ref('top')
// 监视浏览器宽度
const browser_width = ref(document.body.clientWidth)
const browser_widths = ref(window.screen.width)
// 监视浏览器的宽度变化
onMounted(() => {
  window.onresize = () => {
    browser_width.value = document.body.clientWidth
    browser_widths.value = window.screen.width
    if (browser_width.value < 900 || browser_widths.value < 900) {
      tabPosition.value = 'top'
    } else {
      tabPosition.value = 'left'
    }
    return { browser_width, browser_widths }
  }
})
onUnmounted(() => {
  // 销毁，防止继续占用内存
  window.onresize = null
})
// 城市数据
// =============================
const city_props = {
  expandTrigger: 'hover',
  label: 'name',
  value: 'name'
}
const city_value = ref('')
const city_options = ref(CityCode)
// =============================

// 个人资料
// ---------------
// 是否禁用
let disabled_state = ref(true)
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})
// 修改资料
const modifyData = () => {
  disabled_state.value = false
}
// 确认修改
const confirmTheChanges = () => {
  disabled_state.value = true
}
// 取消
const Cancel = () => {
  disabled_state.value = true
}
// ---------------
</script>

<style lang="less" scoped>
@import url('./MyHome.less');
</style>
