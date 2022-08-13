<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Gallery.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  画廊-->
  <!--  <SecondaryBg></SecondaryBg>-->
  <!--  <br />-->
  <!--  <br />-->
  <!--  <br />-->
  <!--  <br />-->
  <div class="gallery_container">
    <div class="gallery_container_nav">
      <hr class="gallery__hr" />
      <div class="upload_img">
        <span>
          <img
            style="height: 2.5rem; width: 2.5rem; float: left; margin-top: 0.25rem"
            src="../../assets/images/logo2.png"
            alt=""
          />
          你的画廊</span
        >
        <span @click="uploadImg">
          <!--          <img src="https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg" alt="" />-->
          <upload-picture class="img" theme="outline" size="32" fill="#080808" />
          点击上传
        </span>
      </div>
      <p>生活就是一种艺术画廊,你看我们的生活如此美丽。</p>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="默认分类" name="one" />
        <el-tab-pane label="动漫二次元" name="two" />
        <el-tab-pane label="风景" name="three" />
        <el-tab-pane label="美女" name="fore" />
        <el-tab-pane label="人物" name="five" />
        <el-tab-pane label="背景" name="six" />
      </el-tabs>
    </div>
    <Waterfall :list="lists"></Waterfall>
  </div>
  <div class="upload_pop_up">
    <!--图片上传弹框-->
    <el-dialog v-model="dialogVisible" title="画廊贡献图片" width="30%" draggable>
      <div>
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          :action="img_upload_url"
          name="img_file"
          :data="img_gallery_data"
          :auto-upload="false"
          :show-file-list="true"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-success="onSuccessImg"
          :on-error="onErrorImg"
          :on-exceed="onExceed"
        >
          <p>仅支持 jpg/png/jpeg</p>
          <template #trigger>
            <el-button type="" style="font-size: 5rem; background: 0; border: 0">
              <!--              选择图片-->
              +
            </el-button>
          </template>

          <div>
            <p>
              图片分类：
              <el-select v-model="select_value" class="m-2" placeholder="Select" size="large">
                <el-option
                  v-for="item in select_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </p>
          </div>
          <el-button class="ml-3" type="success" @click="submitUpload">上传到服务器 </el-button>
        </el-upload>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
  <!--预览-->
  <div class="preview_img">
    <el-dialog v-model="dialogVisibles">
      <img w-full :src="dialogImageUrl" style="height: 100%; width: 100%" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
// 引入icon
import { UploadPicture } from '@icon-park/vue-next'
import Waterfall from '@/components/Waterfall/Waterfall.vue'
import type { TabsPaneContext } from 'element-plus'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import type { UploadInstance, UploadProps } from 'element-plus'
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { getGallery } from '@/api/gallery'

const gallery_store = useStore()
// 图片列表
let lists: any = ref<any>([])

// 上传图片============
let select_value: any = ref<any>('默认分类')
const dialogVisible = ref(false)
const uploadImg = () => {
  dialogVisible.value = true
}
// 上传图片地址
const img_upload_url = import.meta.env.VITE_BASE_URL + '/rice/uploadgallery'
// console.log(img_upload_url, 88888)
// 附带参数
const img_gallery_data: any = reactive<any>({
  username: gallery_store.getters['user/getValue'].rice_user.username
    ? gallery_store.getters['user/getValue'].rice_user.username
    : 'rice-blog', //图片名称
  uid: gallery_store.getters['user/getValue'].rice_user.uid,
  tel: gallery_store.getters['user/getValue'].rice_user.tel,
  category: select_value, //类别
  headimg: gallery_store.getters['user/getValue'].rice_user.headimg
    ? gallery_store.getters['user/getValue'].rice_user.headimg
    : 'https://s2.loli.net/2022/08/08/MTb4nScJVYp9voG.jpg',
  instructions: 'rice_blog_画廊' //说明
})
const uploadRef: any = ref<UploadInstance>()
const submitUpload = () => {
  // uploadRef.value!.submit()
  uploadRef.value?.submit()
}
const dialogImageUrl = ref('')
const dialogVisibles: any = ref<any>(false)
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile: any) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  dialogImageUrl.value = uploadFile.url!
  dialogVisibles.value = true
}

