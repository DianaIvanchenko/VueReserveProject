<template>
  <div id="app">

    <component :is="layout">
      <router-view/>
    </component>
  </div>
  
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
export default {
  computed: {
    layout() {

      return 'empty-layout'
    }
  },
  components: {
    EmptyLayout
  }
}
</script>

<style lang="scss">
//@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
@import 'assets/style.css';

</style>

