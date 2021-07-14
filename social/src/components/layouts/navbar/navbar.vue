<template>

      <nav :class="cor || 'teal darken-4'">
        <div class="nav-wrapper container">
          <router-link class="brand-logo" :to="url || '/'">{{logo || 'Logo'}}</router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <slot />
          </ul>
        </div>
      </nav>

</template>

<script>
export default {
  name: 'navbar',
  props:['logo','url','cor'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
