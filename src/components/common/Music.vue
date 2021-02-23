<template>
  <div class="music">
    <div>
      <h4>音乐盒</h4>
    </div>
    <div class="info">
      <img
        class="img"
        :src="music_list[index].pic120 || 
        'https://h5static.kuwo.cn/upload/image/4f768883f75b17a426c95b93692d98bec7d3ee9240f77f5ea68fc63870fdb050.png'"
        @click="paused"
      />
      <div class="song">
        <div :title="music_list[index].name + ' - ' + music_list[index].artist">
          <span id="sname">{{ music_list[index].name }}</span>
          <span> - </span>
          <span id="sartist">{{ music_list[index].artist }}</span>
        </div>
        <div id="time">
          <input
            type="range"
            id="slider"
            max="50"
            min="0"
            step="0.1"
            value="0"
            @change="change"
            @input="input"
          />{{ time }}
        </div>
        <div class="lrc">
          <p
            v-for="(item, index) in lrclist"
            :key="index"
            :class="{ lrc_current: lrcindex == index }"
          >
            {{ item.lineLyric }}
          </p>
        </div>
      </div>
    </div>
    <div id="p_list">
      <ul class="p_ul">
        <li
          v-for="(val, key) in music_list"
          :key="key"
          @click="play(key)"
          :class="[{ choose: index == key }, key % 2 == 1 ? 'odd' : 'even']"
        >
          <div class="song_num">{{ key + 1 }}</div>
          <div class="song_name">{{ val.name }}</div>
          <div class="song_artist">{{ val.artist }}</div>
        </li>
      </ul>
    </div>
    <audio
      :src="url"
      @ended="end"
      @loadstart="start"
      @loadedmetadata="metadata"
      @timeupdate="update"
    ></audio>
  </div>
</template>


<script>
import { getIlove, getSongInfoAndLrc } from "@/network/info.js";

export default {
  name: "Music",
  data() {
    return {
      music_list: [{ name: "test", artist: "test" }],
      url: "",
      index: 0,
      time: "00:00/00:00",
      isClickSlider: false,
      isPlaying: false,
      lrclist: "",
      lrcindex: 0,
    };
  },
  created() {
    getIlove().then((res) => {
      if (res.data.musicList.length > 0) {
        this.music_list = []
      }
      this.music_list = res.data.musicList
    });
  },
  methods: {
    play(key) {
      this.index = key;
      let rid = this.music_list[this.index].rid;
      getSongInfoAndLrc(rid).then(res => {
        this.lrclist = res.data.lrc
        this.url = res.data.url
        this.isPlaying = true;
      })
    },
    nextSong() {
      if (this.index < this.music_list.length - 1) {
        this.index += 1;
      } else {
        this.index = 0;
      }
      this.play(this.index);
    },
    end() {
      this.nextSong();
    },
    update() {
      let num = this.lrclist.length - 1;
      let audio = document.querySelector("audio");
      let slider = document.querySelector("#slider");
      for (let i = 0; i < this.lrclist.length; i++) {
        if (audio.currentTime <= this.lrclist[i]["time"]) {
          num = i - 1;
          break;
        }
      }
      if (num != this.lrcindex) {
        this.lrcindex = num;
        let lrc = document.querySelector(".lrc");
        animate(lrc, { scrollTop: num * 22 });
      }
      this.time = toTime(audio.currentTime) + "/" + toTime(audio.duration);
      if (this.isClickSlider == false) {
        slider.value = (audio.currentTime / audio.duration) * 50;
        slider.style.backgroundSize = slider.value / 0.5 + "% 100%";
      }
    },
    start() {
      this.time = "00:00/00:00";
    },
    metadata() {
      if (this.isPlaying) {
        let audio = document.querySelector("audio");
        audio.play();
      } else {
        this.paused();
      }
    },
    change() {
      this.isClickSlider = false;
      let audio = document.querySelector("audio");
      let slider = document.querySelector("#slider");
      audio.currentTime = (slider.value * audio.duration) / 50;
    },
    input() {
      let slider = document.querySelector("#slider");
      this.isClickSlider = true;
      slider.style.backgroundSize = slider.value / 0.5 + "% 100%";
    },
    paused() {
      if (this.url == "") {
        return;
      }
      let audio = document.querySelector("audio");
      if (this.isPlaying) {
        this.isPlaying = false;
        audio.pause();
      } else {
        this.isPlaying = true;
        audio.play();
      }
    },
  },
};

