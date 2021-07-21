<template>
  <span>
    <header>
      <navbar href="http://localhost:8080/static/images/logo-seo.png" url="/" cor="grey lighten-4">
        <li><router-link to="/" class="cyan darken-3 waves-effect waves-light btn">Home</router-link></li>
        <li><router-link to="/cadastro" class="cyan darken-3 waves-effect waves-light btn">Cadastre-se</router-link></li>
        <li><router-link to="/login" class="cyan darken-3 waves-effect waves-light btn">Entrar</router-link></li>
      </navbar>
    </header>
    
    <main>
      <div class="container">
        <div class="row">
          <gridvue tamanho="5">
              <CardMenuVue>
                <slot name="menuesquerdo" />
              </CardMenuVue>
              <CardMenuVue>
                <h4>Teste</h4>
              </CardMenuVue>
          </gridvue>
          <gridvue tamanho="7">
            <slot name="principal" />
          </gridvue>
        </div>
      </div>
    </main>

    <footervue cor="blue accent-4" logo="Social" descricao="Teste de descrição" ano="2019">
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
  
  name: 'SiteTemplate',
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
