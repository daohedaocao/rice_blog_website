<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/18 22:26-->
<!--#@Author : rice_straw-->
<!--#@File : WriteAnEssay.vue-->
<!--#@Software:WebStorm-->

<template>
  <div id="writeanessay_container">
    <el-upload action="#" list-type="picture-card" :auto-upload="false">
      <el-icon v-show="dialogImageUrl === ''"><Plus /></el-icon>

      <template #file="{ file }">
        <div style="height: 100%; width: 100%">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <el-icon><zoom-in /></el-icon>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <el-icon><Download /></el-icon>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
              <el-icon><Delete /></el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>

    <!--    ====================================-->
    <Editor
      v-model="contentRich.html"
      api-key="h8f98pdypo6nw0cszfeo8vk97gkvk92wxtwxmiz3e2e05gje"
      :init="editorInit"
      tinymce-script-src="/tinymce/tinymce.min.js"
      class="editor_styles"
    />
  </div>
</template>

<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue'
import { reactive, ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
  console.log(dialogImageUrl)
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

// ===================================
// 富文本编辑器绑定的对象
let contentRich = reactive({
  html: '',
  text: ''
})
// const props = withDefaults(defineProps<LocalSave>(), {
//   html: '',
//   defaultEditor: 'tinymce'
// })
// tinyMce编辑器
let editorInit = {
  // language_url: "/public/tinymce/zh_CN.js",  //开发环境下
  language_url: '/tinymce/langs/zh_CN.js', //生产环境
  language: 'zh_CN',
  // height: 8000,
  // width: 600,
  placeholder: '在这里输入文字',
  // 设置皮肤
  // skin: 'oxide-dark',
  // 引入外部皮肤
  // skin_url: '/css/mytinymceskin',
  // theme: 'silver',
  // content_css: '/mycontent.css',
  // content_style: 'p {margin: 10px; border: 5px solid red; padding: 3px}',
  toolbar_mod: 'wrap',
  // 黏性工具栏
  // toolbar_sticky: true,
  auto_focus: true,
  // 撤销次数
  custom_undo_redo_levels: 20,
  // 适配移动端
  mobile: {
    menubar: true,
    plugins: [
      'autosave',
      'lists',
      'autolink',
      'bdmap',
      'kityformula-editor',
      'indent2em',
      'lineheight',
      'image',
      'media',
      'table'
    ]
    // toolbar: ['undo', 'bold', 'italic', 'styleselect']
  },
  branding: false,
  // 右键触发的菜单
  contextmenu:
    'backcolor forecolor bold copy charmap codesample emoticons image media preview insertdatetime searchreplace ',
  // 字体列表
  font_formats:
    '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif',
  // 字体大小
  fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px 56px 72px',
  // icons_url: '/icons/custom/icons.js',
  // icons: 'custom',
  // 拖动
  // resize: 'both',
  // 全屏满屏
  fullscreen_native: true,
  color_cols: 5,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'preview',
    'anchor',
    'searchreplace',
    'code',
    'fullscreen',
    'visualblocks',
    'insertdatetime',
    'media',
    'table',
    'help',
    'wordcount',
    'codesample',
    'emoticons',
    'insertdatetime',
    'quickbars',
    'bdmap',
    'kityformula-editor',
    'indent2em',
    'lineheight'
  ],
  toolbar1:
    ' fullscreen undo redo  formatselect  bold italic backcolor forecolor  \
           alignleft aligncenter alignright alignjustify  bullist numlist outdent indent  ',
  toolbar2:
    'indent2em lineheight removeformat hr  charmap codesample emoticons \
    image media  bdmap preview insertdatetime  searchreplace kityformula-editor|help',
  charmap_append: [
    [0x2615, 'morning coffee'],
    [0x2600, 'sun'],
    [0x2601, 'cloud']
  ],
  quickbars_selection_toolbar: 'bold italic | link h2 h3 h4 blockquote backcolor forecolor',
  quickbars_insert_toolbar: 'quickimage quicktable'
}
</script>

<style lang="less" scoped>
@import url('./WriteAnEssay.less');
</style>
