<template>
  <div class="container-fluid bg-dark text-light d-flex align-items-center justify-content-center">

    <div class="row py-5 g-5">
      <div class="col">
        <div>
          <a href="/" class="navbar-brand"><i class="fa-solid fa-circle" style="color: #5b438b;"></i>
            <strong> Clubão</strong> Recompensa</a>
          <p class="pt-2">O clube que vale a pena de verdade.</p>
        </div>
      </div>
      <div class="col-5">
        <p>Newsletter</p>
        <div class="input-group">
          <input type="text" class="form-control bg-transparent rounded-0 text-light custom-input"
            placeholder="digite seu melhor e-mail" aria-label="Usuário" aria-describedby="basic-addon1">
        </div>
      </div>

      <div class="col">Siga-nos
        <div>
          <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
          <i class="fa-brands fa-x-twitter" style="color: #ffffff;"></i>
          <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>
        </div>
      </div>
    </div>

  </div>
</template>

  
<script>
export default {
  name: 'Section8Footer'
}
</script>

<style scoped>
.custom-input::placeholder {
  color: #808080;
  font-style: italic;
  /* Defina a cor desejada para o placeholder */
}

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
