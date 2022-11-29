<template>
  <main class="l-container" >
    <comments-component v-if="comments && user" :comments="comments" :currentUser="user" :replies="replies"/>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import CommentsComponent from '@/components/CommentsComponent.vue'
import CommentType from "@/types/Comment"
import User from "@/types/User"
import getData from "@/modules/getData";
import { useStore } from 'vuex'
export default defineComponent({
  components: { CommentsComponent },
  setup() {
    const store = useStore();
    const reloadPage = computed(() => store.state.reloadPage);
    const alternateReloadPage = (bool: boolean) => {  
      store.commit('alternateReloadPage', bool)
    }

    watch(reloadPage, () => {
      if (reloadPage.value === true) {
        setTimeout(() => {
          getData<CommentType[]>("https://interactive-comment-sectionn.herokuapp.com/comments").then(data => {
          comments.value = data
          })
          getData<CommentType[]>("https://interactive-comment-sectionn.herokuapp.com/replies").then(data => {
            replies.value = data        
          })
          getData<User>("https://interactive-comment-sectionn.herokuapp.com/currentUser").then(data => {
            user.value = data
          })
          alternateReloadPage(false)
        }, 1750)
        }
    })

    const comments = ref<CommentType[]>([])
    const replies = ref<CommentType[]>([])
    const user = ref<User>()  
    var getUpatedData = ref<boolean>(false);
    onMounted(() => {
        getData<CommentType[]>("https://interactive-comment-sectionn.herokuapp.com/comments").then(data => {
          comments.value = data
        })
        getData<CommentType[]>("https://interactive-comment-sectionn.herokuapp.com/replies").then(data => {
          replies.value = data        
        })
        getData<User>("https://interactive-comment-sectionn.herokuapp.com/currentUser").then(data => {
          user.value = data
        })
      })
    return { comments, replies, user, getUpatedData, reloadPage, alternateReloadPage }
  }
})
</script>