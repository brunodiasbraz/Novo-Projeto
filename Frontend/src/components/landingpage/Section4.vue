<template>
  <div class="bg-bege p-2">
    <div class="container p-2 text-center">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-5 mb-4 mb-md-0">
          <h3 class="c-roxo-text"><strong>Acesse em qualquer lugar ou dispositivo</strong></h3>
          <p class="c-roxo-text">Nosso clube de fidelidade pode ser usado em celulares ou computadores. Isso significa
            que seus clientes podem acompanhar seus pontos ganhos, trocar por recompensas e aproveitar todos os
            benefícios do clube sem precisar baixar um aplicativo.</p>
        </div>
        <div class="col-md-6">
          <img src="@assets/pic3.svg" alt="Imagem da seção 3" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section4'
}
</script>

<style scoped>
.bg-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;
}

.bg-bege {
  background: #FBF7EC;
}

img {
  width: 85%;
  /* Tamanho normal para dispositivos móveis */

  @media (min-width: 768px) {
    width: 75%;
  }
}
</style>
