<template>
  <div class="search-order-box">
    <div class="top" v-loading="loading">
      <div class="title">{{ $t("order.search_title") }}</div>
    </div>
    <div class="form searchBtn">
      <el-row>
        <el-col :span="24">
          <el-input
            v-model="orderNumber"
            :placeholder="$t('order.orderNumber')"
          ></el-input>
        </el-col>
        <div class="top" v-loading="loading">
      <div class="tip">{{ $t("order.search_tip") }}</div>
    </div>
        <div class="search_btn">
          <el-button @click="search" type="primary">{{
            $t("order.dosearch")
          }}</el-button>
        </div>
      </el-row>
    </div>
    <div class="infos container" v-if="detail.id">
      <el-descriptions
        :title="$t('order.orderInfo')"
        direction="vertical"
        :column="5"
        border
      >
        <el-descriptions-item :label="$t('order.detail.createAt')">{{
          detail.gmtCreate
        }}</el-descriptions-item>
        <el-descriptions-item :label="$t('order.shibie')">{{
          detail.identityNo
        }}</el-descriptions-item>
        <el-descriptions-item :label="$t('order.detail.status')">{{
          getStatus(detail.status)
        }}</el-descriptions-item>
        <el-descriptions-item :label="$t('order.detail.type')">
          {{ $t(detail.tradeType == 1 ? "order.sell" : "order.buy") }}
        </el-descriptions-item>
        <el-descriptions-item :label="$t('order.detail.orderNumber')">{{
          detail.orderNo
        }}</el-descriptions-item>
      </el-descriptions>
      <br />
      <el-descriptions
        :title="$t('order.userDetailBean')"
        direction="vertical"
        :column="5"
        border
      >
        <el-descriptions-item :label="$t('order.email')">{{
          detail.userDetailBean.email
        }}</el-descriptions-item>
        <el-descriptions-item :label="$t('order.name')">{{
          detail.userDetailBean.fullName
        }}</el-descriptions-item>
        <el-descriptions-item :label="$t('order.regionCode')">{{
          detail.userDetailBean.regionCode
        }}</el-descriptions-item>
        <el-descriptions-item :label="$t('order.phone')">
          {{ detail.userDetailBean.phone }}
        </el-descriptions-item>
        <el-descriptions-item :label="$t('order.coinAddress')">{{
          detail.userDetailBean.coinAddress
        }}</el-descriptions-item>
      </el-descriptions>
      <br />
      <el-descriptions
        :title="$t('order.paymentInfo')"
        direction="vertical"
        :column="5"
        border
      >
        <template v-if="detail.tradeType == 1">
          <el-descriptions-item :label="$t('order.card_number')">{{
            detail.paymentMethodBean.cardNumber
          }}</el-descriptions-item>
          <el-descriptions-item :label="$t('order.bank_name')">{{
            detail.paymentMethodBean.bankName
          }}</el-descriptions-item>
          <el-descriptions-item :label="$t('order.branch_address')">{{
            detail.paymentMethodBean.branchAddress
          }}</el-descriptions-item>
          <el-descriptions-item :label="$t('order.bsb_number')">
            {{ detail.paymentMethodBean.bsbNumber }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('order.account_name')">{{
            detail.paymentMethodBean.accountName
          }}</el-descriptions-item>
          <el-descriptions-item :label="$t('order.country')">{{
            detail.paymentMethodBean.country
          }}</el-descriptions-item>
          <el-descriptions-item :label="$t('order.swift_code')">{{
            detail.paymentMethodBean.swiftCode
          }}</el-descriptions-item>
          <el-descriptions-item :label="$t('order.zip_code')">{{
            detail.paymentMethodBean.zipCode
          }}</el-descriptions-item>
          <el-descriptions-item :label="$t('order.phone')">
            {{ detail.paymentMethodBean.phone }}
          </el-descriptions-item>
        </template>
        <el-descriptions-item :label="$t('order.zzpz1')">
          <el-image
            style="height: 100px"
            :src="bankDepositFile"
            :preview-src-list="[bankDepositFile]"
          >
          </el-image>
        </el-descriptions-item>
        <el-descriptions-item :label="$t('order.idCard1')">
          <el-image
            style="height: 100px"
            :src="idcard"
            :preview-src-list="[idcard]"
          >
          </el-image>
        </el-descriptions-item>
        <el-descriptions-item :label="$t('order.idFan1')">
          <el-image
            style="height: 100px"
            :src="idcardBack"
            :preview-src-list="[idcardBack]"
          >
          </el-image>
        </el-descriptions-item>
        <el-descriptions-item :label="$t('order.shouchi')">
          <el-image
            style="height: 100px"
            :src="handIdcard"
            :preview-src-list="[handIdcard]"
          >
          </el-image>
        </el-descriptions-item>
      </el-descriptions>
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
      detail: {},
      orderNumber: "",
      loading: false,
      bankDepositFile: null,
      idcard: null,
      handIdcard: null,
      idcardBack: null,
    };
  },
  computed: {},
  watch: {},
  created() {
    const { no } = this.$route.query;
    if (no) {
      this.orderNumber = no;
      this.search();
    }
  },
  mounted() {},
  methods: {
    search() {
      this.loading = true;
      request
        .get(process.env.VUE_APP_OTC_BASE_URL + "/orders/" + this.orderNumber)
        .then((res) => {
          if (res.data) {
            this.detail = res.data ?? {};
            request
              .request({
                url: process.env.VUE_APP_OTC_BASE_URL + "/files/awsSignUrl",
                method: "post",
                params: {
                  objectKey: res.data.paymentMethodBean.bankDepositFile,
                },
              })
              .then((res) => {
                this.bankDepositFile = res.data;
              });
            request
              .request({
                url: process.env.VUE_APP_OTC_BASE_URL + "/files/awsSignUrl",
                method: "post",
                params: {
                  objectKey: res.data.paymentMethodBean.idcard,
                },
              })
              .then((res) => {
                this.idcard = res.data;
              });
            request
              .request({
                url: process.env.VUE_APP_OTC_BASE_URL + "/files/awsSignUrl",
                method: "post",
                params: {
                  objectKey: res.data.paymentMethodBean.handIdcard,
                },
              })
              .then((res) => {
                this.handIdcard = res.data;
              });
            request
              .request({
                url: process.env.VUE_APP_OTC_BASE_URL + "/files/awsSignUrl",
                method: "post",
                params: {
                  objectKey: res.data.paymentMethodBean.idcardBack,
                },
              })
              .then((res) => {
                this.idcardBack = res.data;
              });
          } else {
            this.$message.info("Order Not Found");
          }
        })
        .finally(() => (this.loading = false));
    },
    getStatus(status) {
      return this.$t("order.status[" + status + "]");
    },
  },
};
</script>

<style scoped lang="scss">
.search-order-box {
  margin-top: 150px !important;
  margin-bottom: 60px !important;
  box-shadow: 0px 0px 50px rgb(125 0 255 / 15%);
  border-radius: 1rem;
    max-width: 800px;
    margin: 0px auto;
    padding: 40px;
}
.top {
  text-align: center;
  color: #f68819;
  .title {
    font-size: 30px;
    line-height: 2em;
  }
  .tip {
    line-height: 2em;
    font-size: 18px;
  }
}
.form {
  text-align: center;
  margin: 20px auto;
  .search_btn{
    margin-top: 20px;
    @media screen and (max-width: 480px){
      margin-right: 30px;
    }
  }
}
</style>