function toTime(x) {
  let m = parseInt(x / 60); // 分
  let s = parseInt(x % 60); // 秒
  if (m < 10) {
    m = "0" + m;
  };
  if (s < 10) {
    s = "0" + s;
  };
  return m + ":" + s
}

function animate(obj, json, fn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var flag = true;
    for (var k in json) {
      if (k === "opacity") {
        var leader = getComputedStyle(obj, null)[k] * 100;
        var tag = json[k] * 100;
        var step = (tag - leader) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj.style[k] = leader / 100;
      } else if (k === "scrollTop") {
        var leader = obj[k];
        var tag = json[k];
        var step = (tag - leader) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj[k] = leader;
      } else {
        var leader = parseInt(getComputedStyle(obj, null)[k]) || 0;
        var tag = json[k];
        var step = (tag - leader) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        obj.style[k] = leader + "px";
      }
      if (leader !== tag) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(obj.timer);
      if (fn) {
        fn();
      }
    }
  }, 15);
}
</script>

<style scoped>
h4 {
  font-size: 20px;
  margin: 15px 10px;
  border-bottom: 1px solid #e1e8ed;
}

h3 {
  font-size: 30px;
  margin: 5px 10px;
  border-bottom: 1px solid blueviolet;
}

input {
  margin: 0;
  padding: 0;
  outline: none;
  -webkit-user-select: none;
}

.music {
  width: 100%;
  height: 550px;
  background-color: #fdfeff;
  opacity: 0.7;
  border-radius: 8px;
}

.img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 5px 5px;
  cursor: pointer;
}

.song {
  width: 100%;
  margin: 5px 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.song div {
  white-space: nowrap;
  overflow: hidden;
  max-width: 250px;
}

#sname {
  font-size: 18px;
}

#sartist {
  font-size: 15px;
  color: grey;
}

#time {
  font-size: 14px;
  color: grey;
}

.lrc {
  height: 50px;
  -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.lrc p {
  margin: 1px;
}

.lrc_current {
  color: #66ccff;
}

.p_ul {
  height: 380px;
  overflow-y: auto;
}

.p_ul li {
  height: 34px;
  line-height: 34px;
  display: flex;
  border-bottom: 1px solid #afafaf;
  margin: 3px 5px;
  cursor: pointer;
  transition: .2s;
  border-radius: 5px;
}

.p_ul li:hover {
  background-color: #bee6ff;
}

.p_ul li div {
  white-space: nowrap;
  overflow: hidden;
  max-width: 150px;
}

.p_ul::-webkit-scrollbar {
  display: none;
}

.song_num {
  text-align: center;
  width: 15%;
}

.song_name {
  width: 50%;
}

.song_artist {
  width: 35%;
}

.odd {
  background-color: #f3f3f3;
}

.even {
  background-color: #e6e6e6;
}

.choose {
  background-color: #c7c7c7;
}

.info {
  display: flex;
}

.info input[type="range"] {
  -webkit-appearance: none;
  width: 50%;
  height: 4px;
  border-radius: 2px;
  background: -webkit-linear-gradient(#5cdee4, #5cdee4) no-repeat, #82a5a3;
  background-size: 0% 100%;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb,
-moz-range-thumb {
  -webkit-appearance: none;
  width: 0px;
  height: 0px;
  border: 0;
  background: #66ccff;
  background-size: cover;
}

input[type="range"]::-ms-fill-lower {
  -webkit-appearance: none;
  background: #82a5a3;
}
</style>