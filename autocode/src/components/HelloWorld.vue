<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="文件路径">
      <el-input v-model="form.path"></el-input>
    </el-form-item>
    <el-form-item label="文件类型">
      <el-radio-group v-model="form.type">
        <el-radio :label="item" v-for="(item,key) in typeList" :key='key'></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文件名称">
      <el-input type="textarea" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getlist">立即创建</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
    {{ form }}
  </el-form>
</template>

<script>
import { createFile, getFileType } from "@/api/home";
export default {
  name: "HelloWorld",
  data() {
    return {
      typeList: [],
      form: {
        name: "",
        path: "E:\\autoCode\\autocode\\src\\components",
        type: "view",
      },
    };
  },
  created() {
    this.getTyle();
  },
  methods: {
    getlist() {
      let { name } = this.form;
      this.form.name = name.split(",");
      createFile(this.form).then((res) => {
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
