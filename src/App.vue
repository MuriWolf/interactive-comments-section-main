<template>
  <main class="container">
    <comments-component v-if="comments && user" :comments="comments" :currentUser="user"/>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import CommentsComponent from '@/components/CommentsComponent.vue'
import CommentType from "@/types/Comment"
import User from "@/types/User"
import getData from "@/modules/getData";
export default defineComponent({
  components: { CommentsComponent },
  setup() {
    const comments = ref<CommentType[]>([])
    const user = ref<User>()  
    onMounted(() => {
      getData<CommentType[]>("http://localhost:3000/comments").then(data => {
        comments.value = data
      })
      getData<User>("http://localhost:3000/currentUser").then(data => {
        user.value = data
      })
    })
    return {comments, user }
  }
})
</script>


<style lang="scss">

</style>
