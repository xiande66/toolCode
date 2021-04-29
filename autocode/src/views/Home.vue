<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="新建文件" name="first"><hello-world /></el-tab-pane>
    <el-tab-pane label="代码生成" name="second"
      ><button @click="getFList">获取列表</button
      ><button @click="sendMsg">发送</button></el-tab-pane
    >
    <el-tab-pane label="国际化" name="i18">
      <i-18/>
      </el-tab-pane>
  </el-tabs>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { getFriendList, send_msg } from "@/api/qq";
import I18 from '../components/i18.vue';
export default {
  components: { HelloWorld, I18 },
  data() {
    return {
      activeName: "first",
      friendList: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getFList() {
      getFriendList().then((res) => {
        console.log(res);
      });
    },
    sendMsg() {
      var num = 0;
      var a = setInterval(() => {
        const params = {
          // message_type: "private",
          user_id: "494849834",
          message: {
            type: "face",
            data: {
              id: "63",
            },
          },
          auto_escape: true,
        };
        send_msg(params).then((res) => {
          console.log("send success");
          console.log(res);
          ++num;
          if (num == 30) {
            clearInterval(a);
          }
        });
      }, 3000);
    },
  },
};
</script>
