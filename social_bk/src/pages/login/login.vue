<template>

<LoginTemplate>
  <span slot="menuesquerdo">
    <img src="https://png.pngtree.com/png-vector/20191003/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" width="100%">
  </span>
  <span slot="principal">
      <h3>Login</h3>
      <input type="text" placeholder="E-mail" v-model="email">
      <input type="password" placeholder="Senha" v-model="password">
      <button class="btn primary" v-on:click="login()">Entrar</button>
      <router-link class="btn orange" to="/cadastro">Cadastre-se</router-link>
  </span>
</LoginTemplate>

</template>

<script>
import LoginTemplate from '@/templates/LoginTemplate'
import axios from 'axios'

export default {  
  name: 'login',
  data () {
    return {
        email:'',
        password:'',
        device_name: 'vue_spa'
    }
  },
  components:{
    LoginTemplate
  },
  methods:{
    login(){
      console.log("ok"),
      axios.get('http://projetosalacarte.local/api/')
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
