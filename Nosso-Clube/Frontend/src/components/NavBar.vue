<template>
  <div>
    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand tag="h1" class="mb-0">Nosso Clube</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="/" class="mr-2">Home</b-nav-item>
              <b-nav-item href="#" class="mr-2">Planos</b-nav-item>
              <b-nav-item href="#" class="mr-2">Parceiros</b-nav-item>
              <b-nav-item href="#" class="mr-2">Sobre nós</b-nav-item>
            </b-navbar-nav>
            <b-button href="/login" class="mr-2" variant="outline-warning">Cadastre-se</b-button>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b class="mr-2">Área do Cliente</b>
              </template>
              <b-dropdown-item href="#">Fideliza</b-dropdown-item>
              <b-dropdown-item href="#">Clubão</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
