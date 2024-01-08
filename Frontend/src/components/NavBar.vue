<template>
  <div class="sticky-top">
    <nav class="navbar bg-bege ">
      <div class="container-fluid mx-5">
        <a href="/" class="navbar-brand"><i class="fa-solid fa-circle" style="color: #5b438b;"></i><strong>
            Nosso</strong>Clube</a>
        <div>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link text-secondary" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">Planos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">Parceiros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">Sobre nós</a>
            </li>
          </ul>
        </div>
        <div>
          <div class="dropdown-center">
            <a class="btn rounded-5 text-white bg-roxo px-4" role="button" href="/login">Área do cliente</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.bg-bege {
  background: #FBF7EC;
}

.bg-roxo {
  background-color: #5B438B;
}
</style>
