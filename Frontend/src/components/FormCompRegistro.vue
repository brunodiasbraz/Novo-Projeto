<template>
  <h3 class="mb-3 font-weight-normal text-center">Continue seu cadastro</h3>
  <div class="progress mb-4" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0"
    style="height: 5px" aria-valuemax="100">
    <div class="progress-bar bg-warning" id="progress-bar" :style="{ width: progressBarWidth }"></div>
  </div>
  <form @submit.prevent="submitForm" class="d-grid gap-3 needs-validation" novalidate>
    <div class="form-group">
      <label for="nomeRegistro" class="form-label">Nome completo</label>
      <input v-model="nome" type="text" id="nomeRegistro" class="form-control mb-3" placeholder="Ex.: Jhon Doe" required
        autofocus @input="updateProgressBar" />

      <label for="telefone" class="">Telefone</label>
      <input v-model="telefone" type="number" id="telefoneRegistro" class="form-control mb-3"
        placeholder="Ex.: 11122233366" required autofocus @input="updateProgressBar" />

        <label for="cpf" class="">CPF</label>
      <input v-model="cpf" :class="cpfClass" @blur="validateCpf" type="text" id="cpfRegistro" class="form-control mb-3" placeholder="Ex.: 11122233366" required autofocus @input="updateProgressBar" />
      <div v-if="cpf && !isCpfValid" class="invalid-feedback">
        CPF inválido.
      </div>


      <label for="dataNascimento" class="">Data de Nascimento</label>
      <input v-model="dataNascimento" type="date" id="dataNascimentoRegistro" class="form-control mb-3" required
        autofocus @input="updateProgressBar" />

      <label for="cepRegistro" class="" required>Digite seu CEP</label>
      <div class="input-group mb-3">
        <input v-model="cepRegistro" type="number" maxlength="8" class="form-control" id="cepRegistro"
          placeholder="Ex.: 36000555" required @input="updateProgressBar">
        <button class="btn btn-outline-secondary" type="button" @click="getCep"><i
            class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>

    <div v-if="response" class="form-group">
      <div v-for="(value, key) in response" :key="key">
        <label class="text-capitalize" :for="key">{{ key }}</label>
        <input class="form-control mb-3" :placeholder="key" :disabled="key !== 'complemento' && key !== 'numero'"
          v-model="response[key]" type="text" />
      </div>
    </div>

    <button class="col-12 btn rounded-5 text-white c-roxo shadow" id="btnCCliente" @click="submitForm">Continuar</button>
    <button class="col-12 btn rounded-5 shadow bg-warning" type="submit" id="btnCParceiro" @click="submitForm">Quero
      ser Parceiro</button>

    <!-- Button trigger modal -->
    <a href="#" class="text-end" data-bs-toggle="modal" data-bs-target="#exampleModal">Saiba mais <i
        class="fa-solid fa-arrow-turn-down fa-rotate-90 ms-2 me-3"></i></a>
  </form>

  <!-- Modal -->
  <div class="modal fade my-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Seja um Parceiro Clubão!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="fw-semibold">Saia do papel e venha para o digital.</p> Transforme a experiência dos carimbos nos
          cartões de fidelidade
          com uma
          estratégia digital e online, que automatiza o marketing de relacionamento e te dá resultados.
          <br>
          <br>
          Muito mais que um cartão entregue, você terá um cadastro de clientes e ferramentas para aumentar as vendas,
          conquistar novos clientes, pontuar, premiar, automatizar o marketing, realizar promoções, sorteios, campanhas
          e muito mais.
          <br>
          <br>
          Se você precisar fazer um uso misto de cartões de fidelidade impressos enquanto faz a transição para o mundo
          digital, nossa plataforma também pode te ajudar. Nós queremos que você tenha resultados nas vendas,
          experimente e comprove.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Fechar</button>
          <button class="col-8 btn rounded-5 shadow bg-warning" id="btnCParceiro" @click="submitForm">Quero
            ser Parceiro</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Alertas -->
  <!-- Aqui vão os alertas -->
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

const nome = ref('');
const telefone = ref('');
const cpf = ref('');
const dataNascimento = ref('');
const cepRegistro = ref('');
const response = ref(null);
const progressBarWidth = ref('50%');
const isCpfValid = ref(true);
const hasValidatedCpf = ref(false);

const validateCpf = () => {
  hasValidatedCpf.value = true;
  if (cpf.value.trim() !== '') {
    isCpfValid.value = cpfValidator.isValid(cpf.value);
    if (isCpfValid.value) {
      cpf.value = cpfValidator.format(cpf.value);
    }
  }
};

const cpfClass = computed(() => {
  if (!hasValidatedCpf.value) {
    return '';
  }
  return isCpfValid.value ? 'is-valid' : 'is-invalid';
});

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
      telefone: telefone.value,
      cpf: cpf.value,
      dataNascimento: dataNascimento.value,
      cep: cepRegistro.value,
      ...response.value,
    };
    console.log('Dados do formulário:', formData);
    // Substitua a URL abaixo pela URL correta para enviar o formulário
    // const response = await axios.post('http://sua-api-url.com/registro', formData);
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

const updateProgressBar = () => {
  let filledInputs = 0;
  if (nome.value !== '') filledInputs++;
  if (telefone.value !== '') filledInputs++;
  if (cpf.value !== '') filledInputs++;
  if (dataNascimento.value !== '') filledInputs++;
  if (cepRegistro.value !== '') filledInputs++;
  const progressPercentage = 50 + (filledInputs * 9);
  progressBarWidth.value = `${progressPercentage}%`;
};

// Observe changes in input values
watchEffect(() => {
  updateProgressBar();
});

onMounted(() => {
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});
</script>

<style scoped>
a {
  text-decoration: none;
}

#btnCParceiro {
  color: #5B438B;
  background-color: #5B438B;
}
.invalid-feedback{
  margin-top: -12px;
  margin-bottom: 10px;
}
</style>
