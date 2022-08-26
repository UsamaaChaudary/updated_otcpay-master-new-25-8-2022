<template>
  <div class="trade-box">
    <div class="box">
      <el-form ref="form" :rules="rules" :model="form" label-width="0px">
        <div class="title">{{ $t("common.trade.for") }}</div>
        <el-form-item prop="from" v-if="form.type == 0">
          <el-select
            @change="changeFromCoin"
            :style="{ width: '100%' }"
            v-model="form.from"
          >
            <template slot="prefix">
              <Icon :size="24" :type="_.toUpper(fromIcon)" />
            </template>
            <el-option v-for="coin in buys" :key="coin.id"
              :label="_.toUpper(coin.shortName)"
              :value="coin.id"
            >
              <Icon :type="_.toUpper(coin.shortName)" />
              <!-- {{ $t("common.coins." + coin.code) }} -->
              {{ _.toUpper(coin.shortName) }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="to" v-else>
          <el-select
            @change="changeToCoin"
            :style="{ width: '100%' }"
            v-model="form.to"
          >
            <template slot="prefix">
              <Icon :size="24" :type="_.toUpper(toIcon)" />
            </template>
            <el-option
              v-for="coin in sells"
              :key="coin.id"
              :label="_.toUpper(coin.targetCoinName)"
              :value="coin.id"
            >
              <Icon :type="_.toUpper(coin.targetCoinName)" />
              <!-- {{ $t("common.coins." + coin.code) }} -->
              {{ _.toUpper(coin.targetCoinName) }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="type">
          <el-radio-group v-model="form.type">
            <el-radio :label="0" :value="0">{{ $t("common.buy") }}</el-radio>
            <el-radio :label="1" :value="1">{{ $t("common.sell") }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="from" v-if="form.type == 1">
          <el-select
            @change="changeFromCoin"
            :style="{ width: '100%' }"
            v-model="form.from"
          >
            <template slot="prefix">
              <Icon :size="24" :type="_.toUpper(fromIcon)" />
            </template>
            <el-option
              v-for="coin in buys"
              :key="coin.id"
              :label="_.toUpper(coin.shortName)"
              :value="coin.id"
            >
              <Icon :type="_.toUpper(coin.shortName)" />
              <!-- {{ $t("common.coins." + coin.code) }} -->
              {{ _.toUpper(coin.shortName) }}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="to" v-else>
          <el-select
            @change="changeToCoin"
            :style="{ width: '100%' }"
            v-model="form.to"
          >
            <template slot="prefix">
              <Icon :size="24" :type="_.toUpper(toIcon)" />
            </template>
            <el-option
              v-for="coin in sells"
              :key="coin.id"
              :label="_.toUpper(coin.targetCoinName)"
              :value="coin.id"
            >
              <Icon :type="_.toUpper(coin.targetCoinName)" />
              <!-- {{ $t("common.coins." + coin.code) }} -->
              {{ _.toUpper(coin.targetCoinName) }}
            </el-option>
          </el-select>
        </el-form-item>
        <div class="title">{{ $t("common.trade.yourAmount") }}</div>
        <el-form-item prop="fromAmount" v-if="form.type == 0">
          <el-input
            :class="'prefix'"
            @input="changeFromAmount"
            v-model.number="form.fromAmount"
          >
            <span slot="prefix">{{ fromName }}</span>
          </el-input>
        </el-form-item>
        <el-form-item prop="toAmount" v-else>
          <el-input
            :class="'prefix'"
            @input="changeToAmount"
            v-model.number="form.toAmount"
          >
            <span slot="prefix">{{ toName }}</span></el-input
          >
        </el-form-item>
        <el-form-item prop="fromAmount" v-if="form.type == 1">
          <el-input
            :class="'prefix'"
            @input="changeFromAmount"
            v-model.number="form.fromAmount"
          >
            <span slot="prefix">{{ fromName }}</span>
          </el-input>
        </el-form-item>
        <el-form-item prop="toAmount" v-else>
          <el-input
            :class="'prefix'"
            @input="changeToAmount"
            v-model.number="form.toAmount"
          >
            <span slot="prefix">{{ toName }}</span></el-input
          >
        </el-form-item>
        <el-form-item>
          <el-button
            :style="{ width: '100%' }"
            type="primary"
            :round="true"
            @click="onSubmit"
            >{{
              form.type == 0 ? $t("common.buy") : $t("common.sell")
            }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const validatePass = (rule, value, callback) => {
  // if (value <= 0) {
  //   callback(new Error('请输入大于0的整数'));
  // } else {
  //   callback();
  // }
  if (value > 0) {
    callback();
  } else {
    callback(new Error("请输入大于0的整数"));
  }
};
export default {
  props: {},
  components: {},
  data() {
    return {
      form: {
        from: "",
        type: 0,
        to: "",
        fromAmount: null,
        toAmount: null,
      },
      rules: {
        from: [{ required: true, trigger: "blur" }],
        type: [{ required: true, trigger: "blur" }],
        to: [{ required: true, trigger: "blur" }],
        fromAmount: [
          {
            required: true,
            message: this.$t("common.pleaseFillAmount"),
            trigger: "blur",
          },
          { type: "number", message: this.$t("common.valid.number") },
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
        ],
        toAmount: [
          {
            required: true,
            message: this.$t("common.pleaseFillAmount"),
            trigger: "blur",
          },
          { type: "number", message: this.$t("common.valid.number") },
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["coins"]),
    buys() {
      return this._.unionBy(this.coins, "shortName");
    },
    sells() {
      return this._.unionBy(this.coins, "targetCoinName");
    },
    fromIcon() {
      const coin = this._.find(this.coins, (item) => item.id == this.form.from);
      return coin ? coin.shortName : "";
    },
    toIcon() {
      const coin = this._.find(this.coins, (item) => item.id == this.form.to);
      return coin ? coin.targetCoinName : "";
    },
    fromName() {
      const coin = this._.find(this.coins, (item) => item.id == this.form.from);
      return coin ? this._.toUpper(coin.shortName) : "";
    },
    toName() {
      const coin = this._.find(this.coins, (item) => item.id == this.form.to);
      return coin ? this._.toUpper(coin.targetCoinName) : "";
    },
    realCoin() {
      const from = this.coins.find((item) => item.id == this.form.from);
      const to = this.coins.find((item) => item.id == this.form.to);
      return this.coins.find(
        (item) =>
          item.tradeTypeInt == this.form.type &&
          item.shortName == from.shortName &&
          item.targetCoinName == to.targetCoinName
      );
    },
  },
  watch: {
    "form.type": {
      handler(val) {
        if (val == 1) {
          //卖出
        }
      },
      deep: true,
    },
    buys: {
      handler(val) {
        if (val && val.length > 0) {
          this.form.from = val[0].id;
        }
      },
    },
    sells: {
      handler(val) {
        if (val && val.length > 0) {
          this.form.to = val[0].id;
        }
      },
    },
  },
  created() {},
  mounted() {
    if (this.buys && this.buys.length > 0) {
      this.form.from = this.buys[0].id;
    }
    if (this.sells && this.sells.length > 0) {
      this.form.to = this.sells[0].id;
    }
  },
  methods: {
    changeFromAmount(amount) {
      this.form.toAmount = this._.floor(
        this._.divide(amount, this.realCoin.marginPrice),
        8
      );
    },
    changeToAmount(amount) {
      this.form.fromAmount = this._.floor(
        this._.multiply(amount, this.realCoin.marginPrice),
        8
      );
    },
    changeFromCoin() {
      this.changeToAmount(this.form.toAmount);
    },
    changeToCoin() {
      this.changeFromAmount(this.form.fromAmount);
    },
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          localStorage.setItem("submitOrder", JSON.stringify(this.form));
          this.$router.push("/order/create");
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.trade-box {
  .prefix.el-input--prefix {
    .el-input__inner {
      text-align: right;
    }
    .el-input__prefix {
      color: #111;
      left: 15px;
    }
  }
}
</style>
<style scoped lang="scss">
.trade-box {
  .box {
    max-width: 400px;
    margin: 120px auto;
    border-radius: 1rem;
    background-color: white;
    padding: 24px 32px;
    box-shadow: 0px 0px 50px rgba(125,0,255,0.15);
  }
  .title {
    text-align: center;
    color: #f8a358;
    font-size: 22px;
    margin-bottom: 22px;
  }
}
</style>
