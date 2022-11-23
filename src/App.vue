<template>
  <main class="l-container">
    <comments-component v-if="comments && user" :comments="comments" :currentUser="user" :replies="replies"/>
  </main>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref, watchEffect } from 'vue'
import CommentsComponent from '@/components/CommentsComponent.vue'
import CommentType from "@/types/Comment"
import User from "@/types/User"
import getData from "@/modules/getData";
export default defineComponent({
  components: { CommentsComponent },
  setup() {
    const reloadPage = inject('reloadPage')
    const comments = ref<CommentType[]>([])
    const replies = ref<CommentType[]>([])
    const user = ref<User>()  

    // watchEffect(() => {
    //   if (reloadPage === true) {
    //     getData<CommentType[]>("http://localhost:3000/comments").then(data => {
    //       comments.value = data
    //     })
    //     getData<CommentType[]>("http://localhost:3000/replies").then(data => {
    //       replies.value = data
    //       console.log(data);
          
    //     })
    //     getData<User>("http://localhost:3000/currentUser").then(data => {
    //       user.value = data
    //     })
    //   }
    // })
    onMounted(() => {
      getData<CommentType[]>("http://localhost:3000/comments").then(data => {
        comments.value = data
      })
      getData<CommentType[]>("http://localhost:3000/replies").then(data => {
        replies.value = data
        console.log(data);
        
      })
      getData<User>("http://localhost:3000/currentUser").then(data => {
        user.value = data
      })
    })
    return { comments, replies, user, reloadPage }
  }
})
</script>


<style lang="scss">

</style>
