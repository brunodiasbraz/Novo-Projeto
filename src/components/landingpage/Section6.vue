<template>
  <div class="container-fluid bg-bege">
    <div class="container p-4">
      <div class="row my-5 justify-content-center card-deck">
        <div class="text-center c-roxo-text pb-3">
          <h3><strong>Depoimentos de clientes</strong></h3>
          <p>Acreditamos que a sua opinião é muito importante e nos ajuda sempre a <span class="text-decoration">
              melhorar.</span> </p>
        </div>
        <div class="col-sm-3 p-3 my-2 card">
          <div class="row g-0">
            <div class="col-md-2 text-center">
              <img src="@assets/avatar.svg" class="img-fluid pt-3 rounded-start " alt="Imagem de capa do card">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <p class="card-text">"Eu amo o <strong>Clubão.</strong> É muito fácil de usar e as recompensas são ótimas.
                  Eu já ganhei
                  um vale-presente de R$100 para uma loja que amo. Eu recomendo o clube para todos!"</p>
                <hr>
                <p class="card-text c-roxo-text">Vincent Smith <small class="text-muted">- CEO Loja Fake</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mx-3 my-2 p-3 card">
          <div class="row g-0">
            <div class="col-md-2 text-center">
              <img src="@assets/avatar2.svg" class="img-fluid pt-3 rounded-start " alt="Imagem de capa do card">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <p class="card-text">"Estou muito satisfeito com o <strong>Clubão</strong>. É uma ótima maneira de
                  economizar dinheiro e aproveitar as melhores ofertas. Eu já ganhei vários descontos e promoções, e
                  sempre estou aproveitando as novidades. Eu recomendo o clube para todos que querem aproveitar o melhor
                  que as empresas têm a oferecer."</p>
                <hr>
                <p class="card-text c-roxo-text">Vincent Smith <small class="text-muted">- CEO Loja Fake</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 p-3 my-2 card">
          <div class="row g-0">
            <div class="col-md-2 text-center">
              <img src="@assets/avatar3.svg" class="img-fluid pt-3 rounded-start " alt="Imagem de capa do card">
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <p class="card-text">"Eu sou cliente do <strong>Clubão</strong> há alguns anos e sempre estou satisfeito
                  com os serviços. O clube é muito organizado e as recompensas são sempre de alta qualidade. Eu recomendo
                  o clube para todos que procuram um programa de fidelidade que vale a pena."</p>
                <hr>
                <p class="card-text c-roxo-text">Vincent Smith <small class="text-muted">- CEO Loja Fake</small></p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Section6'
}
</script>

<style scoped>
.bg-roxo {
  background-color: #5B438B;
}

.c-roxo-text {
  color: #5B438B;
}

.text-decoration {
  text-decoration: underline wavy #FFDE59;
}

.bg-bege {
  background: #FBF7EC;
}
</style>
