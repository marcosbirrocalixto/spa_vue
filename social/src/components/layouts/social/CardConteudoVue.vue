<template>

  <div class="row">
      <div class="card">
        <div class="card-content">
              <div class="row valign-wrapper">
                <gridvue tamanho="1">
                  <img :src="perfil" :alt="nome" class="circle responsive-img"> <!-- notice the "circle" class -->
                </gridvue>
                <gridvue tamanho="11">
                  <span class="black-text">
                    <strong>{{nome}}</strong> - <small>{{data}}</small>
                  </span>
                </gridvue>
              </div>

              <slot></slot>

            <div class="card-action">
              <p>
                <i class="material-icons">favorite_border</i>
                <i class="material-icons">insert_comment</i>
              </p>
            </div>
          </div>        
      </div>
  </div>
</template>

<script>
import gridvue from '@/components/layouts/gridvue/gridvue'

export default {
  name: 'CardConteudoVue',
  props:['perfil','nome','data'],
  data () {
    return {

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