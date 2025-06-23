<template>
  <div id="bar">
    <span class="item" v-for="(item,i) in items">
      <Checkbox :id="'filter'+i" v-model="items[i].checked" binary @change="$emit('update',items)"/> <label :for="'filter'+i"> {{ item.label }} </label>
    </span>
  </div>
</template>

<script>
import Checkbox from "primevue/checkbox";

export default{
  components: {
    Checkbox
  },
  props: {
    apps: Array
  },
  computed: {
    filterCategories(){
      let categories=[
        {
          stufen: [],
          platforms: []
        }
      ];
      for(let i=0;i<this.apps.length;i++){
        let app=this.apps[i];
        let stufe=app.stufe;
        let platform=app.platform;
        if(categories.stufen.indexOf(stufe)<0){
          categories.stufen.push(stufe);
        }
        if(categories.platforms.indexOf(platform)<0){
          categories.platforms.push(platform);
        }
      }
    }
  },
  data(){
    return {
      items: [
        {
          label: "WU 9",
          key: 9,
          checked: true,
          property: "stufe"
        },
        {
          label: "WU 10",
          key: 10,
          checked: true,
          property: "stufe"
        },
        {
          label: "E-Phase",
          key: "E",
          checked: true,
          property: "stufe"
        },
        {
          label: "Q-Phase",
          key: "Q",
          checked: true,
          property: "stufe"
        },
        {
          label: "JavaApp",
          key: "JavaApp",
          checked: true,
          property: "platform"
        },
        {
          label: "JSEdit",
          key: "JSEdit",
          checked: true,
          property: "platform"
        }
      ]
    };
  }
}
</script>

<style scoped>
  .item{
    padding: 0.2rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  #bar{
    padding: 0.2rem;
    text-align: center;

  }
</style>