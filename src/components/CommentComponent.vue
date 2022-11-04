<template>
    <div class="comment-container">
      <div class="comment">
        <div class="comment__rate">
          <button class="comment__rate__up-btn">+</button>
          <p class="comment__rate__value" >5</p>
          <button class="comment__rate__up-btn">-</button>
        </div>
        <div class="comment__content">
          <div class="comment__content__info">
            <div class="comment__profile">
              <img class="comment__profile__img" src="../assets/avatars/image-amyrobson.png" alt="">
              <h4 class="comment__profile__name">Joaozinho</h4>
              <p>1 month ago</p>
            </div>
            <button class="comment__reply-btn"><img src="../assets/icon-reply.svg" alt=""> Reply</button>
          </div>
          <div class="comment__content__text">
            <p v-if="comment">{{ comment.content }}</p>
          </div>
        </div>
      </div>
        <div class="reply-comments">

        </div>
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
        return {}
    },
})
</script>


<style>

</style>