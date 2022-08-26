<template>
<div>
  <section class="header">
    <div class="container">
      <div class="top">
        <div class="left-nav">
          <div class="logo">
            <router-link to="/"
              ><img src="~@/assets/images/logo_update.png"
            /></router-link>
          </div>
        </div>
        <div class="right-nav">
          <div class="nav-list">
            <router-link to="/">{{ $t("menu.personal") }}</router-link>
            <router-link to="/business">{{ $t("menu.business") }}</router-link>
          </div>
          <div class="drawer-nav">
            <div class="btn" @click="drawer = true">
              <!-- <Icon type="24px" :size="28" /> -->
              <svg style="vertical-align: middle; margin-right: 4px;" width="25px" height="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
              </svg>
            </div>
          </div>
          <div class="nav-list">
            <router-link to="/about">{{ $t("menu.about") }}</router-link>
            <!-- <router-link to="/profession">{{
              $t("menu.profession")
            }}</router-link> -->
            <router-link to="/order">{{ $t("menu.order") }}</router-link>
            <!-- <router-link to="/blog">{{ $t("menu.blog") }}</router-link> -->
            <router-link to="/contact">{{ $t("menu.contact") }}</router-link>
            <router-link to="/email">{{ $t("menu.email") }}</router-link>
            <div class="language" @click="changeLanguage">
              <Icon :size="28" :type="$langIcon($i18n.locale)" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <el-dialog :visible.sync="showLanguages" width="60%">
      <el-radio-group v-model="currentLanguage">
        <el-radio
          :key="language.name"
          v-for="(language, index) in languages"
          :label="index"
          >{{ language.name }}</el-radio
        >
      </el-radio-group>
    </el-dialog>

    <!-- mobile drawer navigation start -->
    <el-drawer :visible.sync="drawer" class="cust_drawer">
      <router-link to="/">{{ $t("menu.personal") }}</router-link>
      <br/>
      <router-link to="/business">{{
        $t("menu.business")
      }}</router-link>
      <br/>
      <router-link to="/about">{{ $t("menu.about") }}</router-link>
      <br/>
      <!-- <router-link to="/profession">{{
        $t("menu.profession")
      }}</router-link> -->
      <router-link to="/order">{{ $t("menu.order") }}</router-link>
      <br/>
      <!-- <router-link to="/blog">{{ $t("menu.blog") }}</router-link>
      <br/> -->
      <!-- <router-link to="/support">{{ $t("menu.support") }}</router-link> -->
      <router-link to="/contact">{{ $t("menu.contact") }}</router-link>
      <!-- <br/>
      <router-link to="/email">{{ $t("menu.email") }}</router-link> -->
    </el-drawer>
</div>

</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      showLanguages: false,
      languages: this.$i18n.messages,
      currentLanguage: this.$i18n.locale,
      drawer: false,
    };
  },
  computed: {},
  watch: {
    currentLanguage(val) {
      this.$i18n.locale = val;
      localStorage.setItem("language", val);
      this.showLanguages = false;
    },
  },
  created() {},
  mounted() {},
  methods: {
    changeLanguage() {
      this.showLanguages = true;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  overflow: hidden;
  padding: 20px 0;
  background: #fff;
  z-index: 9;
  box-shadow: 0 3px 10px rgb(0 0 0 / 5%);
  position: fixed;
  top: 0;
  line-height: 50px;
  width: 100%;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px){
      width: 98%;
      margin: 0 auto;
    }
  }
  .left-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    margin-right: 20px;
    img {
      max-width: 150px;
      vertical-align: middle;
    }
  }
  .nav-list {
    a {
      margin: 0 20px;
      padding-bottom: 10px;
      &.router-link-exact-active {
        border-bottom: 2px solid;
        font-weight: 600;
      }
    }
    .language {
      float: right;
      cursor: pointer;
    }
  }
  .right-nav {
    display: flex;
  }
  .drawer-nav {
    display: none;
    margin-right: 5px;
  }
}
@media screen and (max-width: 768px) {
  .header {
    padding: 15px 0;
    .nav-list a {
      display: none;
    }
    .drawer-nav {
      display: block;
    }
  }
  .cust_drawer{
      .el-drawer{
        width: 50%;
        padding: 0 0 0 20px;
      }
      a {
        width: 95%;
        margin: 5px auto;
        display: block;
        line-height: 2em;
        .router-link-exact-active {
          border-bottom: 2px solid #43497d;
          font-weight: 600;
        }
      }
    }
}
</style>
