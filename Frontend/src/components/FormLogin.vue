<template>
  <div>
    <form class="form-signin">
      <h1 class="font-weight-normal text-center">Entrar</h1>

      <div class="row p-3 g-3">
        <label for="emailLogin" class="sr-only">Seu email</label>
        <input v-model="email" type="email" id="emailLogin" class="form-control" placeholder="Seu email" required
          autofocus>
        <label for="passwordLogin" class="sr-only">Sua senha</label>
        <input v-model="password" type="password" id="passwordLogin" class="form-control" placeholder="Sua senha"
          required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Lembre-me
          </label>
        </div>
      </div>
      <BtnRoxo class="col-12" id="btnLogin" type="submit" text="Entrar" @click="submitForm" />
      <div class="row text-center px-3 justify-content-center mb-4">
        <span class="my-3">Ou entre com o</span>
        <a id="btnLoginGoogle" class="btn btn-light shadow border text-secondary rounded-5"><img
            src="@/assets/google.svg" class="mx-1 p-md-1 imgGoogle" alt="logo google" style="width: 23px;"> Google</a>
      </div>
      <hr class="my-4">
      <p>Ainda não é cadastrado? <a href="/registrar">Clique aqui</a> e registre-se agora!</p>

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import BtnRoxo from '@elements/BtnRoxo.vue';

const email = ref('');
const password = ref('');

const submitForm = async () => {
  try {

    const response = await axios.post('http://localhost:3000/auth/login', {
      email: email.value,
      password: password.value,

    }, {
      withCredentials: true,
    },);

    console.log('Resposta do backend:', response.data);
  } catch (error) {

    console.error('Erro ao enviar formulário login:', error);
  }
};
</script>


<style scoped>
a {
  text-decoration: none;
}

.login {
  border-radius: 0px 15px 15px 0px;
}
</style>
