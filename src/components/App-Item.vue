<template>
  <img style="width: 100%; cursor: pointer" :src="src" @click="clickImage()">
  <h2>{{app.name}}</h2>
  <p style="font-style: italic">von {{authors}} ({{stufe}}, <a :href="linkPlatform" target="_blank">{{ app.platform }}</a>)</p>
  <p>{{app.description}}</p>
  <p><Button @click="clickImage()" label="Start"/></p>
</template>

<script>
import Button from"primevue/button";
export default{
  emits: ["playapp"],
  props: {
    app: Object
  },
  computed: {
    stufe(){
      if(this.app.stufe==="E"){
        return "E-Phase";
      }else if(this.app.stufe==="Q"){
        return "Q-Phase";
      }else{
        return "Klasse "+this.app.stufe;
      }
    },
    src(){
      //console.log(import.meta.url);
      //const url = new URL('/img/'+this.app.image, import.meta.url)
      let url='/Apps/info-results/img/'+this.app.image;
      return url;
    },
    linkPlatform(){
      if(this.app.platform==="JSEdit"){
        return "https://thomaskl.uber.space/Apps/js-edit/";
      }else{
        return "https://thomaskl.uber.space/Apps/java-app/";
      }
    },
    authors(){
      if(this.app.authors.length===1){
        return this.app.authors[0];
      }
      let aut=JSON.parse(JSON.stringify(this.app.authors));
      let last=aut.pop();
      return aut.join(", ")+" und "+last;
    }
  },
  methods: {
    clickImage(){
      this.$emit('playapp',this.app);
    }
  },
  components: {
    Button
  }
};
</script>