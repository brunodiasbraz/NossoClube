<script setup>
import BtnRoxo from '@elements/BtnRoxo.vue'
</script>
<template>
  <div class="container-fluid py-5 text-center">
    <div class="justify-content-center p-4 align-items-center">
      <div>
        <h3 class="c-roxo-text">Junte-se a nós hoje e comece a <strong>Ganhar</strong></h3>
      </div>
      <div class="p-3">
        <img src="@assets/pic2.svg" alt="Imagem da seção 3" style="width: 85%;">
      </div>
      <p class="c-roxo-text py-3">É grátis e fácil de se inscrever.<br />
        Clique no botão abaixo para começar a ganhar pontos e recompensas.</p>
      <BtnRoxo text="Começar a ganhar" class="mt-1" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section5'
}
</script>

<style scoped>
.bg-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;
}

.c-roxo {
  background-color: #5B438B;
}

.bg-bege {
  background: #FBF7EC;
}
</style>
