<template>
  <div>
    <nav class="navbar bg-transparent">
      <div class="container-fluid ms-5 me-5">
        <a class="navbar-brand">Nosso Clube</a>
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
            <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Área do Cliente
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/login">Fideliza</a></li>
              <li><a class="dropdown-item" href="/login">Clabão</a></li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
