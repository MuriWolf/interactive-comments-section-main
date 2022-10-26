<template>
  <div class="comments-section">
    <comment-component/>
  </div>
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

<style>

</style>