// 上传成功的钩子
const onSuccessImg = (result: any) => {
  if (result.response == 200) {
    uploadRef.value.clearFiles()
    dialogVisible.value = false
    ElMessage({
      message: '亲,上传成功啦！',
      type: 'success'
    })
    // 获取图片列表
    getGallery({ category: '默认分类' }).then((result: any) => {
      if (result.result == 200) {
        lists.value = result.response.reverse()
      } else {
        ElMessage({
          message: '亲,获取图片列表失败,请刷新后重试！',
          type: 'error'
        })
      }
    })
  } else {
    ElMessage({
      message: '亲,上传失败,请稍后重试！',
      type: 'error'
    })
  }
}
// 上传失败的钩子
const onErrorImg = (result: any) => {
  ElMessage({
    message: '亲,上传失败,请稍后重试！',
    type: 'error'
  })
}

// 超出最大限制的回调
const onExceed = () => {
  ElMessage({
    message: '亲,超出了上传限额！',
    type: 'error'
  })
}

// 图片分类
const select_options = [
  {
    value: '默认分类',
    label: '默认分类'
  },
  {
    value: '动漫二次元',
    label: '动漫二次元'
  },
  {
    value: '风景',
    label: '风景'
  },
  {
    value: '美女',
    label: '美女'
  },
  {
    value: '人物',
    label: '人物'
  },
  {
    value: '背景',
    label: '背景'
  }
]

// -----------------------------------
// 获取图片列表
getGallery({ category: '默认分类' }).then((result: any) => {
  if (result.result == 200) {
    lists.value = result.response.reverse()
  } else {
    ElMessage({
      message: '亲,获取图片列表失败,请刷新后重试！',
      type: 'error'
    })
  }
})
// -----------------------------------
// ====================
// 标签页
// let he = reactive({
//   id: 1,
//   name: 'zhjansgan'
// })

const activeName = ref('one')
const handleClick = (tab: TabsPaneContext) => {
  switch (tab.paneName) {
    case 'one':
      // 默认分类
      getGallery({ category: '默认分类' }).then((result: any) => {
        if (result.result == 200) {
          lists.value = result.response.reverse()
        } else {
          ElMessage({
            message: '亲,获取图片列表失败,请刷新后重试！',
            type: 'error'
          })
        }
      })
      break
    case 'two':
      // 动漫二次元
      getGallery({ category: '动漫二次元' }).then((result: any) => {
        if (result.result == 200) {
          lists.value = result.response.reverse()
        } else {
          ElMessage({
            message: '亲,获取图片列表失败,请刷新后重试！',
            type: 'error'
          })
        }
      })
      break
    case 'three':
      // 风景
      getGallery({ category: '风景' }).then((result: any) => {
        if (result.result == 200) {
          lists.value = result.response.reverse()
        } else {
          ElMessage({
            message: '亲,获取图片列表失败,请刷新后重试！',
            type: 'error'
          })
        }
      })
      break
    case 'fore':
      // 美女
      getGallery({ category: '美女' }).then((result: any) => {
        if (result.result == 200) {
          lists.value = result.response.reverse()
        } else {
          ElMessage({
            message: '亲,获取图片列表失败,请刷新后重试！',
            type: 'error'
          })
        }
      })
      break
    case 'five':
      // 人物
      getGallery({ category: '人物' }).then((result: any) => {
        if (result.result == 200) {
          lists.value = result.response.reverse()
        } else {
          ElMessage({
            message: '亲,获取图片列表失败,请刷新后重试！',
            type: 'error'
          })
        }
      })
      break
    case 'six':
      // 背景
      getGallery({ category: '背景' }).then((result: any) => {
        if (result.result == 200) {
          lists.value = result.response.reverse()
        } else {
          ElMessage({
            message: '亲,获取图片列表失败,请刷新后重试！',
            type: 'error'
          })
        }
      })
      break
  }
}
</script>

<style lang="less" scoped>
@import url('./Gallery.less');
</style>
