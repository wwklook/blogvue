<template>
  <div>
    <div class="title">伙伴们</div>
    <hr />
    <div class="friend">
      <ul class="friend-ul">
        <li class="friend-li" v-for="item in friend_list" :key="item.friend_id">
          <a :href="item.website" target="_blank">
            <div class="friend-img">
              <img :src="item.avatar" />
            </div>
            <div class="friend-info">
              <div class="friend-name">{{ item.name }}</div>
              <div class="friend-intro">{{ item.describe }}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <hr />
    <div class="my-info">
      <h2>本站信息</h2>
      <div>名称: 无聊look</div>
      <div>简介: 此人没写简介 ~ ~</div>
      <div>网址: https://www.wwklook.com/</div>
      <div>头像: https://wwklook.com/media/avatar/favicon.jpg</div>
      <div>留言交换个链接呗</div>
    </div>
  </div>
</template>

<script>
import { getFriend } from "@/network/info.js";
export default {
  name: "Friends",
  computed: {},
  data() {
    return {
      friend_list: [],
    };
  },
  created() {
    getFriend().then((res) => {
      this.friend_list = res.data.friend_list;
    });
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="sass" scoped>
li
  list-style: none

.title
  font-size: $font-size-md
  text-align: center
  padding-bottom: 50px
  font-weight: bold

.my-info
  padding: 15px
  color: #333
  word-break: break-all

  h2
    font-size: 22px
    margin: 5px

  div
    padding: 5px
    font-size: 20px

.friend
  display: flex

  &-ul
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly

  &-li
    width: 46%
    margin-bottom: 30px
    padding: 10px
    box-sizing: border-box
    transition: .5s
    border-radius: 10px

  &-li a
    display: flex

  &-li:hover
    background-color: #66ccff

  &-img img
    width: 120px
    height: 120px
    border-radius: 50%

  &-info
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin-left: 20px
    overflow: hidden

  &-name
    font-weight: 400
    color: #222
    font-size: 24px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    margin-bottom: 8px

  &-intro
    display: -webkit-box
    font-weight: 400
    color: #222
    font-size: 18px
    margin-top: 8px

@media screen and (max-width: 450px)
  .friend-li
    width: 100%
</style>>