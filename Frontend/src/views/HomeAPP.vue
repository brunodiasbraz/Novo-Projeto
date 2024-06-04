<template>
  <div class="container">
    <h1>Bem-vindo ao App!</h1><br>
    <div v-if="userData">
      <h4>Dados do Usuário</h4>
      <p>Name: {{ userData.name }}</p>
      <p>ID: {{ userData._id }}</p>
      <p>Email: {{ userData.email }}</p>
      <p>Token: {{ userData.token_verify }}</p>
    </div>
    <div v-else>
      <p>Carregando dados do usuário...</p>
    </div>
  </div>
  <div>
    <nav class="mx-2 fixed-bottom nav nav-pills nav-justified mb-2">
      <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i> <span class="ms-1">Home</span></a>
      <a class="nav-link" href="#"><i class="fa-solid fa-circle-plus fa-2xl"></i></a>
      <a class="nav-link" href="#"><i class="fa-solid fa-user"></i></a>
      <a class="nav-link" @click="logout" href="#"><i class="fa-solid fa-right-from-bracket"></i></a>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const userData = ref(null); 
    const router = useRouter();

    const getUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getUser', { withCredentials: true });
        console.log('Dados do usuário:', response.data);
        userData.value = response.data;
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    const logout = async () => {
      try {
        await axios.post('http://localhost:3000/auth/logout', {}, { withCredentials: true });
        console.log('Logout realizado com sucesso');
        router.push('/login');
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      }
    };

    onMounted(() => {
      getUserData();
    });

    return { userData, logout };
  },
};
</script>