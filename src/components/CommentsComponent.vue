<template>
  <div class="comments-section">
    <div v-for="comment in comments" :key="comment.id" class="comment-container">
      <comment-component :comment="comment"/>
    </div>
  </div>
  <add-comment :currentUser="currentUser"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CommentComponent from '@/components/CommentComponent.vue';
import addComment from '@/components/addComment.vue';
import CommentType from '@/types/Comment'
import User from '@/types/User'

export default defineComponent({
  props: {
    comments: {
        required: true,
        type: Array as PropType<CommentType[]>,
    },
    currentUser: {
        required: true,
        type: Object as PropType<User>,
    },
},
    components: { CommentComponent, addComment },
})
</script>

<style>

</style>