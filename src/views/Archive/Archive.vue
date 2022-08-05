<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Archive.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Archive组件</h2>-->
  <SecondaryBg :secondary_data="secondary_data"></SecondaryBg>
  <div class="archive_container">
    <div class="archive_container_nav">
      <img
        style="height: 2.5rem; width: 2.5rem; float: left; margin-top: 0.25rem"
        src="../../assets/images/logo2.png"
        alt=""
      />
      标签云
    </div>
    <div class="archive_container_label">
      <!--标签列表-->
      <Lables></Lables>
    </div>
    <div class="archive_container_nav">
      <img
        style="height: 2.5rem; width: 2.5rem; float: left; margin-top: 0.25rem"
        src="../../assets/images/logo2.png"
        alt=""
      />
      时间轴
    </div>

    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="item in arr" :key="item" :title="`${item.date}`" :name="item.date">
        <!--        <div>你还要我怎样</div>-->
        <div style="text-align: left">
          <el-timeline>
            <el-timeline-item
              v-for="items in item.arc"
              :key="items.id"
              :timestamp="items.date"
              placement="top"
            >
              <el-card>
                <router-link
                  style="color: #404246 !important"
                  :to="`/layout/articles/${items.aid}`"
                >
                  <p>{{ items.title }}</p>
                </router-link>
                <!--                <p>{{ items.name }}</p>-->
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import Lables from '@/components/Lables/Lables.vue'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getArchiveList } from '@/api/archive'
// 传递的数据
const secondary_data: any = ref<any>({
  cover_img: 'https://i.loli.net/2021/10/02/NiHVRvpulDWtzn8.jpg',
  title_one: '人生如归档,用心写灿烂。',
  title_two: '归档'
})

const activeName = ref('2')
let arr = ref<any>([])
getArchiveList().then((result: any) => {
  const { response } = result
  arr.value = response.reverse()
})
watch(
  arr,
  (new_data: any) => {
    arr.value = new_data
  },

  { deep: true }
)
console.log(arr)
</script>

<style lang="less" scoped>
@import url('./Archive.less');
</style>
