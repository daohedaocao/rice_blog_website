<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/18 22:26-->
<!--#@Author : rice_straw-->
<!--#@File : WriteAnEssay.vue-->
<!--#@Software:WebStorm-->

<template>
  <SecondaryBg></SecondaryBg>
  <div id="writeanessay_container">
    <el-upload
      :action="img_upload_url"
      list-type="picture-card"
      name="img_file"
      :data="img_cover_data"
      :auto-upload="true"
      :on-success="onSuccess"
    >
      <el-icon v-show="dialogImageUrl === ''">
        <Plus />
        <p class="icon_title">点击上传文章封面</p>
      </el-icon>

      <template #file="{ file }">
        <div style="height: 100%; width: 100%">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <el-icon><zoom-in /></el-icon>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
              <el-icon><Delete /></el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>

    <!--    放大后的图片-->
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <!--    ================================-->
    <div class="arc_title">
      <!--      文章标题-->
      <input
        v-model="article_title"
        class="arc_title_input"
        type="text"
        placeholder="请输入文章标题..."
      />
    </div>
    <!--    ====================================-->
    <Editor
      v-model="contentRich.html"
      api-key="h8f98pdypo6nw0cszfeo8vk97gkvk92wxtwxmiz3e2e05gje"
      :init="editorInit"
      tinymce-script-src="./tinymce/tinymce.min.js"
      class="editor_styles"
    />

    <!--    标签-->
    <div class="write_label">
      <span style="display: block; text-align: left; padding: 0.5rem 0 0.5rem 1rem">所选标签</span>
      <div class="write_labels">
        <div class="write_labels_input">
          <div>
            <el-tag
              v-for="tag in tags"
              v-show="!tag.state"
              :key="tag.name"
              class="mx-1"
              closable
              style="margin-left: 0.5rem"
              :type="tag.type"
              @close="LabelState(tag.name, true)"
            >
              {{ tag.name }}
            </el-tag>
          </div>
          <!--          标签选中个数-->
          <div>{{ label_number }}/3</div>
        </div>
      </div>
      <span style="display: block; text-align: left; padding: 0.5rem 0 0.5rem 1rem">可选标签</span>
      <div class="writes_label_container">
        <el-tag
          v-for="tag in tags"
          v-show="tag.state"
          :key="tag.name"
          class="mx-1"
          style="cursor: pointer; margin: 0.5rem"
          :type="tag.type"
          @click="LabelState(tag.name, false)"
        >
          {{ tag.name }}
        </el-tag>
      </div>
    </div>
    <h3 class="release_button">
      <el-button type="primary">发布文章</el-button>
    </h3>
    <button @click="test">测试</button>
  </div>
</template>

<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue'
import { reactive, ref } from 'vue'
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
import { getLables, uploadArticleCover, uploadArticleImg } from '@/api/article_upload'
// 上传文章封面
// ========================
// 文章上传的
// 封面图片链接
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
// 文章标题
let article_title = ref('')
// 文章封面上传的url
const img_upload_url = import.meta.env.VITE_BASE_URL + 'rice/uploadarticlecover'
// 上传额外参数
const img_cover_data: UpLoadCoverData = reactive({
  name: '张三sds',
  uid: 'abcdsyer',
  tel: '133566599'
})
// 上传成功的钩子
const onSuccess = (result: any, files: any) => {
  console.log(result)
  console.log(files)
  console.log('上传成功')
  dialogImageUrl.value = '35'
}
// =======================
// 删除图片
const handleRemove = (file: UploadFile) => {
  console.log(file)
}

// 放大后的图片
const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
  console.log(dialogImageUrl)
}

// ===========================

// ==============================
const tags = ref<Array<any>>([])
// 获取标签列表
onMounted(async () => {
  const { lables }: any = await getLables()
  tags.value = lables
})
// 标签状态
let label_number = ref(0)
const LabelState = (name: string, state: boolean) => {
  if (state) {
    // 取消标签
    let index = tags.value.findIndex(item => item.name == name)
    tags.value[index].state = true
    label_number.value = tags.value.filter(item => !item.state).length
  } else {
    if (tags.value.filter(item => !item.state).length < 3) {
      // 点击选中标签
      let index = tags.value.findIndex(item => item.name == name)
      tags.value[index].state = false
      label_number.value = tags.value.filter(item => !item.state).length
    } else {
      alert('超出选项')
    }
  }
}
// 拿到选中的标签===>在提交的时候用
const test = () => {
  let index = tags.value.filter(item => !item.state)
  // console.log(tags.value[index])
  console.log(index)
  console.log(contentRich.text)
  console.log(contentRich.html)
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
  language_url: './tinymce/langs/zh_CN.js', //生产环境
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
  quickbars_insert_toolbar: 'quickimage quicktable',
  images_upload_handler: (blobInfo: { blob: () => string | Blob }) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise((resolve, reject) => {
      let img_file = blobInfo.blob() //转化为易于理解的file对象
      console.log(img_file)
      let formdata = new FormData()
      formdata.append('img_file', img_file)
      uploadArticleImg(formdata).then((response: any) => {
        console.log(response)
        if (response.response.code == '200') {
          resolve(response.response.image_url)
          console.log(response.response.image_url)
        } else {
          reject('上传失败')
        }
      })
    })
}
</script>

<style lang="less" scoped>
@import url('./WriteAnEssay.less');
</style>
