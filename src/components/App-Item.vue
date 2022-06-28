<template>
  <img style="width: 100%; cursor: pointer" :src="src" @click="clickImage()">
  <h2>{{app.name}}</h2>
  <p style="font-style: italic">von {{authors}}</p>
  <p>{{app.description}}</p>
</template>

<script>
export default{
  props: {
    app: Object
  },
  computed: {
    src(){
      return "/img/"+this.app.image;
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
  }
};
</script>