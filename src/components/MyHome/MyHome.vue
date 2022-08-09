<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/21 16:30-->
<!--#@Author : rice_straw-->
<!--#@File : MyHome.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="my_home_container">
    <div class="my_home_top">
      <div class="my_home_left" @mouseleave="is_block = false" @mouseover="is_block = true">
        <div v-if="is_block" class="my_home_left_update">
          <!--          修改头像-->
          <el-upload
            class="avatar-uploader"
            :auto-upload="true"
            name="img_update_file"
            :data="img_update_data"
            :action="img_update_url"
            :on-success="onUpdateSuccess"
            :on-error="onUpdateError"
          >
            <el-button type="primary" class="update_img_button">点击修改头像</el-button>
          </el-upload>
        </div>
        <img :src="rice_user.headimg" alt="" />
        <p style="margin: 0; font-size: 0.1rem">点击修改头像</p>
      </div>
      <div class="my_home_right">
        <span
          style="
            float: right;
            display: inline-block;
            position: relative;
            top: 0.5rem;
            right: 0.5rem;
            font-size: 0.8rem;
          "
          ><el-upload
            class="avatar-uploader"
            :auto-upload="true"
            name="img_update_file_cover"
            :show-file-list="false"
            :data="img_update_data_cover"
            :action="img_update_url_cover"
            :on-success="onUpdateSuccessCover"
            :on-error="onUpdateErrorCover"
          >
            <el-button type="" style="background: 0; border: 0">点击修改封面</el-button>
          </el-upload>
        </span>
        <h3>{{ rice_user.username }}</h3>
        <span>
          <edit-one theme="outline" class="my_home_icon" size="16" fill="#080808" />
          个人介绍:{{ my_introduce }}
        </span>
        <p>
          <calendar theme="outline" class="my_home_icon" size="16" fill="#080808" />
          创建日期:{{ rice_user.date }}
        </p>
      </div>
    </div>
    <div class="my_home_el_tabs">
      <el-tabs :tab-position="tabPosition.tab_position" class="demo-tabs">
        <el-tab-pane label="详细信息">
          <el-tabs
            v-model="my_values"
            :tab-position="tabPosition2.tab_position"
            class="demo-tabs2"
            @tab-click="myHandleClick"
          >
            <el-tab-pane label="我的文章" name="my_one">
              <ArticleList
                v-for="item in my_article_data.length"
                :key="item"
                :article_data_single="my_article_data[item - 1]"
              ></ArticleList>
            </el-tab-pane>
            <el-tab-pane label="我的收藏" name="my_two">
              <!--              <ArticleList v-for="item in 1" :key="item"></ArticleList>-->
              <Collects
                v-for="item_collects in get_collects_data.length"
                :key="item_collects"
                :collects_data_single="get_collects_data[item_collects - 1]"
              ></Collects>
            </el-tab-pane>
            <el-tab-pane label="我的点赞" name="my_three"> 暂未开发... </el-tab-pane>
            <el-tab-pane label="画廊贡献" name="my_four"> 暂未开发...</el-tab-pane>
          </el-tabs>
          <el-pagination
            v-model="changePage.currentPage"
            background
            :page-size="page_size"
            :pager-count="pager_count"
            layout="prev, pager, next"
            :total="changePage.total"
            @current-change="currentChange"
          />
        </el-tab-pane>
        <el-tab-pane label="个人资料">
          <!--        用户名，用户id，性别，个人介绍，出生日期，所在地区-->
          <el-form :model="form" label-width="120px" class="user_info_form">
            <el-form-item label="用户名">
              <el-input v-model="form.name" :disabled="disabled_state" />
            </el-form-item>
            <el-form-item label="用户id"> {{ rice_user.uid }} </el-form-item>
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
              <span>手机号：{{ rice_user.tel }}</span>
              <el-button type="primary" @click="dialogVisible = true">修改</el-button>
            </p>
            <p>
              <span>密码：*******</span>
              <el-button type="primary" @click="dialogVisibleTwo = true">修改</el-button>
            </p>
            <p>
              <span>注销账号</span>
              <el-button type="primary" @click="dialogVisibleThree = true">注销</el-button>
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <div class="dialogVisiblestylefather">
    <!--  修改手机号-->
    <el-dialog v-model="dialogVisible" title="修改手机号">
      <el-input v-model="update_tel" placeholder="请输入新手机号！" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="updateTels">确认修改</el-button>
        </span>
      </template>
    </el-dialog>
    <!--  修改密码-->
    <el-dialog v-model="dialogVisibleTwo" title="修改密码">
      <el-input v-model="update_password" placeholder="请输入新密码！" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisibleTwo = false">取消</el-button>
          <el-button type="primary" @click="updatePasswords">确认修改</el-button>
        </span>
      </template>
    </el-dialog>
    <!--  注销账号-->
    <el-dialog v-model="dialogVisibleThree" title="注销账号">
      <h2 style="color: red">确认注销吗? 此操作不可逆,请谨慎考虑后点击确认注销!</h2>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisibleThree = false">取消</el-button>
          <el-button type="primary" @click="logOutUser">确认注销</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
