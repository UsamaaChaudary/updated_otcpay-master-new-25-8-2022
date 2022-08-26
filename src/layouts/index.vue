<template>
  <section class="app-main">
    <CustomHeader />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <CustomFooter />
  </section>
</template>

<script>
import CustomHeader from "./header.vue";
import CustomFooter from "./footer.vue";
import ResizeMixin from "./mixin/ResizeHandler";
export default {
  props: {},
  components: { CustomHeader, CustomFooter },
  mixins: [ResizeMixin],
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
