<template>
  <Dialog v-model:visible="show" header="Über diese Website">
    <h1>Hall of Fame v. {{ $root.version }}</h1>
    <p>Auf dieser Website finden Sie einen großen Teil der Projektarbeiten, die Schüler:innen der Jahrgangsstufen 9, 10 und der E-Phase der <a href="https://marienschule-limburg.de" target="_blank">Marienschule</a> im Informatik-Unterricht selbst programmiert haben.</p>
    <p>Die verwendeten Programmiersprachen sind Javascript im WU-Unterricht und Java in der Oberstufe. Gearbeitet haben die Schüler:innen mit <a href="https://thomaskl.uber.space/Apps/java-app/" target="_blank">JSEdit</a> bzw. <a href="https://thomaskl.uber.space/Apps/java-app/" target="_blank">JavaApp</a>.</p>
    <p>Viele der Spiele lassen sich auch mit einem angeschlossenen Bluetooth- oder USB-Gamepad spielen.</p>
    <p>Viel Spaß beim Spielen und Entdecken!</p>
    <p>Thomas Klein (klein.t"at"marienschule-limburg.de)</p>
    <p>Disclaimer: Die Schüler:innen hosten die verlinkten Projekte selbst, daher kann keine Haftung über die verlinkten Inhalte übernommen werden.</p>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';

export default{
  data(){
    return {
      show: false
    };
  },
  components: {
    Dialog
  }
};
</script>