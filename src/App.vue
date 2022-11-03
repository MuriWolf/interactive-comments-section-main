<template>
  <div v-for="comment in comments" :key="comment.id">
    <p>{{comment.content}}</p>
  </div>
  <div> {{ user }}</div>
  <comments-component/>
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
        console.log(data);
      })

      getData<User>("http://localhost:3000/currentUser").then(data => {
        user.value = data
        console.log(user.value.username);
      })

    })
    return { comments, user }
}
  })
</script>


<style lang="scss">

</style>
