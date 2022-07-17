<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/14 10:40-->
<!--#@Author : rice_straw-->
<!--#@File : Archive.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Archive组件</h2>-->
  <div class="archive_container">
    <div class="archive_container_nav">标签云</div>
    <div class="archive_container_label">
      <!--标签列表-->
      <Lables></Lables>
    </div>
    <div class="archive_container_nav">时间轴</div>

    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="item in arr" :key="item.id" :title="item.date" :name="item.id">
        <!--        <div>你还要我怎样</div>-->
        <div style="text-align: left">
          <el-timeline>
            <el-timeline-item
              v-for="items in item.arc"
              :key="items.ids"
              :timestamp="items.dates"
              placement="top"
            >
              <el-card>
                <p>简单撒大结局啊实打实的骄傲啥是会计大石街道答就可获得静安荟</p>
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
import { ref } from 'vue'
import Lables from '@/components/Lables/Lables.vue'
const activeName = ref('2 ')
const title_date = reactive([
  { id: 1, date: '2019' },
  { id: 2, date: '2020' },
  { id: 3, date: '2021' },
  { id: 4, date: '2022' }
])
const arr = reactive([
  {
    id: 1,
    date: '2022',
    arc: [
      { ids: 1, dates: '2022-1-2', name: '你是我的小丫' },
      { ids: 1, dates: '2022-18-2', name: '你是我' },
      { ids: 1, dates: '2022-198-2', name: '你是我的小丫' }
    ]
  },
  {
    id: 2,
    date: '2023',
    arc: [
      { ids: 1, dates: '2023-1-2', name: '你是我的小丫' },
      { ids: 1, dates: '2023-3-2', name: '你是小丫' },
      { ids: 1, dates: '2023-4-2', name: '小丫' }
    ]
  },
  {
    id: 3,
    date: '2024',
    arc: [{ ids: 1, dates: '2024-1-2', name: '你是我的小丫' }]
  }
])
</script>

<style lang="less" scoped>
@import url('./Archive.less');
</style>
