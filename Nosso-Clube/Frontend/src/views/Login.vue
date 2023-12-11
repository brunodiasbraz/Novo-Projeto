<template>
  <div class="container-fluid">
    <div class="container cont-login">
    <div class="row">
      <div class="col-sm bg-danger">
      Area para cadastrar
      </div>
      <div class="col-sm bg-warning">
      <div class="container ml-5 p-5 col-8">
        <form>
          <div class="mb-3">
            <h1 class="text-center">Entrar</h1>

            <div class="text-center p-4">
              <span class="col-sm p-1 m-2 border border-dark rounded"><i class="col-sm m-1 fa-brands fa-google"></i></span>
              <span class="col-sm p-2 m-2 border border-dark rounded"><i class="col-sm m-1 fa-brands fa-facebook-f"></i></span>
              <span class="col-sm p-1 m-2 border border-dark rounded"><i class="col-sm m-1 fa-solid fa-phone"></i></span>
            </div>

            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
     </div>
    </div>
    </div>
  </div>
</template>
  
<script>

</script>

<style scoped>
.cont-login{
  padding: 5%;
}
</style>