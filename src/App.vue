<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/> -->
  <h1 class="font-yellow">home</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit dolorem repudiandae modi ratione error at distinctio natus illum expedita veritatis, aut fugiat dolorum quaerat cum, voluptas ullam eum alias.</p>

  <comment-component/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommentComponent from '@/components/CommentComponent.vue'

export default defineComponent({
  components: { CommentComponent },
  setup() {
    return {}
  },
})
</script>


<style lang="scss">

</style>
