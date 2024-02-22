<template>
  <div class="sticky-top">
    <nav id="bg-bege" class="navbar navbar-expand-lg bg-bege sem-sombra">
      <div class="container-fluid mx-3">
        <!-- Logotipo no canto esquerdo -->
        <a href="/" class="navbar-brand"><i class="fa-solid fa-circle" style="color: #5b438b;"></i>
          <strong> Clubão</strong>Recompensa</a>

        <!-- Botão de toggler para dispositivos móveis -->
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars-staggered" style="color: #5b438b;"></i>
        </button>

        <!-- Itens da navbar no centro -->
        <div class="collapse navbar-collapse text-center" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link text-secondary" href="/NossoClube">Home</a>
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

          <!-- Botão no canto direito -->
          <div>
            <a class="btn rounded-5 text-white my-2 bg-roxo px-4" role="button" href="/NossoClube/login">Área do
              cliente</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'NavBar'
};

document.addEventListener("DOMContentLoaded", function () {
  var elemento = document.getElementById("bg-bege");

  // Adiciona a classe com-sombra ao rolar para baixo, remove ao rolar para cima
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      elemento.classList.add("bg-bege");
      elemento.classList.remove("sem-sombra");
    } else {
      elemento.classList.remove("bg-bege");
      elemento.classList.add("sem-sombra");
    }
  });
});

</script>

<style scoped>
#bg-bege {
  transition: box-shadow 0.3s ease;
  background: #FBF7EC;
}

.bg-bege {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.11);
  /* Sombra desejada */
}

.bg-roxo {
  background-color: rgb(91, 67, 139);
}

.sem-sombra {
  box-shadow: none;
  /* Sem sombra por padrão */
}
</style>
