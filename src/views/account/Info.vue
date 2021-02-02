<template>
  <div>
    <div class="userinfo-modify" v-if="userinfo">
      <div class="info-item">
        <label for="nickname" class="info-item-label">昵称:</label>
        <input type="text" id="nickname" v-model="userinfo.nickname" required />
      </div>
      <div class="info-item">
        <label for="username" class="info-item-label">用户名:</label>
        <span class="info-username">{{ userinfo.username }}</span>
      </div>
      <div class="info-item">
        <label for="bid" class="info-item-label">B站UID:</label>
        <input
          type="text"
          id="bid"
          v-model="userinfo.bilibili_uid"
          maxlength="15"
        />
      </div>
      <div class="info-item">
        <span class="info-item-label">性别:</span>
        <label for="male">
          <input
            type="radio"
            class="hidden"
            name="gender"
            id="male"
            value="男"
            v-model="userinfo.gender"
          />
          <span
            class="gender"
            :class="{ 'gender-active': userinfo.gender == '男' }"
            >男</span
          >
        </label>
        <label for="female">
          <input
            type="radio"
            class="hidden"
            name="gender"
            id="female"
            value="女"
            v-model="userinfo.gender"
          />
          <span
            class="gender"
            :class="{ 'gender-active': userinfo.gender == '女' }"
            >女</span
          >
        </label>
        <label for="secrecy">
          <input
            type="radio"
            class="hidden"
            name="gender"
            id="secrecy"
            value="保密"
            v-model="userinfo.gender"
          />
          <span
            class="gender"
            :class="{ 'gender-active': userinfo.gender == '保密' }"
            >保密</span
          >
        </label>
      </div>
      <div class="info-item">
        <label for="birth" class="info-item-label">出生:</label>
        <input type="date" id="birth" v-model="userinfo.birth" />
      </div>
    </div>
    <div class="info-submit"><span class="save" @click="save">保存</span></div>
  </div>
</template>

<script>
import { changeUserInfo } from "@/network/blog";
export default {
  name: "AccountInfo",
  components: {},

  computed: {
    userinfo() {
      return this.$store.state.userinfo;
    },
  },
  methods: {
    save() {
      changeUserInfo(this.userinfo);
    },
  },
};
</script>

<style scoped>
input {
  padding: 4px;
  border-radius: 5px;
  border-width: 0.5px;
  border-style: solid;
  border-color: #d6d6d6;
  outline: none;
}

input:hover {
  border-color: #ababab;
}

input:focus {
  border-color: #00aaff !important;
}

.userinfo-modify {
  border-bottom: 1px solid #e1e2e5;
  margin: 0 30px;
  padding: 20px 0;
}

.info-username {
  color: #6f6f6f;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
}

.info-item-label {
  width: 80px;
  padding: 0 20px;
  text-align: right;
  color: #333333;
}

.hidden {
  opacity: 0;
  display: none;
}

.gender {
  padding: 5px 10px;
  background-color: #e6e6e6;
  border: 1px solid #e1e2e5;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 20px;
}

.gender:hover {
  background-color: #e1e2e5;
}

.gender-active {
  color: #ffffff;
  border: 1px solid #00aaff !important;
  background-color: #00aaff !important;
}

.info-submit {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.save {
  color: #ffffff;
  background-color: #00aaff;
  padding: 10px 30px;
  border-radius: 8px;
  cursor: pointer;
}

.save:hover {
  background-color: #29b8ff;
}
</style>>
