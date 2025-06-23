
<template>
  <div :style="{display: 'flex', 'flex-direction': 'column', width: '100%', height: '100%'}">
    <MenuBar @showinfos="$refs.dialogInfo.show=true" @closeapp="playingApp=null" @restartapp="restartApp()" v-model="currentGroup" :playing-app="playingApp"/>
    <div :style="{flex: 1}" style="overflow: hidden">
      <App-Carousel @playapp="playApp" v-if="currentGroup" v-show="!playingApp" :group="currentGroup"/>
      <App-Player ref="player"  v-if="playingApp" :app="playingApp"></App-Player>
    </div>
  </div>
  <InfoDialog ref="dialogInfo"/>
</template>

<script>
import appData from "./apps.js";
import MenuBar from "./components/MenuBar.vue";
import AppCarousel from "./components/App-Carousel.vue";
import AppPlayer from './components/App-Player.vue';
import InfoDialog from './components/Info-Dialog.vue';
import {version} from '../package.json';
export default {
  data(){
    return {
      version: version,
      apps: appData,
      currentGroup: appData[0],
      playingApp: null
    };
  },
  methods: {
    playApp(app){
      this.playingApp=app;
    },
    restartApp(){
      this.$refs.player.restart();
    }
  },
  components: {
    MenuBar, AppCarousel, AppPlayer, InfoDialog
  }
};
</script>