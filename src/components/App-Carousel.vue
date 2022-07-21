<template>
  <Carousel v-if="existing" circular :value="group.apps" :num-visible="4" :num-scroll="2" :responsive-options="responsiveOptions" :autoplay-interval="3000">
    <template #header>
      <h2 style="text-align: center">{{group.name}}</h2>
    </template>
    <template #item="slotProps">
      <AppItem @playapp="playApp" :app="slotProps.data"/>

    </template>
  </Carousel>
</template>

<script>
import Carousel from 'primevue/carousel';
import AppItem from './App-Item.vue';
import { nextTick } from 'vue';

export default{
  props: {
    group: Object
  },
  watch: {
    group(){
      this.restart();
    }
  },
  data(){
    return {
      existing: true,
    };
  },
  computed: {
    responsiveOptions(){
      return [
        {
          breakpoint: '100000px',
          numVisible: Math.min(this.group.apps.length,4),
          numScroll: 1
        },
        {
          breakpoint: '1024px',
          numVisible: Math.min(this.group.apps.length,3),
          numScroll: 1
        },
        {
          breakpoint: '800px',
          numVisible: Math.min(this.group.apps.length,2),
          numScroll: 1
        },
        {
          breakpoint: '600px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
  },
  methods: {
    restart(){
      this.existing=false;
      nextTick(()=>{
        this.existing=true;
      });
    },
    playApp(app){
      this.$emit("playapp",app);
    }
  },
  components: {
    Carousel, AppItem
  }
}

</script>