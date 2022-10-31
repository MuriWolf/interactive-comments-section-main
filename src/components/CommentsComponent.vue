<template>
  <div class="comments-section">
    <comment-component/>
    <add-comment/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommentComponent from '@/components/CommentComponent.vue';
import addComment from '@/components/addComment.vue';

export default defineComponent({
    components: { CommentComponent, addComment },
    setup() {
        return {}
    },
})
</script>

<style>

</style>