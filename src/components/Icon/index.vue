<template>
  <div class="wallet-icon">
    <svg
      :style="{ fontSize: size + 'px', color: color, ...styles }"
      class="icon"
      aria-hidden="true"
    >
      <use :xlink:href="`#wallet-${type}`"></use>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  props: {
    type: { type: String, required: true },
    size: {
      type: Number,
      default: () => 16,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: () => "currentColor",
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.wallet-icon {
  display: inline;
  .icon {
    vertical-align: middle !important;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
