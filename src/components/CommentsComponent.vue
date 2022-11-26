<template>
  <div class="comments-section">
    <div v-for="comment in comments" :key="comment.id" class="comment-container">
      <comment-component :replies="replies" :comment="comment" :currentUser="currentUser" @increase-score="comment.score++" @decrease-score="comment.score--"/>
    </div>
  </div>
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