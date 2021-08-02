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
      console.log("ok");
      axios.post(`http://projetosalacarte.local/api/sanctum/token`, {
        email: this.email,
        password: this.password,
        device_name: this.device_name
      })
      .then(response => {
        //console.log(response)
        if(response.data.token){
          //login com sucesso
          console.log("login com sucesso")
          sessionStorage.setItem('usuario',JSON.stringify(response.data));
          this.$router.push('/');
        }else if(response.status == 404){
          //Login não existe
          console.log(response.status);
          alert("Login Inválido!!");
        }else{
          //Erros de validação
          console.log("Erros de validação");
          let erros = '';
          //transforma objeto em array de valores
          for(let erro of Object.values(response.data)){
            erros += erro+" ";
          }
          alert(erros);
        }
      })
      .catch(e => {
        console.log(e)
        alert("Servidor fora do ar!");
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
