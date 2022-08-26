<template>
  <section class="footer">
    <div class="container">
      <div class="bottom-box">
        <div class="nav">
          <div class="nav-list">
            <router-link to="" class="title">{{$t('common.carrers')}}</router-link>
          </div>
          <div class="copyright">
            <img src="~@/assets/images/logo_update.png" alt="" />
            <div v-html="$t('common.copyright')"></div>
          </div>
        </div>
        <div class="quick">
          <div class="title">{{ $t("common.quickBuy") }}</div>
          <div class="list">
            <div :key="coin.code" v-for="coin in sells">
              <router-link to="/">{{ $t("common.buy") + _.toUpper(coin.targetCoinName) }}</router-link>
            </div>
          </div>
        </div>
        <div class="subscribe">
          <div class="title">{{ $t("common.subscribe.title") }}</div>
          <el-form
            :model="subscribe"
            ref="numberValidateForm"
            class="demo-ruleForm"
          >
            <el-row :gutter="24">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item
                  :required="true"
                  :label="$t('common.subscribe.email')"
                  prop="email"
                >
                  <el-input
                    type="text"
                    v-model="subscribe.email"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item
                  :required="true"
                  :label="$t('common.subscribe.newsletterType')"
                  prop="email"
                >
                  <!-- <el-select
                    v-model="subscribe.type"
                    :placeholder="$t('common.subscribe.select')"
                  >
                      <el-option value="$t('common.option1')">{{ $t("common.option1") }}</el-option>
                      <el-option value="$t('common.option1')">{{ $t("common.option2") }}</el-option>
                  </el-select> -->
                  <br/>
                  <select name="news" id="newsType" class="el-input" placeholder="$t('common.subscribe.select')">
                     <option value="$t('common.option')">{{ $t("common.option") }}</option>
                    <option value="$t('common.option1')">{{ $t("common.option1") }}</option>
                    <option value="$t('common.option2')">{{ $t("common.option2") }}</option>
                  </select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item>
              <el-button @click="submitForm('numberValidateForm')">{{
                $t("common.subscribe.subscribe")
              }}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mapGetters } from "vuex";
// import { ref } from 'vue'

// const value = ref('')

// const options = [
//   {
//     value: 'Option1',
//     label: 'Option1',
//   },
//   {
//     value: 'Option2',
//     label: 'Option2',
//   },
// ]

export default {
  props: {},
  components: {},
  data() {
    return {
      subscribe: {},
    };
  },
  computed: {
    ...mapGetters(["coins"]),
    sells() {
      return this._.unionBy(this.coins, "targetCoinName");
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.footer {
  overflow: hidden;
  padding: 25px 0;
  .quick {
    flex: 33%;
    font-size: 14px;
    padding-bottom: 20px;
    // border-bottom: 1px solid #fff;
    margin-bottom: 15px;
    @media screen and (max-width: 768px){
      border-bottom: 1px solid #fff;
      margin-bottom: 20px;
      flex: 100%;
      text-align: center;
    }
    .title {
      margin-bottom: 15px;
      font-weight: bold;
    }
    .list {
      @media screen and (max-width: 768px){
     display: flex;
    }
      div {
        flex: 10%;
        // padding: 4px 10px;
        border-radius: 15px;
        padding: 10px 0px;
        // border: 1px solid white;
        cursor: pointer;
        flex-grow: 0;
        margin-bottom: 10px;
        // text-align: center;
        margin-right: 10px;
        @media screen and (max-width: 992px) {
          flex: 15%;
        }
        @media screen and (max-width: 768px) {
          flex: 25%;
        }
      }
    }
  }
  .bottom-box {
    display: flex;
    .nav {
      flex: 33%;
      .nav-list {
        margin-bottom: 15px;
        text-align: left;
        white-space: wrap;
        a {
          display: inline-block;
          width: 20%;
          margin-bottom: 10px;
        }
      }
    }
    .copyright {
      line-height: 2em;
      img {
        max-width: 150px;
        float: left;
        display: block;
        margin-right: 20px;
        filter: brightness(0) invert(1);
      }
    }
    .subscribe {
      flex: 33%;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      .nav {
        flex: 100%;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px #fff solid;
        .nav-list a {
          width: 33%;
        }
      }
      .subscribe {
        flex: 100%;
      }
    }
  }
}
</style>