// 引入icon
import { EditOne, Calendar } from '@icon-park/vue-next'
import { ref, reactive } from 'vue'
import ArticleList from '@/components/ArticleList/ArticleList.vue'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { ElMessage } from 'element-plus'
// 城市数据
import CityCode from '@/components/MyHome/CityCode.json'
import { useStore } from 'vuex'
import {
  getCollects,
  getMyArticleData,
  logOutUserInfo,
  updateMyMaterial,
  updatePassword,
  updateTel,
  updeteUserCover,
  updeteUserHeadimg
} from '@/api/myhome'
import { decryptDES, encryptDES } from '@/encryption/des_encryption'
import Collects from '@/components/Collects/Collects.vue'
// 表单校验
import validates from '@/Utils/form_validation'
import { isQueryUser } from '@/api/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const secondary_data: any = ref<any>({
  cover_img: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  title_one: '如果有一天，你累了，你疲倦了，只要你一回头，我的笑容就在你面前。',
  title_two: '我的主页'
})

const my_store = useStore()
// 获取个人信息
const { rice_user } = my_store.getters['user/getValue']
secondary_data.value.cover_img = rice_user.cover
// 修改头像==============
let is_block = ref<boolean>(false)
const img_update_url = import.meta.env.VITE_BASE_URL + 'rice/imgupdateurl'
// 修改头像成功的回调
const onUpdateSuccess = (value: any) => {
  if (value.response.code == 200) {
    updeteUserHeadimg({
      uid: rice_user.uid,
      tel: rice_user.tel,
      headimg: value.response.image_url_min
    }).then((result: any) => {
      if (result.result == 200) {
        ElMessage({
          message: '修改成功！',
          type: 'success'
        })
        my_store.commit('user/setUserHeadImg', value.response.image_url_min)
      } else {
        ElMessage({
          message: '亲，修改失败，请稍后重试！',
          type: 'error'
        })
      }
    })
  }
}
// 修改头像失败后的回调
const onUpdateError = (value: any) => {
  ElMessage({
    message: '修改失败了,请稍后重试！+' + value,
    type: 'error'
  })
}
// 附加资料
const img_update_data = reactive<any>({
  uid: rice_user.uid,
  tel: rice_user.tel
})
// =================
// 修改用户封面
const img_update_url_cover = import.meta.env.VITE_BASE_URL + 'rice/imgupdateurlcover'
// 修改头像成功的回调
const onUpdateSuccessCover = (value: any) => {
  if (value.response.code == 200) {
    updeteUserCover({
      uid: rice_user.uid,
      tel: rice_user.tel,
      cover: value.response.image_url_min
    }).then((result: any) => {
      if (result.result == 200) {
        ElMessage({
          message: '修改封面成功！',
          type: 'success'
        })
        secondary_data.value.cover_img = value.response.image_url_min
        my_store.commit('user/setUserCover', value.response.image_url_min)
      } else {
        ElMessage({
          message: '亲，修改失败，请稍后重试！',
          type: 'error'
        })
      }
    })
  }
}
// 修改头像失败后的回调
const onUpdateErrorCover = (value: any) => {
  ElMessage({
    message: '修改失败了,请稍后重试！+' + value,
    type: 'error'
  })
}
// 附加资料
const img_update_data_cover = reactive<any>({
  uid: rice_user.uid,
  tel: rice_user.tel
})
// ======================
// 导航
let tabPosition = ref<any>({
  tab_position: 'left'
})
let tabPosition2 = ref<any>({
  tab_position: 'top'
})
// 监视浏览器宽度
const browser_width = ref(document.body.clientWidth)
const browser_widths = ref(window.screen.width)
// 监视浏览器的宽度变化
onMounted(() => {
  window.onresize = () => {
    browser_width.value = document.body.clientWidth
    browser_widths.value = window.screen.width
    if (browser_width.value < 900 || browser_widths.value < 900) {
      tabPosition.value.tab_position = 'top'
    } else {
      tabPosition.value.tab_position = 'left'
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
const city_props: object = {
  expandTrigger: 'hover',
  label: 'name',
  value: 'name'
}
const city_value = ref<any>('')
const city_options = ref<any>(CityCode)
city_value.value = decryptDES(rice_user.city).split(',')
// city_value.value = decryptDES(rice_user.city)
// =============================
// 个人资料
// ---------------
// 是否禁用
let disabled_state = ref(true)
const form = reactive<any>({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})
form.name = rice_user.username
form.date1 = rice_user.birthday
form.desc = decryptDES(rice_user.introduce)
form.resource = rice_user.gender
const my_introduce = ref<any>('')
my_introduce.value = decryptDES(rice_user.introduce)
// 修改资料
const modifyData = () => {
  disabled_state.value = false
}
// 取消
const Cancel = () => {
  disabled_state.value = true
}
// ---------------------------------------------------------
// 获取我的文章
let my_article_lists: any = ref<Array<any>>([])
let my_article_data = ref<any>('')
const { uid, tel } = rice_user
getMyArticleData({ uid, tel })
  .then((result: any) => {
    const { my_article_list } = result
    changePage.total = my_article_list.length
    if (result.result == 200) {
      // my_article_list.value.splice(0, my_article_list.value.length)
      for (let item in my_article_list) {
        my_article_list[item].content = decryptDES(my_article_list[item].content)
        my_article_lists.value.push(my_article_list[item])
      }
    } else {
      ElMessage({
        message: '亲,获取请稍后重试！',
        type: 'error'
      })
    }
  })
  .catch(() => {
    ElMessage({
      message: '亲,获取请稍后重试！',
      type: 'error'
    })
  })
// ============================
// 我的收藏
let my_values = ref('my_one')
let get_collects_data: any = ref<any>('')
// 切换
const myHandleClick = (tab: any) => {
  switch (tab.paneName) {
    case 'my_one':
      getMyArticleData({ uid, tel })
        .then((result: any) => {
          const { my_article_list } = result
          changePage.total = my_article_list.length
          my_article_lists.value.splice(0, my_article_lists.value.length)
          if (result.result == 200) {
            // my_article_list.value.splice(0, my_article_list.value.length)
            for (let item in my_article_list) {
              my_article_list[item].content = decryptDES(my_article_list[item].content)
              my_article_lists.value.push(my_article_list[item])
            }
          } else {
            ElMessage({
              message: '亲,获取请稍后重试！',
              type: 'error'
            })
          }
        })
        .catch(() => {
          ElMessage({
            message: '亲,获取请稍后重试！',
            type: 'error'
          })
        })
      break
    case 'my_two':
      // 我的收藏
      getCollects({ uid: rice_user.uid, tel: rice_user.tel }).then((result: any) => {
        if (result.result == 200) {
          const { response } = result
          changePage.total = response.length
          my_article_lists.value.splice(0, my_article_lists.value.length)
          // get_collects_data.value = response
          my_article_lists.value = response
        } else {
          ElMessage({
            message: '亲,获取请稍后重试！',
            type: 'error'
          })
        }
      })
      break
    case 'my_three':
      changePage.total = 0
      break
    case 'my_four':
      changePage.total = 0
      break
  }
}
// ============================
// 分页
const page_size = ref(5)
const pager_count = ref(5)
// 默认
// let citrus = ref<any>('')
const changePage = reactive({
  currentPage: 1, //默认当前页面为1
  total: Number(1) //总共有多少数据
})
// 拿到当前页数
const currentChange = (values: any) => {
  if (values == 1) {
    my_article_data.value = my_article_lists.value.slice(0, 5 * values)
  } else {
    my_article_data.value = my_article_lists.value.slice(5 * values - 5, 5 * values)
    // citrus.value = arrs.slice((y - 1) * 10 + 1, 10 * y)
  }
}
// 监听
// 我的文章
watch(
  my_article_lists,
  (new_datas: any) => {
    my_article_lists.value = new_datas
    // 我的文章
    my_article_data.value = my_article_lists.value.slice(0, 5)
    // 收藏
    get_collects_data.value = my_article_lists.value.slice(0, 5)
  },
  // 深度监听
  { deep: true }
)
// --------------------------------------------------------------------------------
// 修改个人资料
const update_my_material: updateMyMaterial = reactive<any>({
  username: '',
  tel: '',
  uid: '',
  city: [],
  birthday: '',
  gender: '',
  introduce: ''
})
// 确认修改 回调
const confirmTheChanges = () => {
  disabled_state.value = true
  update_my_material.username = form.name
  update_my_material.tel = rice_user.tel
  update_my_material.uid = rice_user.uid
  update_my_material.city = encryptDES(`${city_value.value}`)
  update_my_material.birthday = form.date1
  update_my_material.gender = form.resource
  update_my_material.introduce = encryptDES(String(form.desc))
  const { username, tel, uid, city, birthday, gender, introduce } = update_my_material
  updateMyMaterial({ username, tel, uid, city, birthday, gender, introduce })
    .then((result: any) => {
      if (result.result == 200) {
        // 成功
        my_store.commit('user/setUser', result)
        ElMessage({
          message: '修改成功！',
          type: 'success'
        })
      } else {
        ElMessage({
          message: '修改失败,请稍后重试！',
          type: 'error'
        })
      }
    })
    .catch(err => {
      ElMessage({
        message: '修改失败,请稍后重试！' + err,
        type: 'error'
      })
    })
}
// 账号设置
const dialogVisible: any = ref<any>(false)
const dialogVisibleTwo: any = ref<any>(false)
const dialogVisibleThree: any = ref<any>(false)
const update_tel: any = ref<any>('')
const update_password: any = ref<any>('')
const update_password_data: any = reactive<any>({
  uid: '',
  tel: '',
  password: ''
})
// 修改密码
const updatePasswords = () => {
  if (update_password.value !== '') {
    update_password_data.uid = rice_user.uid
    update_password_data.tel = rice_user.tel
    update_password_data.password = update_password.value
    const { uid, tel, password } = update_password_data
    updatePassword({ uid, tel, password }).then((result: any) => {
      if (result.result == 200) {
        ElMessage({
          message: '修改成功！',
          type: 'success'
        })
        dialogVisibleTwo.value = false
        update_password.value = ''
      } else {
        ElMessage({
          message: '修改失败,请稍后重试！',
          type: 'error'
        })
      }
    })
  } else {
    ElMessage({
      message: '请输入新密码！',
      type: 'error'
    })
  }
}
const updateTels = () => {
  if (update_tel.value !== '') {
    update_password_data.uid = rice_user.uid
    update_password_data.tel = update_tel.value
    if (validates.tel(update_tel.value) === '') {
      const { uid, tel } = update_password_data
      isQueryUser({ username: '', tel }).then((result: any) => {
        console.log(result)
        if (!result.is_user) {
          updateTel({ uid, tel }).then((result: any) => {
            console.log(result)
            if (result.result == 200) {
              ElMessage({
                message: '修改成功！',
                type: 'success'
              })
              my_store.commit('user/setUserTel', update_tel.value)
              dialogVisible.value = false
              update_tel.value = ''
            } else {
              ElMessage({
                message: '修改失败,请稍后重试！',
                type: 'error'
              })
            }
          })
        } else {
          ElMessage({
            message: '手机号已注册！',
            type: 'error'
          })
        }
      })
    } else {
      ElMessage({
        message: '手机号格式不正确！',
        type: 'error'
      })
    }
  } else {
    ElMessage({
      message: '请输入新密码！',
      type: 'error'
    })
  }
}
// 注销账号
const logOutUser = () => {
  logOutUserInfo({ uid: rice_user.uid, tel: rice_user.tel }).then((result: any) => {
    if (result.result == 200) {
      ElMessage({
        message: '注销成功！',
        type: 'success'
      })
      my_store.commit('user/setUser', {})
      router.push('/loginregister')
      dialogVisibleThree.value = false
    } else {
      ElMessage({
        message: '注销失败，请稍后重试！',
        type: 'error'
      })
    }
  })
}
</script>

<style lang="less" scoped>
@import url('./MyHome.less');
</style>
