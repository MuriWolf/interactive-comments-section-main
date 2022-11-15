<template>
  <div class="comments-section">
    <div v-for="comment in comments" :key="comment.id" class="comment-container">
      <comment-component :comment="comment" :currentUser="currentUser" @increase-score="comment.score++" @decrease-score="comment.score--"/>
      <div class="reply-comments" v-for="reply in replies" :key="reply.id" :class="{ 'margin-top--1em': comment.id == reply.commentId }">
        <comment-component v-if="comment.id == reply.commentId" :comment="reply" :currentUser="currentUser"  @increase-score="comment.score++" @decrease-score="comment.score--" />
      </div>
    </div>
  </div>
  <add-comment :currentUser="currentUser" :urlComment="urlComment"/>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import CommentComponent from '@/components/CommentComponent.vue';
import addComment from '@/components/AddComment.vue';
import CommentType from '@/types/Comment';
import User from '@/types/User';

export default defineComponent({
  setup() {
    const urlComment = ref<string>("/comments");
    return { urlComment }
  },
  props: {
    comments: {
        required: true,
        type: Array as PropType<CommentType[]>,
    },
    replies: {
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