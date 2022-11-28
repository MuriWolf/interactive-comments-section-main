<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <delete-modal v-if="deleting && !finishedFetch" :urlComment="urlComment" @change-deleting="deleting = !deleting" @make-delete="finishedFetch =  deleteComment(urlComment)"/>
  <div v-if="comment && currentUser" class="comment d-flex align-items-md-start flex-column-reverse flex-md-row">
    <div class="comment__rate align-self-start">
      <button @click="$emit('increaseScore'); updateComment(urlComment, 'score', comment.score)" class="comment__rate__up-btn">+</button>
      <p class="comment__rate__value">{{ comment.score }}</p>
      <button @click="$emit('decreaseScore'); updateComment(urlComment, 'score', comment.score)" class="comment__rate__up-btn">-</button>
    </div>
    <div class="comment__content flex-grow-1 flex-basis-0">
      <div class="comment__content__info">
        <div class="comment__profile">
          <img class="comment__profile__img" :src="(comment.user.image.png)" alt="">
          <h4 class="comment__profile__name">{{ comment.user.username }}</h4>
          <span v-if="comment.user.username === currentUser.username" class="comment__profile__you">you</span>
          <p>{{ comment.createdAt }}</p>
        </div>
        <button
          v-if="comment.user.username !== currentUser.username"
          @click="showReply = !showReply"
          class="comment__reply-btn">
          <img src="../assets/icon-reply.svg" alt=""> Reply
        </button>
        <div v-else class="comment__controls">
          <button @click="deleting = !deleting" class="btn-reset clr--red font-sz--16 font-wt--500"><img src="@/assets/icon-delete.svg" alt=""> Delete</button>
          <button @click="editing = !editing" class="btn-reset clr--blue font-sz--16 font-wt--500"><img src="@/assets/icon-edit.svg" alt=""> Edit</button>
        </div>
      </div> 
      <div class="mt-4 d-flex flex-grow-1 w-100 flex-column">
        <p :class="{ 'd-none': editing }" >{{ comment.content }}</p>
        <textarea ref="addCommentTextarea" class="input add-comment__textarea add-comment__item" :class="{ 'd-none': !editing }" rows="4" placeholder="Add a comment..." v-model="commentContent"></textarea>
        <button v-if="editing" @click="finishedFetch = updateComment(urlComment, 'content', commentContent); editing = !editing" class="my-4 btn btn--blue align-self-end  justify-content-between">Update</button>
      </div>
    </div>
  </div>

  <div class="reply-comments" :class="{ 'margin-top--1em': filteredReplies(comment.id, replies).length }">
    <div class="comment-container" v-for="reply in filteredReplies(comment.id, replies)" :key="reply.id">
      <comment-component v-if="filteredReplies(comment.id, replies).length" :replies="replies" :comment="reply" :currentUser="currentUser" @increase-score="reply.score++" @decrease-score="reply.score--"/>
    </div>
  </div>

  <add-comment @stopReplying="showReply = false" v-if="showReply" :currentUser="currentUser" :replyingTo="comment.user.username" :urlComment="urlForComment" :idComment="comment.id" class="margin-top--05em"/>
</template>

<script lang="ts">
import CommentType from '@/types/Comment'
import User from '@/types/User'
import { computed, defineComponent, PropType, ref, watch } from 'vue'
import deleteComment from "@/modules/deleteComment";
import updateComment from "@/modules/updateComment";
import AddComment from "@/components/AddComment.vue";
import deleteModal from "@/components/DeleteModal.vue";
import { useStore } from 'vuex'

export default defineComponent({
  setup(props) {
    let finishedFetch = ref<boolean>(false)
    const store = useStore();
    const reloadPage = computed(() => store.state.reloadPage);
    watch(finishedFetch, () => {
      if (finishedFetch.value === true) {
        finishedFetch.value = false
        store.commit('alternateReloadPage', true)
      }
    })
    function filteredReplies(id: number, replies: CommentType[]) {
      return replies.filter(reply => {
        if(reply.commentId == id) {
          return reply;
        }
      })
    }
    const addCommentTextarea = ref();
    const editing = ref<boolean>(false);
    const deleting = ref<boolean>(false);
    const showReply = ref<boolean>();
    const urlForComment = ref<string>("/replies/");
    var urlComment = ref<string>("");
    var commentContent = ref<string>(props.comment.content);

    urlComment.value = props.comment.commentId ? `replies/${props.comment.id}` : `comments/${props.comment.id}`

    watch(editing, () => {
      if (editing.value == true) {
        setTimeout(() => {
          addCommentTextarea.value.focus();
        }, 50)
      }
    })
    return { deleteComment, urlComment, showReply,
             urlForComment, filteredReplies, editing,
             commentContent, addCommentTextarea, updateComment,
             deleting, reloadPage, finishedFetch
            }
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
  components: { AddComment, deleteModal }
})
</script>
