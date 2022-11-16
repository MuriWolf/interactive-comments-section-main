<!-- eslint-disable vue/no-use-v-if-with-v-for -->
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

        <button
          v-if="comment.user.username !== currentUser.username"
          @click="showReply = !showReply"
          class="comment__reply-btn">
          <img src="../assets/icon-reply.svg" alt=""> Reply
        </button>

        <div v-else class="comment__controls">
          <button @click="deleteComment(urlComment)" class="btn-reset clr--red font-sz--16 font-wt--500"><img src="@/assets/icon-delete.svg" alt=""> Delete</button>
          <button @click="editing = !editing" class="btn-reset clr--blue font-sz--16 font-wt--500"><img src="@/assets/icon-edit.svg" alt=""> Edit</button>
        </div>

      </div>
      <div class="comment__content__text">
        <p>{{ comment.content }}</p>
      </div> 

    </div>
      <button v-if="editing" class="btn btn--blue align-self-right">Update</button>
  </div>

  <div class="reply-comments" :class="{ 'margin-top--1em': filteredReplies(comment.id, replies).length }">
    <div class="comment-container" v-for="reply in filteredReplies(comment.id, replies)" :key="reply.id">
      <comment-component v-if="filteredReplies(comment.id, replies).length" :replies="replies" :comment="reply" :currentUser="currentUser" @increase-score="reply.score++" @decrease-score="reply.score--"/>
    </div>
  </div>

  <add-comment v-if="showReply" :currentUser="currentUser" :replyingTo="comment.user.username" :urlComment="urlForComment" :idComment="comment.id" class="margin-top--05em"/>
</template>

<script lang="ts">
import CommentType from '@/types/Comment'
import User from '@/types/User'
import { defineComponent, PropType, ref } from 'vue'
import deleteComment from "@/modules/deleteComment";
import addComment from "@/components/AddComment.vue";

export default defineComponent({
  setup(props) {
    function filteredReplies(id: number, replies: CommentType[]) {
      return replies.filter(reply => {
        if(reply.commentId == id) {
          return reply;
        }
      })
    }
    const editing = ref<boolean>();
    const showReply = ref<boolean>();
    const urlForComment = ref<string>("/replies/");
    var urlComment = ref<string>("");
    urlComment.value = props.comment.commentId ? `replies/${props.comment.id}` : `comments/${props.comment.id}`
    return { deleteComment, urlComment, showReply, urlForComment, filteredReplies, editing }
  },
  emits: ['increaseScore', 'decreaseScore'],
  props: {
    comment: {
      required: true,
      type: Object as PropType<CommentType>,
    },
    replies: {
      required: true,
      type: Object as PropType<CommentType[]>,
    },
    currentUser: {
        required: true,
        type: Object as PropType<User>,
    },
  },
  components: { addComment }
})
</script>

<!-- <style scoped>
  .fade-enter-from {
    transform: translateX(-100%);
  }
  .fade-enter-active, .fade-leave-active  {
    transition: all 0.5s ease;
  }

  .fade-leave-to {
    transform: translateX(0%);
  }
</style> -->
