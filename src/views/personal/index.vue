<template>
  <section class="personal">
    <div class="">
      
      <div class="home-wrapper">
      <div class="welcome">
            <div class="title">{{ $t("personal.welcome.title") }}</div>
            <div class="subtitle">{{ $t("personal.welcome.subtitle") }}</div>
          </div>
        <div class="home-img">
        <img src="~@/assets/images/home2.png" alt="" />
        </div>
      </div>
         
      

      <!--form-->
      <div class="buy-now">
        <TradeBox />
      </div>
      <div class="container">
      <div class="find">
              <div class="find-tit">{{ $t("personal.welcome.find") }}:</div>
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
    </div>
  </section>
</template>

<script>
import TradeBox from "@/components/TradeBox/index";
export default {
  props: {},
  components: { TradeBox },
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
@import "~@/styles/variables.scss";
.personal {
  margin-top: 92px;
  @media screen and (max-width: 768px) {
    margin-top: 120px;
    padding-bottom: 40px;
  }
.home-wrapper{
  // background-color: rgb(14 1 1 / 95%);
display: flex;
justify-content:center;
align-items: center;

.home-img {
  width: 50%;
  @media screen and (max-width: 768px){
   display: none;

    }

  img{
    width: 100%;
    margin: 0px auto;
  }
}
.welcome {
  width: 50%;
    @media screen and (max-width: 768px) {
         width: 100%;
        text-align: center;
    }
    .title {
      color:#f8a358;
      font-size: 48px;
      text-align: center;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        margin-top: 0px;
        padding-top: 80px;
        font-size: 30px;
      }
    }
    .subtitle {
      color: #000;
      text-align: center;
      font-size: 22px;
      line-height: 3em;
      @media screen and (max-width: 768px){
        font-size: 18px;
      }
    }
    
  }
  }
  .find {
    text-align: center;
    border-radius: 1rem;
    padding: 40px 0px;
    text-align: center;
    background: #f5f5f5;
    margin-top: 3em;
    margin-bottom: 20px;
      margin-top: 3em;
      margin-bottom: 60px;
      .find-tit {
        padding-bottom: 40px;
    font-size: 24px;
    color: #f8a358;
    font-weight: 700;
      }
      .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
        @media screen and (max-width: 768px) {
          margin: 0 auto;
          justify-content: center;
        }
        a {
          width: 30%;
          padding: 20px 0px;
          @media screen and (max-width: 768px){
            text-align: center;
            width: 45%;
          }
        }
      }
    }
}
</style>
