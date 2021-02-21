<template>
  <div>
    <div class="title">我的追番</div>
    <div class="comic">
      <ul class="comic-ul">
        <li class="comic-li" v-for="item in comic_list" :key="item.media_id">
          <a :href="item.url" target="_blank">
            <div class="comic-img">
              <img :src="item.cover" />
            </div>
            <div class="comic-info">
              <div class="comic-name">{{ item.title }}</div>
              <div class="comic-intro">{{ item.evaluate }}</div>
              <div class="comic-type">
                {{ item.season_type_name }} | {{ item.areas[0].name }}
              </div>
              <div class="comic-newest">{{ item.new_ep.index_show }}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <pagination :total="total" :pn="pn" :rn="rn" @changePage="changePage" />
  </div>
</template>

<script>
import { getMyComic } from "@/network/info.js";
import Pagination from "@/components/common/Pagination.vue";
export default {
  name: "MyComic",
  components: { Pagination },
  computed: {},
  data() {
    return {
      pn: 1,
      rn: 16,
      total: 0,
      comic_list: {},
    };
  },
  created() {
    this.getComicList(this.$route.params.id || 1);
  },
  mounted() {},
  methods: {
    getComicList(pn) {
      getMyComic(pn).then((res) => {
        this.comic_list = res.data.list;
        this.pn = res.data.pn;
        this.total = res.data.total;
      });
    },
    changePage(pn) {
      getMyComic(pn).then((res) => {
        this.comic_list = res.data.list;
        this.pn = res.data.pn;
        this.total = res.data.total;
        window.scrollTo(0, 0);
      });
    },
  },
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

.comic
  display: flex

  &-ul
    width: 100%
    display: flex
    flex-wrap: wrap

  &-li
    width: 50%
    margin-bottom: 30px
    padding-right: 20px
    box-sizing: border-box

  &-li a
    display: flex

  &-img img
    width: 120px
    height: 160px
    border-radius: 4px

  &-info
    display: flex
    flex-direction: column
    margin-left: 10px
    overflow: hidden

  &-name
    font-weight: 400
    color: #222
    line-height: 24px
    font-size: 20px
    padding-right: 10px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    margin-bottom: 8px

  &-intro
    display: -webkit-box
    font-weight: 400
    color: #222
    line-height: 20px
    max-height: 40px
    font-size: 15px
    overflow: hidden
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    white-space: normal

  &-type
    height: 16px
    font-size: 14px
    color: #999
    line-height: 16px
    margin-bottom: 6px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis

  &-newest
    height: 16px
    line-height: 16px
    font-size: 14px
    color: #999
    margin-bottom: 6px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
</style>>