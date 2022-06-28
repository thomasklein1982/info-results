<template>
  <Menubar :model="items">
    <template #start>
      <div style="font-weight: bold" v-if="playingApp">
        {{playingApp.name}}
      </div>
    </template>
    <template #end>
      <template v-if="playingApp">
        <Button class="p-button-secondary" style="margin-right: 0.5rem" label="" icon="pi pi-refresh" @click="$emit('restartapp')"/>
        <Button class="p-button-secondary" style="margin-right: 0.5rem" label="" icon="pi pi-external-link" @click="openExternalLink()"/>
        <Button class="p-button-secondary" style="margin-right: 0.5rem" label="" icon="pi pi-times" @click="$emit('closeapp')"/>
      </template>
    </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar';
import appData from '../apps';
import Button from 'primevue/button';

export default {
  props: {
    modelValue: Object,
    playingApp: Object
  },
  data(){
    return {
      
    };
  },
  computed: {
    items(){
      let items=[];
      if(this.playingApp) return null;
      for(let i=0;i<appData.length;i++){
        let s=appData[i];
        items.push({
          label: s.name,
          icon: 'pi pi-file',
          command: (ev)=>{
            this.$emit('update:modelValue', s);
          }
        });
      }
      items.push({
        separator: true
      });
      items.push({
        label: 'Infos',
        icon: 'pi pi-info',
        command: (ev)=>{
          this.$emit("showinfos");
        }
      })
      return items;
    }
  },
  methods: {
    openExternalLink(){
      window.open("https://"+this.playingApp.url,"_blank")
    }
  },
  components: {
    Menubar, Button
  }
}

</script>