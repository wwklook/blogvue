<template>
  <div>
    <div class="userinfo" v-if="userinfo">
      <div class="user-avatar">
        <img :src="userinfo.avatar" />
      </div>
      <div class="user-right">
        <div class="user-nickname">{{ userinfo.nickname }}</div>
        <div class="user-modify" @click="toInfo">修改资料</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    userinfo() {
      return this.$store.state.userinfo;
    },
  },
  methods: {
    toInfo() {
      this.$router.push({ name: "AccountInfo" });
    },
  },
};
</script>

<style scoped>
.userinfo {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e2e5;
  padding: 30px 0;
  margin: 0 30px;
}

.user-avatar {
  margin: 30px;
}

.user-avatar img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
}

.user-right {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-nickname {
  font-size: 22px;
  font-weight: bold;
}

.user-modify {
  padding: 10px 10px;
  font-size: 16px;
  color: #797979;
  border: 1px solid #797979;
  border-radius: 5px;
  cursor: pointer;
}

.user-modify:hover {
  color: #00aaff;
  border: 1px solid #00aaff;
}
</style>
