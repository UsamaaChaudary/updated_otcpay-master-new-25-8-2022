<template>
  <div class="email-box">
    <div class="container email-wrapper">
      <!-- <div class="top">
        {{ $t("email.title") }}
      </div> -->
      <div class="content">
        Launched in 2019 with a simple aim: increase cryptocurrency adoption.
        With a team of just two young entrepreneurs — co-founders Ivan
        Soto-Wright and Victor Faramond — the company set out to create a simple
        and secure software solution that would enable people from all over the
        world to participate in the biggest digital revolution since the
        internet.launched in 2019 with a simple aim: increase cryptocurrency
        adoption. With a team of just two young entrepreneurs — co-founders Ivan
        Soto-Wright and Victor Faramond — the company set out to create a simple
        and secure software solution that would enable people from all over the
        world to participate in the biggest digital revolution since the
        internet.launched in 2019 with a simple aim: increase cryptocurrency
        adoption. With a team of just two young entrepreneurs — co-founders Ivan
        Soto-Wright and Victor Faramond — the company set out to create a simple
        and secure software solution that would enable people from all over the
        world to participate in the biggest digital revolution since the
        internet.
      </div>
    </div>
  </div>
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
.email-box {
  margin-top: 150px;
  margin-bottom: 75px;
  text-align: center;

  .email-wrapper{
    border-radius: 1rem;
    max-width: 800px;
    padding: 20px;
    text-align: justify;
    margin: 0px auto;
      box-shadow: 0px 0px 50px rgb(125 0 255 / 15%);

  }
  .top {
    // background: url("~@/assets/images/email.png") no-repeat center center;
    line-height: 1.6;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
  }
  .content {
    line-height: 2em;
    margin: 25px 0;
  }
}
</style>
