<template>
  <div v-if="comment" class="comment">
    <div class="comment__rate">
      <button v-on:click="{comment.score++}" class="comment__rate__up-btn">+</button>
      <p class="comment__rate__value">{{ comment.score }}</p>
      <button class="comment__rate__up-btn">-</button>
    </div>
    <div class="comment__content">
      <div class="comment__content__info">
        <div class="comment__profile">
          <img class="comment__profile__img" :src="(comment.user.image.png)" alt="">
          <h4 class="comment__profile__name">{{ comment.user.username }}</h4>
          <p>{{ comment.created }}</p>
        </div>
        <button class="comment__reply-btn"><img src="../assets/icon-reply.svg" alt=""> Reply</button>
      </div>
      <div class="comment__content__text">
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
  <div v-if="comment.replies" class="reply-comments">
    <comment-component v-for="reply in comment.replies" :key="reply" :comment="reply"/>
  </div>
</template>

<script lang="ts">
import CommentType from '@/types/Comment'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    comment: {
        required: true,
        type: Object as PropType<CommentType>,
    },
},
    setup() {
        return {  }
    },
})
</script>


<style>

</style>