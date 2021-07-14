<template>

  <div class="row">
    <gridvue class="input-field" tamanho="12">
      <textarea id="conteudoID" v-model="conteudo" class="materialize-textarea"></textarea>
      <label for="conteudoID">O que está acontecendo?</label>
    </gridvue>
    <p>
      <gridvue v-if="conteudo" class="btn waves-effect waves-light" tamanho="2 offset-s10">Publicar</gridvue>
    </p>
  </div>

</template>

<script>
import gridvue from '@/components/layouts/gridvue/gridvue'

export default {
  name: 'PublicarConteudoVue',
  props:[],
  data () {
    return {
      conteudo:''
    }
  },
  components:{
    gridvue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>