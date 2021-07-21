<template>
  <span>
    <header>
      <navbar logo="Projetos a la Carte" url="/" cor="teal darken-4">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cadastro">Cadastre-se</router-link></li>
        <li><router-link to="/login">Entrar</router-link></li>
      </navbar>
    </header>
    
    <main>
      <div class="container">
        <div class="row">
          <gridvue tamanho="6">
            <CardMenuVue>
              <slot name="menuesquerdo" />
            </CardMenuVue>
          </gridvue>
          <gridvue tamanho="6">
            <slot name="principal" />
          </gridvue>
        </div>
      </div>
    </main>

    <footervue cor="teal darken-4" logo="Social" descricao="Teste de descrição" ano="2019">
        <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
    </footervue>

  </span>
</template>

<script>
import navbar from '@/components/layouts/navbar/navbar'
import footervue from '@/components/layouts/footer/footervue'
import gridvue from '@/components/layouts/gridvue/gridvue'
import CardMenuVue from '@/components/layouts/cardmenuvue/CardMenuVue'

export default {
  
  name: 'LoginTemplate',
  components:{
    navbar, 
    footervue, 
    gridvue,
    CardMenuVue,
  }
}
</script>

<style>

</style>
