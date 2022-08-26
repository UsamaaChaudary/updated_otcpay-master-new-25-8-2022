<template>
  <div class="contact-box">
    <div class="container">
      <div class="top">
        <div class="title">{{ $t("contact.title") }}</div>
        <div class="subtitle">{{ $t("contact.subtitle") }}</div>
      </div>
      <div class="form">
        <el-form
          ref="form"
          label-position="top"
          :model="form"
          label-width="100%"
        >
          <el-row :gutter="30">
            <el-col :span="12" >
              <el-form-item  :label="$t('contact.form.last')" class="el-form-item is-required">
                <el-input v-model="form.lastName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12"  >
              <el-form-item :label="$t('contact.form.first')"  class="el-form-item is-required">
                <el-input v-model="form.firstName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12"  >
              <el-form-item :label="$t('contact.form.email')"  class="el-form-item is-required">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12"  >
              <el-form-item :label="$t('contact.form.company')">
                <el-input v-model="form.company"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('contact.form.zhicheng')">
                <el-input v-model="form.zhicheng"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('contact.form.miaoshu')">
                <el-input v-model="form.miaoshu"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12"  >
              <el-form-item :label="$t('contact.form.phone')"  class="el-form-item is-required">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('contact.form.website')">
                <el-input v-model="form.website"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="">
                <el-checkbox
                  :label="$t('contact.form.checkTip')"
                  v-model="form.check"
                ></el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button
              type="primary"
              :style="{ width: '20%', margin:'0px auto' }"
              @click="onSubmit"
              >{{ $t("contact.form.submit") }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="bottom">
        <div class="comp-name">{{ $t("contact.companyName") }}</div>
        <div class="comp-address">{{ $t("contact.contactAddress") }}</div>
        <a href="mailto:service@fintecwealth.com" class="comp-mail">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
          </svg>
          <p>{{ $t("contact.contactEmail") }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      form: {},
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit() {},
  },
};
</script>

<style scoped lang="scss">
.contact-box {
  margin-top: 150px;
}
.top {
  text-align: center;
  .title {
    font-size: 36px;
    color: #f68819;
    font-weight: bold;
    line-height: 2em;
  }
  .subtitle {
    color: red;
    line-height: 2em;
  }
}
.form {
  width: 800px;
  margin: 30px auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 50px rgba(125,0,255,0.15);
  padding: 20px;
}

.bottom{
  width: 800px;
  margin: 40px auto;
  box-shadow: 0px 0px 50px rgba(125,0,255,0.15);
  background: #fff;
  padding: 40px 20px;
  border-radius: 10px;
  .comp-name{
    font-weight: 700;
    color: #f68819;
    font-size: 20px;
    margin-bottom:12px;
  }
  .comp-address{
    margin-bottom: 24px;
  }
  .comp-mail{
    display: flex;
    align-items: center;
    color:#f68819;
    svg{
      max-width: 28px;
      height: auto;
      margin-right: 12px;
      path{
        fill:#f68819;
      }
    }
  }
}
@media(max-width:768px){
  .bottom,.form {
    width: 96%;
    margin:20px auto;
  }
}
</style>
