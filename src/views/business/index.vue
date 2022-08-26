<template>
  <section class="business-box">
    <section class="container">
      <div class="one">
        <div>
          <div class="title" v-html="$t('business.one.title')"></div>
          <div class="desc" v-html="$t('business.one.desc')"></div>
          <el-button type="primary">{{ $t("business.one.contact") }}</el-button>
        </div>
      </div>
      <div class="two">
        <el-row :gutter="40">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div>
              <div class="text">
             <!--    <div class="title" v-html="$t('business.two.title')"></div> -->
                <div class="desc" v-html="$t('business.two.desc')"></div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="media">
              <div>
                <img src="~@/assets/images/b.png" alt="" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="three">
        <el-row :gutter="40">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="media">
              <div>
                <img src="~@/assets/images/e.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div>
              <div class="text">
                <!-- <div class="title" v-html="$t('business.three.title')"></div> -->
                <div class="desc" v-html="$t('business.three.desc')"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="four">
        <div>
          <div class="text">
            <div class="title">
              <div class="title" v-html="$t('business.four.title')"></div>
              <div class="desc" v-html="$t('business.four.desc')"></div>
            </div>
          </div>
        </div>
        <div>
          <div class="list">
            <a href=""><img src="~@/assets/images/图层 2.png" alt="" /></a>
            <a href=""><img src="~@/assets/images/图层 3.png" alt="" /></a>
            <a href=""><img src="~@/assets/images/图层 4.png" alt="" /></a>
            <a href=""><img src="~@/assets/images/图层 5.png" alt="" /></a>
            <a href=""><img src="~@/assets/images/图层 6.png" alt="" /></a>
            <a href=""><img src="~@/assets/images/图层 7.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="five">
        <el-row :gutter="40">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="media">
              <div>
                <img src="~@/assets/images/five.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div>
              <div class="text">
                <div class="title" v-html="$t('business.five.title')"></div>
                <div class="desc" v-html="$t('business.five.desc')"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <div class="six">
        <el-row :gutter="40">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="media">
              <div v-animate-onscroll.repeat="'animated bounceInLeft'">
                <img src="~@/assets/images/six.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div v-animate-onscroll.repeat="'animated flipInX'">
              <div class="text">
                <div class="title" v-html="$t('business.six.title')"></div>
                <div class="desc" v-html="$t('business.six.desc')"></div>
              </div>
            </div>
            <div class="list">
              <div class="item">
                <div class="pic">
                  <img src="~@/assets/images/icon1.png" alt="" />
                </div>
                <div class="t" v-html="$t('business.six.list1')"></div>
              </div>
              <div class="item">
                <div class="pic">
                  <img src="~@/assets/images/icon2.png" alt="" />
                </div>
                <div class="t" v-html="$t('business.six.list2')"></div>
              </div>
              <div class="item">
                <div class="pic">
                  <img src="~@/assets/images/icon3.png" alt="" />
                </div>
                <div class="t" v-html="$t('business.six.list3')"></div>
              </div>
              <div class="item">
                <div class="pic">
                  <img src="~@/assets/images/icon4.png" alt="" />
                </div>
                <div class="t" v-html="$t('business.six.list4')"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div> -->
      <div class="seven">
        <div class="title">{{ $t("business.seven.title") }}</div>
        <el-row :gutter="40">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="media talk">
              <div>
                <img src="~@/assets/images/vc.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="media media talk">
              <div>
                <img src="~@/assets/images/d.png" alt="" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <div class="eight">
        <div class="title">{{ $t("business.eight.title") }}</div>
        <el-row :gutter="40">
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="media">
              <div v-animate-onscroll.repeat="'animated bounceInLeft'">
                <img src="~@/assets/images/eight.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
            <div class="text">
              <div class="desc" v-html="$t('business.eight.desc')"></div>
              <div class="name">--{{ $t("business.eight.name") }}</div>
            </div>
          </el-col>
        </el-row>
      </div> -->
      <div class="contact">
        <div class="title" v-html="$t('business.contact.title')"></div>
        <div class="btn">
          <el-button type="primary">{{ $t("business.contact.btn") }}</el-button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.business-box {
  margin-top: 150px;
  .one {
    padding: 30px;
    @media screen and (max-width: 768px) {
      padding: 10px;
      text-align: center;
    }
    .title {
      font-size: 40px;
      font-weight: bold;
      line-height: 1.4;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-top: 10px;
      }
    }
    .desc {
      font-size: 22px;
      color: #123769;
      margin-top: .6em;
      margin-bottom: 1.6em;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }

  .three{
    .el-row{
      display: flex;
      align-items: center;
        @media screen and(max-width:767px){
           display: flex;
           flex-direction: column-reverse;
      }
    }
 @media screen and (max-width: 768px) {
text-align: center;
     }
  }
  .two {
    .el-row{
      display: flex;
      align-items: center;
      @media screen and(max-width:767px){
           display: flex;
           flex-direction: column;
      }
    }
    padding: 20px 30px;
     @media screen and (max-width: 768px) {
text-align: center;
     }
  }
  .four {
    border-radius: 1rem;
    box-shadow: 0px 0px 50px rgb(125 0 255 / 15%);
    background: #fff;
    padding: 40px;
    width: 96%;
    margin: 40px auto;
    .text {
      text-align: center;
      .title{
        margin-top: 0;
      }
      .desc {
        margin: 0 auto;
        color: #123769;
        line-height: 1.6em;
        font-size: 16px;
        margin-top: .6em;
        margin-bottom: 1.6em;
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 80%;
      margin: 0 auto;
      @media screen and (max-width: 768px){
        width: 96%;
        justify-content: space-between;
      }
      a {
        text-align: center;
        flex: 30%;
        margin-top: 25px;
        @media screen and (max-width: 768px){
          flex: 48%;
        }
        img {
          max-width: 100%;
        }
      }
    }
  }

  .five{
          @media screen and (max-width: 768px) {
text-align: center;
     }
  }
  
  .five,
  .six {
    border-bottom: 1px solid #ddd;
    margin-top: 30px;
    padding-bottom: 20px;
    .text {
      .title {
        margin-top: 40px;
      }
    }
  }
  .six {
    .list {
      display: flex;
      flex-wrap: wrap;
      .item {
        margin-top: 2em;
        flex: 50%;
        display: flex;
        align-items: center;
        line-height: 1.4em;
        .t {
          padding-left: 15px;
        }
      }
    }
  }
  .seven,
  .eight {
    margin-top: 30px;
    .title {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.4;
      text-align: center;
      margin-bottom: 1em;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .media {
      padding: 0;
      &.talk {
        text-align: right;
      }
    }
  }
  .eight {
    .media {
      img {
        width: 60%;
      }
    }
    .text {
      line-height: 1.4;
      color: #333;
      margin-top: 6em;
    }
    .name {
      margin-top: 20px;
      color: #123769;
      font-weight: bold;
    }
  }
  .contact {
    border-radius: 1rem;
    box-shadow: 0px 0px 50px rgb(125 0 255 / 15%);
    padding: 40px;
    display: flex;
    align-items: center;
    width: 90%;
    background-color: #fff;
    justify-content: space-between;
    margin: 50px auto;

   @media screen and (max-width: 768px) {
display: block;
text-align: center;
     }
  
    .title {
      width: 60%;
      font-size: 24px;
      line-height: 1.4;
       @media screen and (max-width: 768px) {
 width: 100%;
 padding-bottom: 20px;
     }
    }
  }
  .text {
    .title {
      font-size: 30px;
      font-weight: bold;
      line-height: 1.4;
      margin-top: 40px;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-top: 10px;
      }
    }
    .desc {
      margin-top: 0.6em;
      font-size: 20px;
      width: 70%;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top: 10px;
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  .media {
    padding: 0 30px;
    text-align: center;
    img {
      width: 100%;
      @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
