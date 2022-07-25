<!--#-*- codeing = utf-8 -*- -->
<!--#@Time : 2022/7/20 15:02-->
<!--#@Author : rice_straw-->
<!--#@File : Articles.vue-->
<!--#@Software:WebStorm-->

<template>
  <!--  <h2>Articles</h2>-->
  <SecondaryBg></SecondaryBg>
  <div class="articles_container">
    <div class="articles_container_left">
      <ul class="articles_container_left_ul">
        <li>
          <!--          点赞-->
          <thumbs-up
            class="articles_container_left_icon"
            title="点赞"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          收藏-->
          <like
            title="收藏"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          评论-->
          <comments
            title="评论"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          转发-->
          <share-one
            title="转发"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
        <li>
          <!--          更多好文 到时候链接文章页面-->
          <more-one
            title="更多好文"
            class="articles_container_left_icon"
            theme="outline"
            size="24"
            fill="#080808"
          />
        </li>
      </ul>
    </div>
    <!--    文章标题，标签，文章内容容器，作者头像，昵称，个人签名，发布日期，留言数量，未经作者允许禁止转载，点赞，收藏-->
    <div class="articles_container_father">
      <!--      =====-->
      <div class="articles_container_item1">
        <div class="articles_container_item1_center">
          <h1>ES2022新规发布，8个实用新功能</h1>
          <div class="articles_author_information">
            <img
              class="articles_img"
              src="https://i.loli.net/2021/10/02/DQi2gxsqr4PwIT5.jpg"
              alt=""
            />
            <span class="articles_span_one">
              <b style="font-size: 1rem">无敌的小的小无敌的小的小猪猪猪无敌的小的小猪猪猪猪猪猪</b>
              <br />
              2022年7月20日 16:48</span
            >
          </div>
        </div>
        <!--        ====-->
        <!--        文章容器-->
        <div class="user_article_container">
          新的 ES13 规范终于发布了。 JavaScript 不是一种开源语言，它是一种需要遵循 ECMAScript
          标准规范编写的语言，TC39 委员会负责讨论和批准新功能的发布， 那TC39他们是谁？ “ECMA
          International 的 TC39 是一群 JavaScript 开发人员、实施者、学者等，他们与社区合作维护和发展
          JavaScript 的定义。” — TC39.es 他们的发布过程由五个阶段组成，自 2015
          年以来，他们一直在进行年度发布，它们通常发生在春天举行发布。 有两种方法可以引用任何
          ECMAScript 版本： 按年份：这个新版本将是 ES2022。 按其迭代次数：这个新版本将是第 13
          次迭代，所以它可以被称为 ES13。
          那么这次这个版本有什么新东西呢？我们可以对哪些功能感到兴奋？ 01、正则表达式匹配索引
          目前，在 JavaScript 中使用 JavaScript Regex API
          时，仅返回匹配的开始索引。但是，对于一些特殊的高级场景，这还不够。
          作为这些规范的一部分，添加了一个特殊的标志 d。通过使用它，正则表达式 API
          将返回一个二维数组作为名索引的键。它包含每个匹配项的开始和结束索引。如果在正则表达式中捕获了任何命名组，它将在
          indices.groups 对象中返回它们的开始/结束索引， 命名的组名将是它的键。 作者：陆荣涛
          链接：https://juejin.cn/post/7119309621453389855 来源：稀土掘金
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
        </div>
        <!--        =======-->

        <div class="copyrightNotice">
          <span>未经作者允许 禁止转载!</span>
          <div class="article_tags">
            标签:
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              class="mx-1"
              style="margin-left: 0.5rem"
              :type="tag.type"
              effect="dark"
            >
              {{ tag.name }}
            </el-tag>
          </div>
        </div>
        <!--        ===-->

        <!--        评论-->
        <div class="comment_container">
          <h3>评论</h3>
          <div class="textarea_inputs">
            <el-input
              v-model="textarea"
              :rows="8"
              type="textarea"
              placeholder="请输入你的评论！"
              :autofocus="true"
              @blur="InputBlur"
              @focus="InputFocus"
            />
          </div>
          <div class="input_button">
            <el-button type="primary">提交评论</el-button>
          </div>
          <!--评论显示区域-->
          <div class="show_comment_container">
            <SecondaryComments></SecondaryComments>
            <!--            <div class="top_comments">-->
            <!--              <div class="top_comments_one">-->
            <!--                <img src="https://i.loli.net/2021/10/02/zIHf4MV3DNrYwWb.jpg" alt="" />-->
            <!--                <span class="top_comments_name">稻和稻草</span>-->
            <!--                <span class="top_comments_date">2022-7-20</span>-->
            <!--              </div>-->
            <!--              <div class="top_comments_content">-->
            <!--                使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。-->
            <!--                <div class="top_comments_reply">回复评论</div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
      </div>

      <div class="articles_container_item2">
        <div class="articles_right_top">
          <img src="https://i.loli.net/2021/10/02/DQi2gxsqr4PwIT5.jpg" alt="" />
        </div>
        <div class="articles_container_item2_right">
          <h3 class="arc_h3">
            <img src="https://i.loli.net/2021/10/02/DQi2gxsqr4PwIT5.jpg" alt="" />
            <span class="span_one">无敌的小猪无敌的小猪猪无敌的小猪猪猪</span>
            <span class="span_two"> 个性签名:无敌的小猪无敌的小猪猪无敌的小猪猪猪 </span>
          </h3>
          <h6>
            <book-open
              style="position: relative; top: 0.3rem"
              theme="outline"
              size="15"
              fill="#080808"
            />
            文章数：65
          </h6>
          <h6>
            <thumbs-up
              style="position: relative; top: 0.2rem"
              theme="outline"
              size="15"
              fill="#080808"
            />
            获赞数：95
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondaryBg from '@/components/SecondaryBg/SecondaryBg.vue'
// 引入icon
import { ThumbsUp, BookOpen, Comments, Like, ShareOne, MoreOne } from '@icon-park/vue-next'
import SecondaryComments from '@/components/SecondaryComments/SecondaryComments.vue'
import { ref } from 'vue'
// 标签数据
// 原本用的是ref
const tags = ref<Array<any>>([
  { id: 1, name: '张三', type: '', state: true },
  { id: 2, name: '李四', type: 'success', state: true },
  { id: 3, name: '王二', type: 'info', state: true }
])
// 评论数据
let input_bg = ref('')
const textarea = ref('')
// 获取焦点
const InputFocus = () => {
  input_bg.value = 'https://i.loli.net/2021/10/02/HG6zU2ix7YRDp1L.jpg'
  // input_bg.value = '@/assets/images/bg04.jpg'
}
// 失去
const InputBlur = () => {
  input_bg.value = 'https://i.loli.net/2021/10/02/HG6zU2ix7YRDp1L.jpg'
}
</script>

<style lang="less" scoped>
@import url('./Articles.less');
</style>
