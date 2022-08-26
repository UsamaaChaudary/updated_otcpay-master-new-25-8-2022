<template>
  <section class="about">
    <div class="about-bg">
      <div class="overlay"></div>
    <div class="container">
      <div class="one">
        <div class="title">{{ $t("about.one.title") }}</div>
        <div class="desc" v-html="$t('about.one.desc')"></div>
       
      </div>
      </div>
      </div>
      <div class="container one">
         <div class="pics">
          <div class="pic">
            <div v-animate-onscroll.repeat="'animated flipInX'">
              <img src="~@/assets/images/about1.jpg" alt="" />
            </div>
          </div>
          <div class="pic">
            <div v-animate-onscroll.repeat="'animated flipInX'">
              <img src="~@/assets/images/anout.jpg" alt="" />
            </div>
          </div>
          <div class="pic">
            <div v-animate-onscroll.repeat="'animated flipInX'">
              <img src="~@/assets/images/anout3.jpg" alt="" />
            </div>
          </div>
           <div class="pic">
            <div v-animate-onscroll.repeat="'animated flipInX'">
              <img src="~@/assets/images/about1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="icons">
          <div class="icon">
            <img src="~@/assets/images/about_icon1.png" alt="" />
            <div class="num">
              <ICountUp
                :delay="0"
                :endVal="1700"
                :options="{
                  suffix: '%+',
                }"
              />
            </div>
            <div class="small">{{ $t("about.one.sz") }}</div>
          </div>
          <div class="icon">
            <img src="~@/assets/images/about_icon2.png" alt="" />
            <div class="num">
              <ICountUp
                :delay="0"
                :endVal="500"
                :options="{
                  suffix: $t('about.one.wan') + '+',
                }"
              />
            </div>
            <div class="small">{{ $t("about.one.gk") }}</div>
          </div>
          <div class="icon">
            <img src="~@/assets/images/about_icon3.png" alt="" />
            <div class="num">
              <ICountUp
                :delay="0"
                :endVal="2"
                :options="{
                  suffix: 'B+',
                  prefix: '$',
                }"
              />
            </div>
            <div class="small">{{ $t("about.one.jm") }}</div>
          </div>
          <div class="icon">
            <img src="~@/assets/images/about_icon4.png" alt="" />
            <div class="num">
              <ICountUp
                :delay="0"
                :endVal="80"
                :options="{
                  suffix: '+',
                }"
              />
            </div>
            <div class="small">{{ $t("about.one.zc") }}</div>
          </div>
        </div>
      </div>
      <div class="container ">
      <div class="two">
        <div class="title">{{ $t("about.two.title") }}</div>
        <div class="list">
          <a href=""><img src="~@/assets/images/图层 2.png" alt="" /></a>
          <a href=""><img src="~@/assets/images/图层 3.png" alt="" /></a>
          <a href=""><img src="~@/assets/images/图层 4.png" alt="" /></a>
          <a href=""><img src="~@/assets/images/图层 5.png" alt="" /></a>
          <a href=""><img src="~@/assets/images/图层 6.png" alt="" /></a>
          <a href=""><img src="~@/assets/images/图层 7.png" alt="" /></a>
        </div>
      </div>
      <div class="three">
        <div class="title">{{ $t("about.three.title") }}</div>
        <div class="list">
          <div
            class="item"
            :key="index"
            v-for="(item, index) in $t('about.three.leadership')"
          >
            <div v-animate-onscroll.repeat="'animated flipInX'">
              <img :src="getImage(index + 1)" alt="" />
              <div class="card-detail">
                <p class="name">{{ item.name }}</p>
              <p class="desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="four">
        <div class="title">
          {{ $t("about.four.title") }}
        </div>
        <div class="futures">
          <div class="name">{{ $t("about.four.name") }}</div>
          <div class="content">
            <el-collapse
              :accordion="true"
              v-model="activeNames"
              @change="handleChange"
            >
              <el-collapse-item title="Quality education" name="1">
                <div>
                  Ensure inclusive and equitable quality education and promote
                  lifelong learning opportunities for allquality education and
                  promote lifelong learning . Ensure inclusive and equitable
                  quality education and promote lifelong learning opportunities
                  for allquality education and promote lifelong learning .
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Decent work and economic growth"
                name="2"
              >
                <div>
                  Ensure inclusive and equitable quality education and promote
                  lifelong learning opportunities for allquality education and
                  promote lifelong learning . Ensure inclusive and equitable
                  quality education and promote lifelong learning opportunities
                  for allquality education and promote lifelong learning .
                </div>
              </el-collapse-item>
              <el-collapse-item title="Partnerships for the goals" name="3">
                <div>
                  Ensure inclusive and equitable quality education and promote
                  lifelong learning opportunities for allquality education and
                  promote lifelong learning . Ensure inclusive and equitable
                  quality education and promote lifelong learning opportunities
                  for allquality education and promote lifelong learning .
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Decent work and economic growth"
                name="4"
              >
                <div>
                  Ensure inclusive and equitable quality education and promote
                  lifelong learning opportunities for allquality education and
                  promote lifelong learning . Ensure inclusive and equitable
                  quality education and promote lifelong learning opportunities
                  for allquality education and promote lifelong learning .
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  props: {},
  components: { ICountUp },
  data() {
    return {
      activeNames: "1",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getImage(index) {
      try {
        return require("../../assets/images/leadership" + index + ".png");
      } catch (e) {
        return require("../../assets/images/leadership1.png");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  margin-top: 92px;
  padding-bottom: 80px;
}
.about-bg {
  display: flex;
    min-height: 600px;
    background-image: url('../../assets/images/background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    color: #fff;
    position: relative;
.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #913804a6;
}
    .title {
  text-align: center;
  color: #fff;
  line-height: 30px;
  font-size: 38px;
  margin: 40px 0 12px;
  @media screen and (max-width: 768px) {
    margin: 20px 0;
    font-size: 22px;
  }
}
.one {
  position: relative;
  text-align: center;
  .desc {
    padding: 40px 0px;
    max-width: 700px;
    margin: 0px auto;
    line-height: 1.6;
    color: #fff;
    font-size: 18px;
  }
}
}

.one{
 .pics {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 80px;
    flex-wrap: wrap;

    @media screen and (max-width:767px){
      
    }
    .pic {
      // flex: 30%;
      margin-top: 3em;
      padding: 0 20px;
      @media screen and (max-width: 768px) {
        padding: 0 5px;
      }
      img {
        border-radius: 1rem;
        width: 250px;
        height: 250px;
        max-width: 100%;
      }
    }
  }
  .icons {
    border-radius: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 50px rgb(125 0 255 / 15%);
    justify-content: space-evenly;
    padding: 40px 0px;
    flex-wrap: wrap;
    .icon {
     text-align: center;
      padding: 0 20px;
      box-sizing: border-box;
      @media screen and (max-width: 768px) {
        flex: 40%;
      }
      .num {
        max-width: 100%;
        font-size: 24px;
        color: #000;
        margin-top: 0.5em;
      }
      .small {
        font-size: 14px;
        color: #000;
      }
    }
  }
}

 
.two {
  background: #fff;
  width: 96%;
  margin: 60px auto 0px auto;
  padding: 40px 20px 60px 20px;
  .title{
    text-align: center;
    margin: 0 0 12px;
    font-size: 24px;
    color: #f8a358;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 0px;
    a {
      padding: 0px 20px;
      text-align: center;
      margin: 15px 10px;
    }
  }
}
.three {
 box-shadow:  0px 0px 50px rgb(125 0 255 / 15%);
   padding: 20px 0px;
   border-radius: 1rem;
  .title{
    text-align: center;
    margin: 0 0 12px;
    font-size: 24px;
    padding: 20px 0px 40px 0px;
    color: #f8a358;
  }
  .list {
    display: flex;
    justify-content: center;
    text-align: center;
    color: #123769;
    flex-wrap: wrap;
    .item {
      padding: 0 15px;
      flex: 25%;
      @media screen and (max-width: 768px) {
        flex: 50%;
      }
      img {
        border-radius: 1rem;
        max-width: 100%;
      }
      .name {
        font-weight: bold;
      }
      .desc {
        font-size: 12px;
      }
    }
  }
}
.four {
  .futures {
    width: 80%;
    border: 2px solid #43497d;
    border-radius: 10px;
    padding: 2%;
    background: white;
    color: #123769;
    margin: 0 auto;
    .name {
      line-height: 2em;
      margin-bottom: 1.5em;
    }
  }
}
</style>
