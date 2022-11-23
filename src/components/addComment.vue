<template>
  <div class="add-comment">
    <img class="comment__profile__img add-comment__item" :src="currentUser.image.png" alt="">
    <textarea class="input add-comment__textarea add-comment__item" rows="4" placeholder="Add a comment..." v-model="commentContent">replyingTo</textarea>
    <button class="btn btn--blue add-comment__item" @click="postComment(idComment, commentContent, urlComment, comments, replyingTo); ">send</button>
  </div>
</template>

<script lang="ts">
import User from '@/types/User'
import { defineComponent, inject, PropType, ref } from 'vue'
import postComment from "@/modules/postComment"
import CommentType from '@/types/Comment';

export default defineComponent({
  setup(props) {
    let commentContent = ref("");
    // const reloadPage = inject('reloadPage')
    // console.log(reloadPage);
    if (props.replyingTo) { commentContent = ref("@"+props.replyingTo+" "); }
    return { postComment, commentContent, }
  },
  props: {
    currentUser: {
        required: true,
        type: Object as PropType<User>,
    },
    urlComment: {
        required: true,
        type: String,
    },
    replyingTo: {
        required: true,
        type: String,
    },
    idComment: {
        required: true,
        type: Number,
    },
    comments: {
        required: true,
        type: Object as PropType<CommentType[]>,
    }
  },
})
</script>