<template>
  <div class="container">
    <h1>Bem-vindo ao App!</h1><br>
  </div>
  <div>
    <nav class="mx-2 fixed-bottom nav nav-pills nav-justified mb-2">
      <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i> <span
          class="ms-1">Home</span></a>
      <a class="nav-link" href="#"><i class="fa-solid fa-circle-plus fa-2xl"></i></a>
      <a class="nav-link" href="/app/profile"><i class="fa-solid fa-user"></i></a>
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
    const apiUrl = import.meta.env.VITE_API_URL;

    const getUserData = async () => {
      try {
        const response = await axios.get(`http://${apiUrl}/api/getUser`, { withCredentials: true });
        console.log('Dados do usuário:', response.data);
        userData.value = response.data;
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };


    onMounted(() => {
      getUserData();
    });

    return { userData };
  },
};
</script>