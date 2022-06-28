<template>
  <Carousel circular :value="group.apps" :num-visible="4" :num-scroll="2" :responsive-options="responsiveOptions" :autoplay-interval="3000">
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

export default{
  props: {
    group: Object
  },
  data(){
    return {
      responsiveOptions: [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 1
			},
			{
				breakpoint: '800px',
				numVisible: 2,
				numScroll: 1
			},
			{
				breakpoint: '600px',
				numVisible: 1,
				numScroll: 1
			}
		]
    };
  },
  computed: {
    apps(){
      var apps=[];
      for(let i=0;i<this.group.apps.length;i++){
        let a=this.group.apps[i];
        apps.push({

        });
      }
      return apps;
    }
  },
  methods: {
    playApp(app){
      this.$emit("playapp",app);
    }
  },
  components: {
    Carousel, AppItem
  }
}

</script>