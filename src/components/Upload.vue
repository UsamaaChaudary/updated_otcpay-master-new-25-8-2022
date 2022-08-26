<template>
  <div v-loading="loading">
    <el-upload
      class="upload-demo"
      :action="prefix + '/files/awsUpload'"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="2"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :on-progress="onUpload"
      :on-success="onSuccess"
      name="filePic"
      :show-file-list="false"
    >
      <el-button size="small" type="primary">Upload</el-button>
    </el-upload>
    <div class="images" v-if="url">
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :preview-src-list="[url]"
        fit="contain"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      prefix: process.env.VUE_APP_BASE_API,
      fileList: [],
      loading: false,
      url: "",
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed() {},
    beforeRemove() {},
    onUpload() {
      this.loading = true;
    },
    onSuccess(response, file, fileList) {
      if (response["code"] == "00000") {
        this.fileList = [
          {
            name: response["data"]["objectKey"],
            url: response["data"]["url"],
          },
        ];
        this.url = response["data"]["url"];
        console.log(123123, this.url);
        this.$message.success("upload success");
        this.$emit("on-success", response["data"]["objectKey"], file, fileList);
      } else {
        this.$message.error("upload fail");
      }
      this.loading = false;
    },
  },
  created() {},
};
</script>

<style scoped lang="scss"></style>
