<template>
  <div class="blog_detail">
    <div class="title">
      {{ detail.articleName }}
    </div>
    <div class="info">
      <span>{{ $t("blog.createTime") }}: {{ detail.gmtCreate }}</span>
      <span>{{ $t("blog.updateTime") }}: {{ detail.gmtModified }}</span>
    </div>
    <div class="content container" v-html="detail.content"></div>
  </div>
</template>

<script type="text/javascript">
import request from "@/utils/request";
export default {
  data() {
    return {
      id: null,
      detail: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetail();
  },
  components: {},
  methods: {
    getDetail() {
      request
        .get(process.env.VUE_APP_BLOG_BASE_URL + "/blog/acticle/" + this.id)
        .then((res) => {
          this.detail = res.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog_detail {
  .title {
    text-align: center;
    font-size: 30px;
    line-height: 2em;
  }
  .info {
    text-align: center;
    line-height: 2em;
    span {
      margin: 0 15px;
    }
  }
}
</style>
