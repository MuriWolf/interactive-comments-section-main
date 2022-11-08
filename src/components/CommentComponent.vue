<template>
  <div v-if="comment && currentUser" class="comment">
    <div class="comment__rate">
      <button @click="$emit('increaseScore')" class="comment__rate__up-btn">+</button>
      <p class="comment__rate__value">{{ comment.score }}</p>
      <button @click="$emit('decreaseScore')" class="comment__rate__up-btn">-</button>
    </div>
    <div class="comment__content">
      <div class="comment__content__info">
        <div class="comment__profile">
          <img class="comment__profile__img" :src="(comment.user.image.png)" alt="">
          <h4 class="comment__profile__name">{{ comment.user.username }}</h4>
          <p>{{ comment.createdAt }}</p>
        </div>
        <button v-if="comment.user.username !== currentUser.username" class="comment__reply-btn"><img src="../assets/icon-reply.svg" alt=""> Reply</button>
        <div v-else class="comment__controls ">
          <button class="btn-reset clr--red font-sz--16 font-wt--500"><img src="@/assets/icon-delete.svg" alt=""> Delete</button>
          <button class="btn-reset clr--blue font-sz--16 font-wt--500"><img src="@/assets/icon-edit.svg" alt=""> Edit</button>
        </div>
      </div>
      <div class="comment__content__text">
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
  <div v-if="comment.replies" class="reply-comments" :class="{ 'margin-top--1em': comment.replies.length != 0 }">
    <comment-component 
      v-for="reply in comment.replies"
      :currentUser="currentUser"
      :key="reply" :comment="reply"
      @increase-score="reply.score++"
      @decrease-score="reply.score--"
    />
  </div>
</template>

<script lang="ts">
import CommentType from '@/types/Comment'
import User from '@/types/User'
import { defineComponent, PropType } from 'vue'


export default defineComponent({
  emits: ['increaseScore', 'decreaseScore'],
  props: {
    comment: {
      required: true,
      type: Object as PropType<CommentType>,
    },
    currentUser: {
        required: true,
        type: Object as PropType<User>,
    },
  },
})
</script>

