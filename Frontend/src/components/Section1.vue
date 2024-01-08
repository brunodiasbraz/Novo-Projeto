<template>
  <div class="bg-bege">
    <div class="container p-3">
      <div class="row">
        <div>
          <div class="container-fluid py-5 row justify-content-center align-items-center">
            <div class="col-6">
              <div class="col-sm-10 g-5">
                <h1><span class="text-decoration">Pontue</span>
                  a cada compra e troque por recompensas
                  <strong class="c-roxo-text">exclusivas.</strong>
                </h1>
                <p class="col-sm-9 mb-4 mt-3 text-secondary">
                  Conheça as vantagens de entrar para o melhor Clube Fidelidade do país.
                </p>
                <a class="btn rounded-5 px-5 text-white c-roxo shadow" role="button" href="#">EXPERIMENTE
                  GRÁTIS</a>

              </div>
            </div>
            <div class="col-sm-4">
              <img class="img-fluid" src="@assets/Group.png" alt="aqui uma imagem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section1'
}
</script>

<style scoped>
.bg-bege {
  background: #FBF7EC;
}

.c-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;

}

.container-fluid {
  margin-bottom: 2%;
}

.text-decoration {
  text-decoration: underline wavy #FFDE59;
}
</style>
