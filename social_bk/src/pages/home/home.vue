<template>

<SiteTemplate>

  <span slot="menuesquerdo">
      <div class="row valign-wrapper">
        <gridvue tamanho="5">
          <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
        </gridvue>
        <gridvue tamanho="7">
          <span class="black-text">
            <h5>Maria Silva</h5>
            This is a square image. 
          </span>
        </gridvue>
      </div>
  </span>

  <span slot="principal">
    <PublicarConteudoVue />

    <CardConteudoVue 
      perfil="https://materializecss.com/images/yuna.jpg" 
      nome="Maria Silva" 
      data="27/01/2021 17:25">

        <CardDetalheVue
          imagem="https://materializecss.com/images/sample-1.jpg" 
          titulo="Título" 
          texto="Descriçao do post">
        </CardDetalheVue> 
    </CardConteudoVue>
  </span>

    

</SiteTemplate>

</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'
import CardConteudoVue from '@/components/layouts/social/CardConteudoVue'
import CardDetalheVue from '@/components/layouts/social/CardDetalheVue'
import PublicarConteudoVue from '@/components/layouts/social/PublicarConteudoVue'
import gridvue from '@/components/layouts/gridvue/gridvue'

export default {  
  name: 'home',
  data () {
    return {

    }
  },
  components:{
    SiteTemplate,
    CardConteudoVue,
    CardDetalheVue,
    PublicarConteudoVue,
    gridvue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
