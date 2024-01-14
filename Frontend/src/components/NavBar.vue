<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-bege">
      <div class="container-fluid mx-5">
        <a href="/" class="navbar-brand"><i class="fa-solid fa-circle" style="color: #5b438b;"></i>
          <strong> Clubão</strong>Recompensa</a>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars-staggered" style="color: #5b438b;"></i>
        </button>

        <div class="collapse navbar-collapse text-end" id="navbarNav">
          <ul class="navbar-nav">
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

          <div class="dropdown-center">
            <a class="btn rounded-5 text-white mt-3 bg-roxo px-4" role="button" href="/login">Área do cliente</a>
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
  background-color: rgb(91, 67, 139);
}
</style>
