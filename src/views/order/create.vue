<template>
  <div class="create_order">
    <div class="container" v-loading="loading">
      <el-form ref="form" :rules="rules" :model="form">
        <el-row :gutter="30">
          <el-col :lg="12" :sm="24">
            <div class="title">{{ $t("order.step1") }}</div>
            <div class="form">
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-form-item
                    required
                    prop="user_detail_attributes.coin_type"
                    :label="$t('order.coin_type')"
                  >
                    <el-select
                      v-model="form.user_detail_attributes.coin_type"
                      placeholder=""
                    >
                      <el-option label="omni" value="omni"></el-option>
                      <el-option label="erc20" value="erc20"></el-option>
                      <el-option label="trc20" value="trc20"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item
                    required
                    prop="user_detail_attributes.coin_address"
                    :label="$t('order.coinAddress')"
                  >
                    <el-input
                      v-model="form.user_detail_attributes.coin_address"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-form-item
                    required
                    prop="user_detail_attributes.region_code"
                    :label="$t('order.regionCode')"
                  >
                    <el-input
                      v-model="form.user_detail_attributes.region_code"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item
                    required
                    prop="user_detail_attributes.phone"
                    :label="$t('order.phone')"
                  >
                    <el-input
                      v-model="form.user_detail_attributes.phone"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item
                required
                prop="user_detail_attributes.full_name"
                :label="$t('order.name')"
              >
                <el-input
                  v-model="form.user_detail_attributes.full_name"
                ></el-input>
              </el-form-item>
              <el-form-item
                required
                prop="user_detail_attributes.email"
                :label="$t('order.email')"
              >
                <el-input
                  v-model="form.user_detail_attributes.email"
                ></el-input>
              </el-form-item>
              <div class="text">
                {{ $t("order.payTips") }}
              </div>
              <el-form-item label="">
                <el-checkbox
                  v-model="form.user_detail_attributes.privacy"
                  label="  "
                  name="user_detail_attributes.privacy"
                  :true-label="1"
                ></el-checkbox>
                <span
                  >{{ $t("order.tongyi") }}
                  <!-- <span
                    style="color: #f68819; cursor: pointer"
                    @click="xieyi"
                    >{{ $t("order.maibixieyi") }}</span> -->
                  </span>
              </el-form-item>
              <el-form-item label="">
                <el-checkbox
                  v-model="form.user_detail_attributes.terms"
                  label="  "
                  name="user_detail_attributes.terms"
                  :true-label="1"
                ></el-checkbox>
                <span
                  >{{ $t("order.yiji") }}
                  <!-- <span
                    style="color: #f68819; cursor: pointer"
                    @click="xieyi"
                    >{{ $t("order.kehushengming") }}</span>
                  {{ $t("") }}
                  <span
                    style="color: #f68819; cursor: pointer"
                    @click="xieyi"
                    >{{ $t("order.tiaokuan") }}</span
                  > -->
                </span>
              </el-form-item>
              <div class="message">
                <i class="el-icon-info" style="color: #f68819" />
                {{ $t("order.message") }}
              </div>
            </div>
          </el-col>
          <el-col :lg="12" :sm="24">
            <div class="title">{{ $t("order.step2") }}</div>
            <div class="order_content">
              <template v-if="formInfo.type == 0">
                <!-- 购买 -->
                <div>
                  <div class="item">
                    <div class="label">{{ $t("order.buy") }}</div>
                    <div class="value">
                      <span>{{ formInfo.toAmount }}</span>
                    </div>
                    <div class="coin">
                      <Icon
                        :size="24"
                        :type="
                          formInfo.toCoin
                            ? _.toUpper(formInfo.toCoin.targetCoinName)
                            : ''
                        "
                      /><span>{{
                        formInfo.toCoin
                          ? _.toUpper(formInfo.toCoin.targetCoinName)
                          : ""
                      }}</span>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">{{ $t("order.use") }}</div>
                    <div class="value">
                      <span>{{ formInfo.fromAmount }}</span>
                    </div>
                    <div class="coin">
                      <Icon
                        :size="24"
                        :type="
                          formInfo.fromCoin
                            ? _.toUpper(formInfo.fromCoin.shortName)
                            : ''
                        "
                      /><span>{{
                        formInfo.fromCoin
                          ? _.toUpper(formInfo.fromCoin.shortName)
                          : ""
                      }}</span>
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="formInfo.type == 1">
                <!-- 卖出 -->
                <div>
                  <div class="item">
                    <div class="label">{{ $t("order.sell") }}</div>
                    <div class="value">
                      <span>{{ formInfo.toAmount }}</span>
                    </div>
                    <div class="coin">
                      <Icon
                        :size="24"
                        :type="
                          formInfo.toCoin
                            ? _.toUpper(formInfo.toCoin.targetCoinName)
                            : ''
                        "
                      /><span>{{
                        formInfo.toCoin
                          ? _.toUpper(formInfo.toCoin.targetCoinName)
                          : ""
                      }}</span>
                    </div>
                  </div>
                  <div class="item">
                    <div class="label">{{ $t("order.for") }}</div>
                    <div class="value">
                      <span>{{ formInfo.fromAmount }}</span>
                    </div>
                    <div class="coin">
                      <Icon
                        :size="24"
                        :type="
                          formInfo.fromCoin
                            ? _.toUpper(formInfo.fromCoin.shortName)
                            : ''
                        "
                      /><span>{{
                        formInfo.fromCoin
                          ? _.toUpper(formInfo.fromCoin.shortName)
                          : ""
                      }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="title">
              {{ $t("order.paymentInfo") }}
            </div>
            <template v-if="formInfo.type == 0">
              <!-- 卖出 -->
              <div>
                <el-descriptions
                  class="margin-top"
                  title=""
                  :column="2"
                  size="mini"
                  border
                >
                  <el-descriptions-item>
                    <template slot="label"> Account Name </template>
                    FINTEC WEALTH PTY. LTD.
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> BSB Number </template>
                    062438
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> USD </template>
                    FINTWUSD01
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> AUD </template>
                    06214011638513
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> EUR </template>
                    FINTWEUR01
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> GBP </template>
                    FINTWGBP01
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> Swift Code </template>
                    NATAAU33XXX
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> Bank Name </template>
                    National Australia Bank
                  </el-descriptions-item>
                  <el-descriptions-item :span="2">
                    <template slot="label"> Branch Address </template>
                    Shops 50-52 436 Victoria Ave, Chatswood NSW 2067 Australia
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </template>
            <template v-else>
              <div>
                <el-descriptions
                  class="margin-top"
                  title=""
                  :column="1"
                  size="mini"
                  border
                >
                  <el-descriptions-item>
                    <template slot="label"> BTC </template>
                    3AB4r2HZ4FtAzu8TmRTD6KyR6W6WM4AZJx
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> USDT - OMNI </template>
                    37tJ8X9MSFbCzXMWGs9zorLXTXTDDWDAVM
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> USDT - ERC20 </template>
                    0x9203ff8ee909258c152b179fa3b17942d6891da0
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label"> USDT - TRC20 </template>
                    TMxkisg81ndr4cMYqcxbZoDS2AnpiWE9nD
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </template>
            <template v-if="formInfo.type == 1">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.bank_name"
                    :label="$t('order.bank_name')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.bank_name"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.branch_address"
                    :label="$t('order.branch_address')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.branch_address"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.account_name"
                    :label="$t('order.account_name')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.account_name"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.card_number"
                    :label="$t('order.card_number')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.card_number"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.swift_code"
                    :label="$t('order.swift_code')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.swift_code"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.bsb_number"
                    :label="$t('order.bsb_number')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.bsb_number"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.country"
                    :label="$t('order.country')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.country"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.zip_code"
                    :label="$t('order.zip_code')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.zip_code"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    required
                    prop="payment_method_attributes.phone"
                    :label="$t('order.phone')"
                  >
                    <el-input
                      v-model="form.payment_method_attributes.phone"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </template>
            <div class="payment_info">
              <div class="item">
                <div class="label">{{ $t("order.shibie") }}</div>
                <div class="val important">{{ form.identity_no }}</div>
              </div>
              <el-form-item
                required
                prop="payment_method_attributes.bank_deposit_file"
                :label="$t('order.zzpz')"
              >
                <Upload
                  @on-success="onzzpz"
                  v-model="form.payment_method_attributes.bankDepositFi"
                />
              </el-form-item>
              <el-form-item
                required
                prop="payment_method_attributes.idcard"
                :label="$t('order.idCard')"
              >
                <Upload
                  @on-success="onidcard"
                  v-model="form.payment_method_attributes.idcard"
                />
              </el-form-item>
              <el-form-item
                required
                prop="payment_method_attributes.idcard_back"
                :label="$t('order.idFan')"
              >
                <Upload
                  @on-success="onidcard_back"
                  v-model="form.payment_method_attributes.idcard_back"
                />
              </el-form-item>
              <el-form-item
                required
                prop="payment_method_attributes.handIdcard"
                :label="$t('order.shouchi')"
              >
                <Upload
                  @on-success="onhandIdcard"
                  v-model="form.payment_method_attributes.handIdcard"
                />
              </el-form-item>
              <div class="tip">
                <img src="~@/assets/images/id.png" width="60%" alt="" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="submit-btn">
          <el-button
            style="width: 100%; margin: 20px 0"
            type="primary"
            @click="onSubmit"
            >{{ $t("order.docreate") }}</el-button
          >
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Upload from "@/components/Upload";
import request from "@/utils/request";
const checkEmail = (rule, value, callback) => {
  const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (!value) {
    return callback(new Error("email can not empty"));
  }
  setTimeout(() => {
    if (mailReg.test(value)) {
      callback();
    } else {
      callback(new Error("email error"));
    }
  }, 100);
};
export default {
  props: {},
  components: { Upload },
  data() {
    return {
      loading: false,
      form: {
        user_detail_attributes: {
          coin_type: "omni",
          remarketing: 0,
        },
        payment_method_attributes: {
          type: "PaymentBank",
        },
      },
      formInfo: {},
      rules: {
        "user_detail_attributes.email": [
          { validator: checkEmail, trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["coins"]),
    sells() {
      return this._.unionBy(this.coins, "targetCoinName");
    },
  },
  watch: {
    coins: {
      handler() {
        this.fillFormInfo();
      },
      deep: true,
    },
  },
  created() {
    request
      .get(process.env.VUE_APP_OTC_BASE_URL + "/orders/identityNo")
      .then((res) => {
        this.$set(this.form, "identity_no", res.data);
      });
  },
  mounted() {
    this.fillFormInfo();
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.loading = true;
          request
            .put(process.env.VUE_APP_OTC_BASE_URL + "/orders", this.form)
            .then((res) => {
              this.$router.push("/order?no=" + res.data);
            })
            .finally(() => (this.loading = false));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onzzpz(res) {
      this.form = Object.assign({}, this.form, {
        payment_method_attributes: {
          ...this.form.payment_method_attributes,
          bank_deposit_file: res,
        },
      });
    },
    onidcard(res) {
      this.form = Object.assign({}, this.form, {
        payment_method_attributes: {
          ...this.form.payment_method_attributes,
          idcard: res,
        },
      });
    },
    onidcard_back(res) {
      this.form = Object.assign({}, this.form, {
        payment_method_attributes: {
          ...this.form.payment_method_attributes,
          idcard_back: res,
        },
      });
    },
    onhandIdcard(res) {
      this.form = Object.assign({}, this.form, {
        payment_method_attributes: {
          ...this.form.payment_method_attributes,
          handIdcard: res,
        },
      });
    },
    xieyi() {},
    tiaokuan() {},
    fillFormInfo() {
      const formInfo = localStorage.getItem("submitOrder");
      if (!formInfo) {
        this.$router.go(-1);
      } else {
        this.formInfo = JSON.parse(formInfo);
        this.formInfo.fromCoin = this._.find(
          this.coins,
          (item) => item.id == this.formInfo.from
        );
        this.formInfo.toCoin = this._.find(
          this.coins,
          (item) => item.id == this.formInfo.to
        );
        this.form.payment_method_attributes.operation =
          this.formInfo.type == 0 ? "deposit" : "withdraw";
        this.form.payment_method_attributes.currency = this.formInfo.fromCoin
          ? this.formInfo.fromCoin.shortName
          : "";
        this.form.trade_type = this.formInfo.type == 0 ? "BUY" : "SELL";
        this.form.amount = this.formInfo.fromAmount;
        this.form.number = this.formInfo.toAmount;
        this.form.margin = this.formInfo.fromCoin
          ? this.formInfo.fromCoin.margin
          : "";
        this.form.advertisement_id = this.formInfo.fromCoin
          ? this.formInfo.fromCoin.id
          : "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.create_order {
  margin-top: 150px;
  margin-bottom:50px;
  .submit-btn{
    text-align: center;
  }
}
.title {
  line-height: 2em;
  font-size: 24px;
  color: #f68819;
}
.el-descriptions {
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 1rem;
    box-shadow: 0px 0px 50px rgb(125 0 255 / 15%);
    padding: 20px 10px;
    color: #303133;
}
.order_content {
  padding: 20px 0px;
    background: #fff;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0px 0px 50px rgb(125 0 255 / 15%);
  .item {
    width: 100%;
    margin: 15px 0;
    > div {
      display: inline-block;
      width: 40%;
    }
    font-size: 20px;
    .label {
      width: 20%;
    }
    span {
      margin: 0 10px;
      &:first-child {
        margin-right: 50px;
      }
    }
  }
}
.payment_info {
  .item {
    display: flex;
    font-size: 20px;
    margin: 10px 0;
    .label {
      flex: 30%;
      color: #f68819;
    }
    .val {
      flex: 70%;
    }
  }
}
</style>
