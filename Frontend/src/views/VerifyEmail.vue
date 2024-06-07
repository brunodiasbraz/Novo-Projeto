<template>
    <div class="pt-5 text-center bg-bege">
        <h1 class="col-12">Verificando Email...</h1>
        <div class="col-12 mx-4 loader"></div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const token = ref(route.params.token)

    //console.log('Token recebido:', token.value);

    const verifyToken = async () => {
      try {
        console.log('Enviando token para verificação:', token.value)

        const response = await fetch('http://localhost:3000/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token_verify: token.value })
        })

        const data = await response.json()
        console.log('Resposta do servidor:', data)

        if (response.status === 201) {
          console.log('Token válido. Redirecionando para /compregistro')
          router.push({ path: '/compregistro', replace: true });
        } else {
          console.log('Token inválido. Redirecionando para /registrar')
          //router.push({ path: '/registrar', replace: true });
        }
      } catch (error) {
        console.error('Erro ao verificar o token:', error)
        //router.push({ path: '/registrar', replace: true });
      }
    }

    onMounted(() => {
      verifyToken()
    })

    return {
      token
    }
  }
}
</script>

<style scoped>
div {
  height: 60vh;
}

.bg-bege {
  background: #fbf7ec;
}

.loader {
  width: auto;
  padding: 10px;
  height: 22px;
  border-radius: 40px;
  color: #514b82;
  border: 2px solid;
  position: relative;
  overflow: hidden;
}

.loader::before {
  content: '';
  position: absolute;
  margin: 2px;
  width: 14px;
  top: 0;
  bottom: 0;
  left: -20px;
  border-radius: inherit;
  background: currentColor;
  box-shadow: -10px 0 12px 3px currentColor;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);
  animation: l14 1s infinite linear;
}

@keyframes l14 {
  100% {
    left: calc(100% + 20px);
  }
}
</style>
