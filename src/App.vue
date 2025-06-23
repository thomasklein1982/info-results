
<template>
  <div :style="{display: 'flex', 'flex-direction': 'column', width: '100%', height: '100%'}">
    <MenuBar @showinfos="$refs.dialogInfo.show=true" @closeapp="playingApp=null" @restartapp="restartApp()" v-model="currentGroup" :playing-app="playingApp"/>
    <FilterBar :apps="apps" @update="updateFilter"/>
    <div :style="{flex: 1}" style="overflow: hidden">
      <App-Carousel @playapp="playApp" v-if="currentGroup" v-show="!playingApp" :group="appsFiltered"/>
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
import FilterBar from "./components/FilterBar.vue";
import {version} from '../package.json';
export default {
  computed: {
    appsFiltered(){
      if(!this.filterItems) return this.currentGroup;
      let appsFiltered=[];
      let items=this.filterItems;
      for(let i=0;i<this.currentGroup.apps.length;i++){
        let app=this.currentGroup.apps[i];
        let ok=true;
        for(let j=0;j<items.length;j++){
          let item=items[j];
          if(!item.checked && app[item.property]===item.key){
            ok=false;
            break;
          }
        }
        if(ok){
          appsFiltered.push(app);
        }
      }
      return {name: this.currentGroup.name, apps: appsFiltered};
    }
  },
  data(){
    return {
      version: version,
      apps: appData,
      currentGroup: appData[0],
      playingApp: null,
      filterItems: null
    };
  },
  methods: {
    playApp(app){
      this.playingApp=app;
    },
    restartApp(){
      this.$refs.player.restart();
    },
    updateFilter(items){
      this.filterItems=[];
      for(let i=0;i<items.length;i++){
        this.filterItems.push(items[i]);
      }
      //this.filterItems=items;
    }
  },
  components: {
    MenuBar, AppCarousel, AppPlayer, InfoDialog, FilterBar
  }
};
</script>