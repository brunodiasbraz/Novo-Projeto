<template>
    <div>
        <div class="container p-5 col-9">
        <form>
          <div class="mb-3">
            <h1 class="text-center"><strong>Entrar</strong></h1>

            <div class="row m-4 text-center">
              <a href="#" class="col-sm p-1 m-2 input-group-text"><i class="col-sm m-1 fa-brands fa-google"></i></a>
              <a href="#" class="col-sm p-1 m-2 input-group-text"><i class="col-sm m-1 fa-brands fa-facebook-f"></i></a>
              <a href="#" class="col-sm p-1 m-2 input-group-text"><i class="col-sm m-1 fa-solid fa-phone"></i></a>
            </div>
            <p class="text-center">ou entre com seu email</p>
            <label for="emailLogin" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="senhaLogin" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senhaLogin">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="sConectado">
            <label class="form-check-label" for="sConectado">Sempre conectado</label>
          </div>
          <button type="submit" class="col-4 btn btn-warning">Entrar</button>
        </form>
        <hr class="m-4" />
        <div class="text-center">
          <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
        </div>  
      </div>
    </div>
</template>
  
<script>

</script>

<style scoped>

a {
  text-decoration: none;
}

</style>
