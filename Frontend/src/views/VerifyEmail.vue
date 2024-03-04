<template>
    <div class="row text-center py-5 justify-content-center bg-bege ">
        <h1 class="col-12">Verificando Email...</h1>
        <br />
        <div class="col-12 loader"></div>

    </div>
</template>

<script>
import axios from 'axios';
export default {

    created() {

        const resposta = submitForm(this.$route.query.token)
        console.log(resposta)

    }

}
const submitForm = (token) => {
    try {
        const response = axios.post('http://localhost:3000/auth/verify', {

            token_verify: token
        });

        return response;
    } catch (error) {
        console.error('Erro');
        //console.error('Erro ao enviar formulário 2:', error.message); // Adicione .message
    }
}
</script>

<style scoped>
div {
    height: 60vh;
}

.bg-bege {
    background: #FBF7EC;
    /* Sombra desejada */
}

/* HTML: <div class="loader"></div> */
.loader {
    width: 120px;
    height: 22px;
    border-radius: 40px;
    color: #514b82;
    border: 2px solid;
    position: relative;
    overflow: hidden;
}

.loader::before {
    content: "";
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
        left: calc(100% + 20px)
    }
}
</style>
