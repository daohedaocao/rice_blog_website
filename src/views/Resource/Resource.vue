<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Resource.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="resource_container">
    <div class="add_resource">
      <el-input v-model="input_url" placeholder="资源url" />
      <el-select v-model="input_type" class="m-2" placeholder="选择分类" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input v-model="input_name" placeholder="资源名称" />
      <el-input v-model="input_inroudoce" placeholder="资源介绍" />
      <img :src="input_logo_url" style="height: 3rem; width: 3rem" alt="" />
      <el-button type="" @click="Obtain">获取</el-button>
      <el-button type="" @click="uploadResource">上传</el-button>
    </div>
    <!--    =============-->
    <div v-for="item in get_datas" :key="item" class="box_container">
      <h2>{{ item.category }}</h2>
      <div class="box_container_one">
        <div v-for="items in item.arc" :key="items" class="box_container_two">
          <a :href="items.url">
            <img :src="items.logourl" alt="" />
            <span>{{ items.resourcename }}</span>
            <span>{{ items.intrudoce }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getResources, uploadResources } from '@/api/resource'
const input_url = ref('')
const input_type = ref('')
const input_name = ref('')
const input_inroudoce = ref('')
const input_logo_url = ref('')

// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  title_one: '可以不光芒万丈，但不能停止自己发光。',
  title_two: '资源库'
})
const options = [
  {
    value: '学习资源',
    label: '学习资源'
  },
  {
    value: '图片资源',
    label: '图片资源'
  },
  {
    value: '办公资源',
    label: '办公资源'
  },
  {
    value: '娱乐资源',
    label: '娱乐资源'
  },
  {
    value: '搜索资源',
    label: '搜索资源'
  },
  {
    value: '设计资源',
    label: '设计资源'
  },
  {
    value: '工具资源',
    label: '工具资源'
  },
  {
    value: '音乐专区',
    label: '音乐专区'
  },
  {
    value: '站长工具',
    label: '站长工具'
  }
]
const esource_data: any = reactive<any>({
  type_one: '',
  type_two: '',
  url: '',
  intrudoce: '',
  logourl: '',
  resourcename: ''
})
const Obtain = () => {
  input_logo_url.value = input_url.value + '/favicon.ico'
  // input_logo_url.value = 'https://tools.ly522.com/ico/favicon.php?url=' + input_url.value
}
// 上传
const uploadResource = () => {
  esource_data.type_one = input_type.value
  esource_data.type_two = 'null'
  esource_data.url = input_url.value
  esource_data.intrudoce = input_inroudoce.value
  esource_data.logourl = input_logo_url.value
  esource_data.resourcename = input_name.value
  const { type_one, type_two, url, intrudoce, logourl, resourcename } = esource_data
  uploadResources({ type_one, type_two, url, intrudoce, logourl, resourcename }).then(
    (result: any) => {
      console.log(result)
      if (result.result == 200) {
        ElMessage({
          message: '上传成功！',
          type: 'success'
        })
      }
    }
  )
}
let get_datas: any = ref<any>([])
// 获取
getResources().then((result: any) => {
  if (result.result == 200) {
    const { response } = result
    console.log(response)
    get_datas.value = response
  }
})
</script>

<style lang="less" scoped>
@import url('./Resource.less');
</style>
