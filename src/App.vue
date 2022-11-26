<template>
  <div v-if="reloadPage" @click="alternateReloadPage(false)">The reload page is true!</div>
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
      setTimeout(() => {
        if (reloadPage.value === true) {
          getData<CommentType[]>("http://localhost:3000/comments").then(data => {
            comments.value = data
          })
          getData<CommentType[]>("http://localhost:3000/replies").then(data => {
            replies.value = data        
          })
          getData<User>("http://localhost:3000/currentUser").then(data => {
            user.value = data
          })
          alternateReloadPage(false)
        }
      }, 250)
    })

    const comments = ref<CommentType[]>([])
    const replies = ref<CommentType[]>([])
    const user = ref<User>()  
    var getUpatedData = ref<boolean>(false);
    onMounted(() => {
        getData<CommentType[]>("http://localhost:3000/comments").then(data => {
          comments.value = data
        })
        getData<CommentType[]>("http://localhost:3000/replies").then(data => {
          replies.value = data        
        })
        getData<User>("http://localhost:3000/currentUser").then(data => {
          user.value = data
        })
      })
    return { comments, replies, user, getUpatedData, reloadPage, alternateReloadPage }
  }
})
</script>


<style lang="scss">

</style>

function $reloadPage($reloadPage: any) {
  throw new Error('Function not implemented.');
}

function reloadPage(reloadPage: any) {
  throw new Error('Function not implemented.');
}

function forceUpdate() {
  throw new Error('Function not implemented.');
}

function forceUpdate() {
  throw new Error('Function not implemented.');
}

function forceUpdate() {
  throw new Error('Function not implemented.');
}
