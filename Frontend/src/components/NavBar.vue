<template>
  <div>
    <nav class="navbar bg-transparent navbar-color">
      <div class="container-fluid ms-5 me-5">
        <a href="/" class="navbar-brand"><i class="fa-regular fa-id-card"></i> <strong>Nosso</strong>Clube</a>
        <div>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Planos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Parceiros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre nós</a>
            </li>
          </ul>
        </div>
        <div>
          <div class="dropdown-center">
            <button
              class="btn btn-outline-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Área do Cliente
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/login">Fideliza</a></li>
              <li><a class="dropdown-item" href="/loginclubao">Clubão</a></li>
            </ul>
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

.navbar-color{
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.055);
}


</style>
