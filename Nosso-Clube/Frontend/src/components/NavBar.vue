<template>
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid ms-5 me-5">
          <a class="navbar-brand">Nosso Clube</a>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
        <!-- <nav>
        <b-navbar-brand tag="h1" class="ml-5 m-2">Nosso Clube</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

         
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="/" class="mr-2">Home</b-nav-item>
              <b-nav-item href="#" class="mr-2">Planos</b-nav-item>
              <b-nav-item href="#" class="mr-2">Parceiros</b-nav-item>
              <b-nav-item href="#" class="mr-2">Sobre nós</b-nav-item>
            </b-navbar-nav>
            <b-button href="/login" class="mr-2" variant="outline-warning">Cadastre-se</b-button>
            <b-nav-item-dropdown class="mr-5" right>
             
              <template #button-content>
                <b class="mr-2">Área do Cliente</b>
              </template>
              <b-dropdown-item href="#">Fideliza</b-dropdown-item>
              <b-dropdown-item href="#">Clubão</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </nav> -->

  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
