<template>
  <div class="container cards">
    <div class="row d-flex card-deck g-4 m-3 text-center justify-content-center ">
      <div class="col-sm-6 col-md-4 col-lg-3 mx-sm-4 pt-5 pb-4 card shadow-sm">
        <div>
          <img class="card-img-top" src="@assets/cart.svg" style="width: 25%;" alt="Imagem de capa do card">
        </div>
        <div class="card-body">
          <h5 class="card-title c-roxo-text mb-4"><strong>Compre</strong></h5>
          <p class="card-text text-secondary">Faça uma compra e comece a ganhar pontos ou estrelas conforme o perfil da
            loja parceira.</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 mx-sm-4 pt-5 pb-4 bg-roxo text-white card shadow-sm">
        <div>
          <img class="card-img-top" src="@assets/qrcode.svg" style="width: 25%;" alt="Imagem de capa do card">
        </div>
        <div class="card-body">
          <h5 class="card-title mb-4"><strong>Valide seus pontos</strong></h5>
          <p class="card-text">Insira o código que recebeu no seu smartphone ou e-mail para começar a
            acumular.</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 mx-sm-4 pt-5 pb-4 card shadow-sm">
        <div>
          <img class="card-img-top" src="@assets/joia.svg" style="width: 25%;" alt="Imagem de capa do card">
        </div>
        <div class="card-body">
          <h5 class="card-title c-roxo-text mb-4"><strong>Troque seus pontos por recompensas </strong></h5>
          <p class="card-text text-secondary">Quando você tiver acumulado pontos suficientes, você pode trocá-los por
            recompensas
            exclusivas.</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section2'
}
</script>

<style scoped>
.bg-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;

}

.cards {
  margin-top: -15%;
}
</style>
