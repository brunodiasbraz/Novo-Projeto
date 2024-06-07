<template>
  <h3 class="mb-4 font-weight-normal text-center">Continue seu cadastro</h3>
  <form @submit.prevent="submitForm" class="d-grid gap-3">
    <div class="text-center">
      <input type="radio" class="btn-check" name="options-base" id="optionCliente" value="optionCliente"
        autocomplete="off">
      <label class="btn" for="optionCliente">Cliente</label>

      <input type="radio" class="btn-check" name="options-base" id="optionParceiro" value="optionParceiro"
        autocomplete="off">
      <label class="btn" for="optionParceiro">Parceiro</label>
    </div>


    <div class="form-group">
      <label for="nome" class="">Nome completo</label>
      <input v-model="nome" type="text" id="nomeRegistro" class="form-control mb-3" placeholder="Ex.: Jhon Doe" required
        autofocus />
      <label for="cpf" class="">CPF</label>
      <input v-model="cpf" type="number" id="cpfRegistro" class="form-control mb-3" placeholder="Ex.: 11122233366"
        required autofocus />

      <label for="cepRegistro" class="" required>Digite seu CEP</label>
      <div class="input-group mb-3">
        <input v-model="cepRegistro" type="number" maxlength="8" class="form-control" id="cepRegistro"
          placeholder="Ex.: 36000555" required>
        <button class="btn btn-outline-secondary" type="button" @click="getCep"><i
            class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>

    <div v-if="response" class="form-group">
      <div v-for="(value, key) in response" :key="key">
        <label class="text-capitalize" :for="key">{{ key }}</label>
        <input class="form-control mb-3" :placeholder="key" :disabled="key !== 'complemento' && key !== 'numero'" v-model="response[key]" type="text" />
      </div>
    </div>

    <BtnRoxo class="col-12 mt-3" id="btnLogin" text="Continuar" @click="submitForm" />
  </form>

  <!-- Alertas -->
  <!-- Aqui vão os alertas -->

</template>

<script setup>
import { ref } from 'vue'
import BtnRoxo from '@elements/BtnRoxo.vue'

const nome = ref('');
const cpf = ref('');
const cepRegistro = ref('');
const response = ref(null);

const getCep = async () => {
  const url = `https://viacep.com.br/ws/${cepRegistro.value}/json/`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    if (!data.erro) {
      const keysToShow = ['logradouro', 'numero', 'complemento', 'bairro', 'localidade', 'uf'];

      const orderedData = keysToShow.reduce((obj, key) => {
        if (key === 'numero') {
          obj[key] = '';
        } else if (key === 'complemento') {
          obj[key] = data.complemento || '';
        } else {
          obj[key] = data[key] || '';
        }
        return obj;
      }, {});

      response.value = orderedData;
    } else {
      alert('Cep não encontrado');
      response.value = null;
    }
  } catch (error) {
    console.error(error);
    response.value = null;
  }
};

const submitForm = async () => {
  try {
    const formData = {
      nome: nome.value,
      cpf: cpf.value,
      ...response.value,
    };

    console.log('Dados do formulário:', formData);

    // Substitua a URL abaixo pela URL correta para enviar o formulário
    //const response = await axios.post('http://sua-api-url.com/registro', formData);

    /* if (response.status === 201) {
      document.getElementById('alertSuccess').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('alertSuccess').classList.add('d-none');
      }, 8000);
    } else {
      document.getElementById('alertError').classList.remove('d-none');
      setTimeout(() => {
        document.getElementById('alertError').classList.add('d-none');
      }, 5000);
    } */
  } catch (error) {
    console.error('Erro ao enviar formulário:', error.message);
    document.getElementById('alertError').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('alertError').classList.add('d-none');
    }, 5000);
  }
};

</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
