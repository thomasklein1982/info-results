<template>
  <iframe @load="loaded()" ref="iframe" :src="url" style="width: 100%; height: 100%; border: 0"></iframe>
  <div v-if="loading" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%" :style="{display: 'grid', 'align-items': 'center'}">
    <ProgressSpinner />
  </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';

export default{
  props: {
    app: Object
  },
  data(){
    return {
      param: 0,
      loading: true
    }
  },
  computed: {
    url(){
      this.loading=true;
      return "https://"+this.app.url+"?p="+this.param;
    }
  },
  methods: {
    restart(){
      this.param++;
      this.loading=true;
    },
    loaded(){
      this.loading=false;
      this.$refs.iframe.focus();
    }
  },
  components: {
    ProgressSpinner
  }
}
</script>