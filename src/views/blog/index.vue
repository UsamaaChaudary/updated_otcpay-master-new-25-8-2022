<template>
  <div class="blog-box">
    <div class="container">
      <div class="title">{{ $t("blog.title") }}</div>
      <div class="categories">
        <el-row :gutter="40">
          <el-col :span="3" v-for="category in catrgories" :key="category.id">
            <div
              class="category"
              @click="currentId = category.categoryId"
              :class="currentId == category.categoryId ? 'active' : ''"
            >
              {{ category.categoryName }}
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <el-row :gutter="40">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
            :xl="8"
            :key="item"
            v-for="item in list"
          >
            <div class="item">
              <router-link :to="'/blog/detail/' + item.id">
                <div class="pic">
                  <el-image
                    style="width: 100%; height: 230px"
                    :src="item.articleHeadPic"
                    fit="cover"
                  ></el-image>
                </div>
                <div class="tit">{{ item.articleName }}</div>
                <div class="info">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <i class="el-icon-chat-line-round" />{{
                        item.articleReadCount
                      }}
                    </el-col>
                    <el-col :span="12">
                      <i class="el-icon-time" />{{
                        item.articleGlobalGmtCreate
                      }}
                    </el-col>
                  </el-row>
                </div>
                <div class="desc">{{ item.summary }}</div>
              </router-link>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  props: {},
  components: {},
  data() {
    return {
      catrgories: [],
      currentId: null,
      list: [],
      page: 1,
      size: 9,
      total: 0,
    };
  },
  computed: {},
  watch: {
    currentId() {
      this.getList();
    },
  },
  created() {
    this.getCatrgories();
  },
  mounted() {},
  methods: {
    getCatrgories() {
      request
        .get(process.env.VUE_APP_BLOG_BASE_URL + "/blog/categories", {
          params: {
            limit: 10,
            page: 1,
            languageCode: this.$i18n.locale
              .replaceAll("_us", "")
              .replaceAll("_CN", ""),
          },
        })
        .then((res) => {
          this.catrgories = res.data;
          this.currentId = this.catrgories[0].categoryId;
        });
    },
    getList() {
      request
        .get(process.env.VUE_APP_BLOG_BASE_URL + "/blog/acticles", {
          params: {
            limit: this.size,
            page: this.page,
            categoryId: this.currentId,
          },
        })
        .then((res) => {
          this.list = res.data;
          this.total = res.total;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.blog-box {
  margin-top: 150px;
  text-align: center;
  .title {
    line-height: 2em;
    font-size: 36px;
    font-weight: bold;
  }
  .categories {
    line-height: 46px;
    cursor: pointer;
    .active {
      border-bottom: 2px solid #f9943d;
      color: #f9943d;
    }
  }
  .item {
    padding: 15px;
    transition: all 0.2s ease-in;
    border-radius: 10px;
    &:hover {
      background-image: linear-gradient(#e373f0, #f9bfbb);
    }
    .pic {
      border-radius: 10px;
      img {
        width: 100%;
      }
    }
    .tit {
      font-size: 24px;
      color: #123769;
      line-height: 2em;
    }
    .info {
      font-size: 14px;
      i {
        margin-right: 5px;
      }
    }
    .desc {
      line-height: 1.6em;
      margin-top: 10px;
    }
  }
  .page {
    margin: 20px 0;
  }
}
</style>
