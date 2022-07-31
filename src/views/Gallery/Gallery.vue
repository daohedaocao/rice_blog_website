<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Gallery.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  画廊-->
  <SecondaryBg></SecondaryBg>
  <div class="gallery_container">
    <div class="gallery_container_nav">
      <div class="upload_img">
        <span>你的画廊</span>
        <span @click="uploadImg">
          <!--          <img src="https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg" alt="" />-->
          <upload-picture class="img" theme="outline" size="32" fill="#080808" />
          点击上传
        </span>
      </div>
      <p>
        世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界美妙的世界的世界美妙的世界
      </p>
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
  <!--图片上传弹框-->
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
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
      >
        <p>仅支持 jpg/png/jpeg</p>
        <template #trigger>
          <el-button type="primary">选择图片</el-button>
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
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>

  <!--预览-->
  <el-dialog v-model="dialogVisibles">
    <img w-full :src="dialogImageUrl" style="height: 100%; width: 100%" alt="Preview Image" />
  </el-dialog>
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
const gallery_store = useStore()
let lists = ref([
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' }
])
const arr = ref([
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/e58OKC3HnprQjzi.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/ISntcwQY9yDJHO8.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/En9HsJif5k2lW3c.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/opuKNlzxgQVAk9S.jpg' },
  { id: 1, name: '美女', url: 'https://i.loli.net/2021/10/02/FCwPIVi4oqYlGUH.jpg' }
])

// 上传图片============
let select_value = ref<any>('默认分类')
const dialogVisible = ref(false)
const uploadImg = () => {
  dialogVisible.value = true
}
// 上传图片地址
const img_upload_url = import.meta.env.VITE_BASE_URL + 'rice/uploadgallery'
// 附带参数
const img_gallery_data: any = reactive<any>({
  name: gallery_store.getters['user/getValue'].rice_user.username, //图片名称
  uid: gallery_store.getters['user/getValue'].rice_user.uid,
  tel: gallery_store.getters['user/getValue'].rice_user.tel,
  category: select_value.value, //类别
  headimg: gallery_store.getters['user/getValue'].rice_user.headimg
})
const uploadRef = ref<UploadInstance>()
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

// ====================
// 标签页
let he = reactive({
  id: 1,
  name: 'zhjansgan'
})

const activeName = ref('one')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  console.log(tab.paneName)
  // const a = event.target
  // console.log(a.innerText)
  lists.value = arr.value
  console.log(lists)
  he.id = 2
}
</script>

<style lang="less" scoped>
@import url('./Gallery.less');
</style>
