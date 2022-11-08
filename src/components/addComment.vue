<template>
  <div class="add-comment">
    <img class="comment__profile__img add-comment__item" :src="currentUser.image.png" alt="">
    <textarea class="input add-comment__textarea add-comment__item" rows="4" placeholder="Add a comment..." v-model="commentContent"></textarea>
    <button class="btn btn--blue add-comment__item" @click="postComment('http://localhost:3000/comments', commentContent)">send</button>
  </div>
</template>

<script lang="ts">
import User from '@/types/User'
import { defineComponent, PropType, ref } from 'vue'
import postComment from "@/modules/postComment"

export default defineComponent({
  props: {
    currentUser: {
        required: true,
        type: Object as PropType<User>,
    },
  },
  setup() {
    const commentContent = ref("");
    return { postComment, commentContent }
  },
})
</script>
