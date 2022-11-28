<template>
  <transition-group tag="ul" name="fade" mode="in-out" appear class="comments-section">
    <li v-for="comment in comments" :key="comment.id" class="comment-container">
      <comment-component :replies="replies" :comment="comment" :currentUser="currentUser" @increase-score="comment.score++" @decrease-score="comment.score--"/>
    </li>
  </transition-group>
  <add-comment :idComment="0" :currentUser="currentUser" :urlComment="urlComment" :comments="comments" :replyingTo="false"/>
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
  emits: ['loadData'],
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

<style scoped>
  .fade-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  .fade-enter-active {
    transition: all 0.4s ease;
  }
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.6), translateY(200%);
  }
  .fade-leave-active {
    transition: all 0.4s ease;
    position: absolute;
  }
  .fade-move {
    transition: all 0.3s ease;
  }
</style>