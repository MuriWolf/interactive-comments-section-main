<template>
  <div class="add-comment">
    <img class="comment__profile__img add-comment__item" :src="currentUser.image.png" alt="">
    <textarea class="input add-comment__textarea add-comment__item" rows="4" placeholder="Add a comment..." v-model="commentContent">replyingTo</textarea>
    <button class="btn btn--blue add-comment__item" @click="postComment(idComment, commentContent, urlComment, comments, replyingTo); alternateReloadPage(true); commentContent=''">send</button>
  </div>
</template>

<script lang="ts">
import User from '@/types/User'
import { computed, defineComponent, PropType, ref } from 'vue'
import postComment from "@/modules/postComment"
import CommentType from '@/types/Comment';
import { useStore } from 'vuex'
export default defineComponent({
  setup(props) {
    const store = useStore();
    const reloadPage = computed(() => store.state.reloadPage);
    const alternateReloadPage = (bool: boolean) => {
      store.commit('alternateReloadPage', bool)
    }
    let commentContent = ref("");    
    if (props.replyingTo) { commentContent = ref("@"+props.replyingTo+" "); }
    return { postComment, commentContent, alternateReloadPage, reloadPage }
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