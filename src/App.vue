<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/> -->


  <comments-component/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommentsComponent from '@/components/CommentsComponent.vue'

export default defineComponent({
  components: { CommentsComponent },
  setup() {
    return {}
  },
})
</script>


<style lang="scss">

</style>
