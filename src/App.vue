<template>
  <main class="l-container" >
    <comments-component v-if="comments && user" :comments="comments" :currentUser="user" :replies="replies"/>
  </main>
</template>

<script lang="ts">
import { defineComponent,  onMounted, ref, reactive  } from 'vue'
import CommentsComponent from '@/components/CommentsComponent.vue'
import CommentType from "@/types/Comment"
import User from "@/types/User"
import getData from "@/modules/getData";
export default defineComponent({
  components: { CommentsComponent },
  setup() {
    const comments = ref<CommentType[]>([])
    const replies = ref<CommentType[]>([])
    const user = ref<User>()  
    var getUpatedData = ref<boolean>(false);
    // function UpdateData() {
    //   console.log("apiugshgarwszsgdoij");
    //   getData<CommentType[]>("http://localhost:3000/comments").then(data => {
    //       comments.value = data
    //     })
    //     getData<CommentType[]>("http://localhost:3000/replies").then(data => {
    //       replies.value = data
    //       console.log(data);
          
    //     })
    //     getData<User>("http://localhost:3000/currentUser").then(data => {
    //       user.value = data
    //     })
    // }
    onMounted(() => {
      setTimeout(() => {
        getData<CommentType[]>("http://localhost:3000/comments").then(data => {
          comments.value = data
        })
        getData<CommentType[]>("http://localhost:3000/replies").then(data => {
          replies.value = data        
        })
        getData<User>("http://localhost:3000/currentUser").then(data => {
          user.value = data
        })
      }, 3000)
    })
    return { comments, replies, user, getUpatedData }
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
