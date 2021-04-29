<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="英文路径">
      <el-input v-model="form.en"></el-input>
    </el-form-item>
    <el-form-item label="中文路径">
      <el-input v-model="form.zh"></el-input>
    </el-form-item>
    <el-form-item label="繁体路径">
      <el-input v-model="form.tw"></el-input>
    </el-form-item>
      <el-form-item label="文件类型">
      <el-radio-group v-model="form.type">
        <el-radio label="json" key="0"></el-radio>
        <el-radio label="key" key="1"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文件">
      <el-input type="textarea" v-model="form.fileName"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getlist">立即创建</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
    <pre>
        {{ form }}
    </pre>
  </el-form>
</template>

<script>
import { getFileType, geti18 } from "@/api/home";
export default {
  name: "i18",
  data() {
    return {
      typeList: [],
      form: {
        fileName: "美国,印度,戛纳",
        zh: "C:\\Users\\murph.chen\\Desktop\\新建文件夹\\zh.txt",
        en: "C:\\Users\\murph.chen\\Desktop\\新建文件夹\\en.txt",
        tw: "C:\\Users\\murph.chen\\Desktop\\新建文件夹\\tw.txt",
        type: "key"
      },
    };
  },
  created() {
    this.getTyle();
  },
  methods: {
    getlist() {
      this.form.fileName = this.form.fileName.split("，");
      geti18(this.form).then((res) => {
        console.log(res);
      });
    },
    getTyle() {
      getFileType().then((res) => {
        this.typeList = res.data;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
